import { Module } from '@nestjs/common';
import {
  AppController,
  ProductController,
  ClientController
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { CrmServicesModule } from './services/crm-services/crm-services.module';
import { ProductUseCasesModule } from './use-cases/product/product-use-cases.module';
import { ClientUseCasesModule } from 'src/use-cases/client/client-use-cases.module'

@Module({
  imports: [
    DataServicesModule,
    ProductUseCasesModule,
    ClientUseCasesModule,
    CrmServicesModule,
  ],
  controllers: [
    AppController,
    ProductController,
    ClientController
  ],
  providers: [],
})
export class AppModule {}
