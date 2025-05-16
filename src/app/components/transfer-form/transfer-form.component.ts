import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransferService } from '../../service/transfer.service';
import { Router } from '@angular/router';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-transfer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputMaskModule,
    InputTextModule,
    InputNumberModule,
    DatePickerModule,
    ButtonModule
  ],
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent {
  private fb = inject(FormBuilder);
  private transferService = inject(TransferService);
  private router = inject(Router);

  form: FormGroup = this.fb.group({
    sourceAccount: ['', [Validators.required, Validators.pattern(/^[0-9]{7}-[0-9]{1}$/)]],
    destinationAccount: ['', [Validators.required, Validators.pattern(/^[0-9]{7}-[0-9]{1}$/)]],
    amount: [null, Validators.required],
    transferDate: [null, Validators.required]
  });

  submit() {
    if (this.form.valid) {
      const payload = {
        ...this.form.value,
        amount: Number(this.form.value.amount)
      };
      this.transferService.scheduleTransfer(payload).subscribe(() => {
        this.router.navigate(['/list']);
      });
    }
  }
}