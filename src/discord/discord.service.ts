import { Injectable, Logger } from '@nestjs/common';
import { Client, GatewayIntentBits } from 'discord.js';

import { ConfigService } from '@src/config/config.service';

@Injectable()
export class DiscordService {
  client: Client;
  isReady: boolean;

  constructor(private readonly config: ConfigService) {}

  connect(): Client {
    this.client = new Client({ intents: [GatewayIntentBits.Guilds] });

    this.client.on('ready', () => {
      Logger.log(`Discord connected with handle ${this.client.user.tag}`);
      this.isReady = true;
    });

    this.client
      .login(this.config.discordToken)
      .then((message) => Logger.log(message))
      .catch((error) => Logger.log(error));

    return this.client;
  }
}
