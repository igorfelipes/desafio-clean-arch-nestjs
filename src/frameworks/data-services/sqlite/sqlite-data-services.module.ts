import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/frameworks/data-services/sqlite/config/ormconfig'
import { DataSource } from 'typeorm';
import { IDataServices } from '../../../core/abstracts/data-services.abstract';
import { SqliteDataServices } from './sqlite-data-services.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        ...databaseProviders,
        {
            provide: IDataServices,
            useClass: SqliteDataServices,
        }
    ],
    exports: [DataSource, IDataServices]    
})
export class SqliteDataServicesModule {}
