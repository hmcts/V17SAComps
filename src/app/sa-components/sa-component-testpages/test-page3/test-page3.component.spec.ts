import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPage3Component } from './test-page3.component';

describe('TestPage3Component', () => {
  let component: TestPage3Component;
  let fixture: ComponentFixture<TestPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPage3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TestPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
