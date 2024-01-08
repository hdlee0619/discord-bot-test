import { Injectable, Logger } from '@nestjs/common';
import { Client, Message } from 'discord.js';

import { ICommandHandler } from '@src/command/ICommandHandler';
import { ConfigService } from '@src/config/config.service';
import { PingHandler } from '@src/command/ping/ping.handler';

@Injectable()
export class CommandService {
  commandHandlers: ICommandHandler[] = [];

  constructor(
    private readonly configService: ConfigService,

    private readonly pingHandler: PingHandler,
  ) {
    this.commandHandlers = [pingHandler];
  }

  register(client: Client) {
    for (const command of this.commandHandlers) {
      Logger.log(
        `${command.name} registered => ${
          command.regex ?? command.description ?? '?'
        }`,
        'CommandExplorer',
      );
    }

    client.on('messageCreate', async (message) => {
      try {
        Logger.log(message);
        await this.messageHandler(message);
      } catch (error) {
        Logger.error(error.message, error.stack);
      }
    });
  }

  async messageHandler(message: Message) {
    if (message.author.bot) return;

    const { content } = message;

    for (const handler of this.commandHandlers) {
      if (handler.test(message.content)) {
        try {
          Logger.debug(`executing command [${handler.name}] => ${content}`);
          await handler.execute(message);
        } catch (error) {
          Logger.error(error.message, error.stack);
        }
      }
    }
  }
}
