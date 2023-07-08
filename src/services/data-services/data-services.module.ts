import { Module } from '@nestjs/common';
import { SqliteDataServicesModule } from '../../frameworks/data-services/sqlite/sqlite-data-services.module';

@Module({
  imports: [SqliteDataServicesModule],
  exports: [SqliteDataServicesModule],
})
export class DataServicesModule {}
