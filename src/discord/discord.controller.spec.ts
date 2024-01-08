import { Test, TestingModule } from '@nestjs/testing';

import { DiscordController } from '@src/discord/discord.controller';
import { DiscordService } from '@src/discord/discord.service';

describe('DiscordController', () => {
  let controller: DiscordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscordController],
      providers: [DiscordService],
    }).compile();

    controller = module.get<DiscordController>(DiscordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
