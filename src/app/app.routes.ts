import { Route } from '@angular/router';
import { TestPage1Component } from './sa-components/sa-component-testpages/test-page1/test-page1.component';
import { TestPage2Component } from './sa-components/sa-component-testpages/test-page2/test-page2.component';
import { TestPage3Component } from './sa-components/sa-component-testpages/test-page3/test-page3.component';
import { TestPage4Component } from './sa-components/sa-component-testpages/test-page4/test-page4.component';
import { TestPage5Component } from "./sa-components/sa-component-testpages/test-page5/test-page5.component";
import { TestPage6Component } from './sa-components/sa-component-testpages/test-page6/test-page6.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'test-page1',
  },
  { path: 'test-page1', component: TestPage1Component },
  { path: 'test-page2', component: TestPage2Component },
  { path: 'test-page3', component: TestPage3Component },
  { path: 'test-page4', component: TestPage4Component },
  { path: 'test-page5', component: TestPage5Component },
  { path: 'test-page6', component: TestPage6Component },
];
