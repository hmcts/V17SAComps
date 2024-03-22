import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CleanEditComponent } from './clean-edit.component';

describe('CleanComponentComponent', () => {
  let component: CleanEditComponent;
  let fixture: ComponentFixture<CleanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CleanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
