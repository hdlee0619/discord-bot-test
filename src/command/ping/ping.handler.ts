import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';

import { ICommandHandler } from '@src/command/ICommandHandler';

@Injectable()
export class PingHandler implements ICommandHandler {
  name = 'ping';
  regex = new RegExp(`^ping$`, 'i');

  test(content: string): boolean {
    return this.regex.test(content);
  }

  async execute(message: Message): Promise<void> {
    await message.reply('pong');
  }
}
