import { Routes } from '@angular/router';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransferListComponent } from './components/transfer-list/transfer-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'form' },
  { path: 'form', component: TransferFormComponent },
  { path: 'list', component: TransferListComponent },
  { path: '**', redirectTo: 'form' }
];