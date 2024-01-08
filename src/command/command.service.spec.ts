import { Test, TestingModule } from '@nestjs/testing';

import { CommandService } from '@src/command/command.service';
import { PingHandler } from '@src/command/ping/ping.handler';
import { ConfigService } from '@src/config/config.service';

describe('CommandService', () => {
  let service: CommandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandService, PingHandler, ConfigService],
    }).compile();

    service = module.get<CommandService>(CommandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
