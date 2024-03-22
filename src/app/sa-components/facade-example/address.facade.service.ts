import { Address } from '@hmcts/sa-components';

export interface AddressFacadeService {
  load():void;
  getAddresses():Address[];
  updateAddress(address:Address):void;
  removeAddress(address:Address):void;
  removeAddressAt(index:number):void;
}


// Dont use this class its a placeholder for  runtime providers,
// create a concrete implementation of the interface
//See NxRxAddressFacadeService for an NgRx  example of how to create a concrete class
export class AddressFacadeServiceImpl implements AddressFacadeService {
    load() {
        throw new Error('Method not implemented.');
    }
    getAddresses(): Address[] {
        throw new Error('Method not implemented.');
    }
    updateAddress(address: Address): void {
        throw new Error('Method not implemented.');
    }
    removeAddress(address: Address): void {
        throw new Error('Method not implemented.');
    }
    removeAddressAt(index: number): void {
        throw new Error('Method not implemented.');
    }

}
