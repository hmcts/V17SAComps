import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Address } from '@hmcts/sa-components';

export const addressActions = createActionGroup({
  source: 'Address API',
  events: {
    load: emptyProps(),
    loaded: props<{ addresses: Address[] }>(),
    add: props<{ address: Address }>(),
    added: props<{ address: Address }>(),
    update: props<{ address: Address }>(),
    updated: props<{ address: Address }>(),
    remove: props<{ id: number }>(),
    removed: emptyProps(),
  }

})
