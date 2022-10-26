import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageRegistersComponent } from './pages/image-registers/image-registers.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  { path: '', redirectTo: '/image-registers', pathMatch: 'full' },
  { path: 'image-registers',  component: ImageRegistersComponent },
  { path: 'map',  component: MapComponent },
  { path: 'map/:id',  component: MapComponent },
  { path: '**', component: ImageRegistersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
