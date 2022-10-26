import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ImageRegister } from '../models/image-register.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}

  imageRegisters(): Observable<ImageRegister[]> {
    return of([
      {
        id: '1232',
        transformer: 'AZ234',
        description: 'Primer transformador',
        dateRegister: new Date(),
      },
      {
        id: '1234',
        transformer: 'AZ256',
        description: 'Segundo transformador',
        dateRegister: new Date(),
      },
      {
        id: '1235',
        transformer: 'AZ245',
        description: 'Tercer transformador',
        dateRegister: new Date(),
      },
    ]);
  }
}
