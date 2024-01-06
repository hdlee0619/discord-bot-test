import { NestFactory } from '@nestjs/core';

import { AppModule } from '@src/app.module';
import { DiscordService } from '@src/discord/discord.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const discordService = app.get(DiscordService);

  await app.listen(3000, async () => {
    discordService.connect();
  });
}

bootstrap();
