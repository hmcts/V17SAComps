import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaComponentsComponent } from './sa-components.component';

describe('SaComponentsComponent', () => {
  let component: SaComponentsComponent;
  let fixture: ComponentFixture<SaComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
