import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPage4Component } from './test-page4.component';

describe('TestPage4Component', () => {
  let component: TestPage4Component;
  let fixture: ComponentFixture<TestPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPage4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TestPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
