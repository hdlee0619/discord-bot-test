import { NestFactory } from '@nestjs/core';

import { AppModule } from '@src/app.module';
import { DiscordService } from '@src/discord/discord.service';
import { CommandService } from '@src/command/command.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const discordService = app.get(DiscordService);
  const commandService = app.get(CommandService);

  await app.listen(3000, async () => {
    const client = discordService.connect();
    commandService.register(client);
  });
}

bootstrap();
