import { addressFeatures } from './address.reducer';
import { Address } from '@hmcts/sa-components';
import { createSelector } from '@ngrx/store';

const selectAll   = addressFeatures.selectAddresses
const selectFirstRecord = () => createSelector(selectAll, ( state: Address[]) =>
    state.at(0)
)

export const fromAddresses = {
  selectFirstRecord
}
