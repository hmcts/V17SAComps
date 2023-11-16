import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaBaseComponent } from './sa-base.component';

describe('SaComponentsComponent', () => {
  let component: SaBaseComponent;
  let fixture: ComponentFixture<SaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
