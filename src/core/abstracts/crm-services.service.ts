
export abstract class ICrmServices {
  abstract bookAdded(book: any): Promise<boolean>;
}
