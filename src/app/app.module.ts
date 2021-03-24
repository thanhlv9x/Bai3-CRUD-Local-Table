import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeService } from "./services/employee.service";

import { AppComponent } from './app.component';
import { GridComponent } from './material/grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDialogComponent } from './material/dialog/add/add.dialog.component';
import { BytesPipe } from './pipe/bytes.pipe';
import { FileUploadInputForDirective } from './directives/file-upload-input-for.directive';
import { EditDialogComponent } from './material/dialog/edit/edit.dialog.component';
import { RemoveDialogComponent } from './material/dialog/remove/remove.dialog.component';
import { AlertComponent } from './material/dialog/alert/alert.component';

@NgModule({
    declarations: [
        AppComponent,
        GridComponent,
        BytesPipe,
        FileUploadInputForDirective,
        AddDialogComponent,
        EditDialogComponent,
        RemoveDialogComponent,
        AlertComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatFileUploadModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [EmployeeService],
    bootstrap: [GridComponent]
})
export class AppModule { }
