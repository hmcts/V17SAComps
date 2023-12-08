import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovukFrameComponent } from './govuk-frame.component';

describe('GovukFrameComponent', () => {
  let component: GovukFrameComponent;
  let fixture: ComponentFixture<GovukFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovukFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovukFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
