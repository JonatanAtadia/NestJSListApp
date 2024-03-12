import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemService } from './item/item.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ItemService],
})
export class AppModule {}
