import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withDebugTracing,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { addressFeatures } from './sa-components/facade-example/polluted-component/state/address.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { NxRxAddressFacadeService } from './sa-components/facade-example/nx-rx-address-facade.service';
import { AddressFacadeServiceImpl } from './sa-components/facade-example/address.facade.service';


export const appConfig: ApplicationConfig = {
  providers: [
    { provide: AddressFacadeServiceImpl, useClass: NxRxAddressFacadeService},
    // provideHttpClient(withFetch()),
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withDebugTracing(),
    ),
    // withComponentInputBinding()
    provideStore(),
    provideState(addressFeatures),
    //provideEffects(AddressEffects),
    provideStoreDevtools(),
  ],
};
