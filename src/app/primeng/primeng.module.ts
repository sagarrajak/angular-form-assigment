import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from "@angular/common";
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ToastModule,
    TooltipModule,
    ConfirmDialogModule,
    RadioButtonModule,
    CardModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ToastModule,
    TooltipModule,
    ConfirmDialogModule,
    RadioButtonModule,
    CardModule
  ],
})
export class PrimengModule { }
