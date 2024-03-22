import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PollutedEditComponent } from './polluted-edit.component';

describe('PollutedComponentComponent', () => {
  let component: PollutedEditComponent;
  let fixture: ComponentFixture<PollutedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollutedEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PollutedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
