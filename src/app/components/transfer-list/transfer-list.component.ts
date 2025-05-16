import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferService, Transfer } from '../../service/transfer.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss'],
  imports: [CommonModule, TableModule],
})
export class TransferListComponent implements OnInit {
  private transferService = inject(TransferService);

  transfers: Transfer[] = [];

  ngOnInit() {
    this.transferService.getTransfers().subscribe({
      next: (data) => (this.transfers = data),
      error: (err) => console.error('Erro ao buscar transferências:', err)
    });
  }
}