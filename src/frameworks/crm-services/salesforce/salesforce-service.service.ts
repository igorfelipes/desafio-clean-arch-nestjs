import { Injectable } from '@nestjs/common';
import { ICrmServices } from '../../../core/abstracts';

@Injectable()
export class SalesforceService implements ICrmServices {
  bookAdded(book: any): Promise<boolean> {
    // Implement salesforce api logic

    return Promise.resolve(true);
  }
}
