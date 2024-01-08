import { Module } from '@nestjs/common';

import { ConfigModule } from '@src/config/config.module';
import { DiscordController } from '@src/discord/discord.controller';
import { DiscordService } from '@src/discord/discord.service';

@Module({
  imports: [ConfigModule],
  controllers: [DiscordController],
  providers: [DiscordService],
  exports: [DiscordService],
})
export class DiscordModule {}
