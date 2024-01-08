import { Module } from '@nestjs/common';

import { ConfigService } from '@src/config/config.service';
import { CommandService } from '@src/command/command.service';

import { PingHandler } from '@src/command/ping/ping.handler';

@Module({
  providers: [CommandService, PingHandler, ConfigService],
  exports: [CommandService],
})
export class CommandModule {}
