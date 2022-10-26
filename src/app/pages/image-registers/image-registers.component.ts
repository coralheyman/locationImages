import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ImageRegister } from 'src/app/models/image-register.interface';
import { RegisterService } from '../../services/register.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogImageRegisterComponent } from '../../components/dialog-image-register/dialog-image-register.component';

@Component({
  selector: 'app-image-registers',
  templateUrl: './image-registers.component.html',
  styleUrls: ['./image-registers.component.scss'],
})
export class ImageRegistersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'transformer',
    'description',
    'dateRegister',
  ];
  dataSource!: MatTableDataSource<ImageRegister>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(public service: RegisterService, public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource!.paginator = this.paginator!;
    this.dataSource!.sort = this.sort!;
  }

  ngOnInit(): void {
    this.service
      .imageRegisters()
      .subscribe((res) => (this.dataSource = new MatTableDataSource(res)));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(DialogImageRegisterComponent, {
      width: '100%',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
