import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { PurchaseFactoryService } from './purchase-factory.service';
import { PurchaseUseCases } from './purchase.use-cases';



@Module({
  imports: [DataServicesModule],
  providers: [PurchaseFactoryService, PurchaseUseCases],
  exports: [PurchaseFactoryService, PurchaseUseCases],
})
export class PurchaseUseCasesModule {}
