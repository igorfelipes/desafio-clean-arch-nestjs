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
import { PurchaseController } from './controllers/purchase.controller';
import { PurchaseUseCasesModule } from './use-cases/purchase/purchase-use-cases.module';

@Module({
  imports: [
    DataServicesModule,
    ProductUseCasesModule,
    CustomerUseCasesModule,
    PurchaseUseCasesModule,
    CrmServicesModule,
  ],
  controllers: [
    AppController,
    ProductController,
    CustomerController,
    PurchaseController,
  ],
  providers: [],
})
export class AppModule {}
