import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee.class';
import { AlertComponent } from '../../dialog/alert/alert.component';
import { isValidDate, isValidName, isValidCode, isValidEmail } from 'src/app/models/validators';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.component.html',
    styleUrls: ['./add.dialog.component.css'],
})
export class AddDialogComponent {
    formBuilder = new FormBuilder();
    formGroup: FormGroup;
    constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Employee,
        public dataService: EmployeeService, public dialog: MatDialog) {
        this.formGroup = this.formBuilder.group({
            'name': new FormControl(this.data.name, [Validators.required, isValidName]),
            'code': new FormControl(this.data.code, [Validators.required, isValidCode]),
            'email': new FormControl(this.data.code, [Validators.required, isValidEmail]),
            'date': new FormControl(this.data.birth, [Validators.required, isValidDate]),
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onConfirm(): void {
        if (this.formGroup.status !== "INVALID") {
            let imgTag: any = document.getElementById('imageUpload');
            this.data.image = imgTag.src;
            let result = this.dataService.create(this.data);
            this.dialog.open(AlertComponent, {
                data: { message: "Thêm mới " + (result ? "thành công" : "không thành công") }
            });
            if (result) {
                this.dialogRef.close();
            }
        } else {
            this.dialog.open(AlertComponent, {
                data: { message: "Dữ liệu không hợp lệ !" }
            });
        }
    }

    onUpload(event: any): void {
        let imgTag = document.getElementById('imageUpload');
        this.readURL(event.target, imgTag, this.data);
    }

    onClear(): void {
        let imgTag: any = document.getElementById('imageUpload');
        imgTag.src = "";
        this.data.image = "";
    }

    readURL(input: any, target: any, data: any) {
        if (input.files && input.files[0] && input.files[0].type.includes('image/')) {
            var reader = new FileReader();

            reader.onload = function (e) {
                target.src = e.target?.result;
                data.image = e.target?.result;
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
}
