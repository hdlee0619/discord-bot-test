import { Controller } from '@nestjs/common';

import { DiscordService } from '@src/discord/discord.service';

@Controller('discord')
export class DiscordController {
  constructor(private readonly discordService: DiscordService) {}
}
