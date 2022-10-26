import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-image-register',
  templateUrl: './dialog-image-register.component.html',
  styleUrls: ['./dialog-image-register.component.scss'],
})
export class DialogImageRegisterComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogImageRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
