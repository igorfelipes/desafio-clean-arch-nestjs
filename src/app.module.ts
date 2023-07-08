import { Module } from '@nestjs/common';
import {
  AppController,
  ProductController,
  CustomerController
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { CrmServicesModule } from './services/crm-services/crm-services.module';
import { ProductUseCasesModule } from './use-cases/product/product-use-cases.module';
import { CustomerUseCasesModule } from 'src/use-cases/customer/customer-use-cases.module'

@Module({
  imports: [
    DataServicesModule,
    ProductUseCasesModule,
    CustomerUseCasesModule,
    CrmServicesModule,
  ],
  controllers: [
    AppController,
    ProductController,
    CustomerController
  ],
  providers: [],
})
export class AppModule {}
