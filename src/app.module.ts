import { Module } from '@nestjs/common';

import { ConfigModule } from '@src/config/config.module';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
