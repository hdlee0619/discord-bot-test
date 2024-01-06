import { Module } from '@nestjs/common';

import { ConfigModule } from '@src/config/config.module';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { DiscordModule } from '@src/discord/discord.module';

@Module({
  imports: [ConfigModule, DiscordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
