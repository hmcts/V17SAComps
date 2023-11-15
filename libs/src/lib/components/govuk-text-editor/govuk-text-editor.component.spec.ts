import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovukTextEditorComponent } from './govuk-text-editor.component';

describe('GovukTextEditorComponent', () => {
  let component: GovukTextEditorComponent;
  let fixture: ComponentFixture<GovukTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovukTextEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovukTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
