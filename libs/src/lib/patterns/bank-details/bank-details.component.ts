import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {BankDetails} from "../../models/bank-details-model";


@Component({
  selector: 'govUK-bank-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.scss',
})
export class BankDetailsComponent implements OnInit{
  @Input() editDetails: BankDetails | undefined;
  @Output() emitDetails: EventEmitter<BankDetails>

  constructor(private fb: FormBuilder) {
    this.emitDetails = new EventEmitter<BankDetails>()
  }

  form = this.fb.group (
    {
      accountName: ['', Validators.required],
      sortCode: ['', Validators.required],
      accountNumber: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8)],
        ],
      rollNumber: ['', Validators.required]
    }
  )
  ngOnInit(): void {
    this.resetFields();
  }

  resetForm() {
    this.form.reset();
    this.resetFields();
  }


  private resetFields() {
    this.form.patchValue({ accountName: this.editDetails?.accountName });
    this.form.patchValue({ sortCode: this.editDetails?.sortCode });
    this.form.patchValue({ accountNumber: this.editDetails?.accountNumber });
    this.form.patchValue({ rollNumber: this.editDetails?.rollNumber });

  }

  onSubmit() {
    if (this.form.valid) {
      this.emitDetails.emit(this.form.value as BankDetails);
    }
  }
}
