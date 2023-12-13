import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPage5Component } from './test-page5.component';

describe('TestPage5Component', () => {
  let component: TestPage5Component;
  let fixture: ComponentFixture<TestPage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPage5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
