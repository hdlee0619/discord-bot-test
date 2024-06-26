import { Injectable, Logger } from '@nestjs/common';
import { Client, GatewayIntentBits } from 'discord.js';

import { ConfigService } from '@src/config/config.service';

@Injectable()
export class DiscordService {
  client: Client;
  isReady: boolean;

  constructor(private readonly config: ConfigService) {}

  connect(): Client {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });

    this.client.once('ready', () => {
      Logger.log(`Discord connected with ${this.client.user.tag}`);
      this.isReady = true;
    });

    this.client
      .login(this.config.discordToken)
      .then((message) => Logger.log(`Success Login with ${message}`))
      .catch((error) => Logger.error(`Fail with ${error}`));

    return this.client;
  }
}
