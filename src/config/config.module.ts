import { Module } from '@nestjs/common';

import { ConfigService } from '@src/config/config.service';

@Module({
  providers: [ConfigService],
})
export class ConfigModule {}
