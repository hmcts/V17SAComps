import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPage6Component } from './test-page6.component';

describe('TestPage6Component', () => {
  let component: TestPage6Component;
  let fixture: ComponentFixture<TestPage6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPage6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TestPage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
