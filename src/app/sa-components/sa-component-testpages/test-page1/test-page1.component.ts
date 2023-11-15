import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddUserAddressContainerComponent} from "../../../../../libs/src/lib/wrappers/AddUserAddress/add-user-address-container-component";


@Component({
  selector: 'lib-test-page1',
  standalone: true,
    imports: [CommonModule, AddUserAddressContainerComponent],
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.scss'],
})
export class TestPage1Component {}
