import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { ManageAppointmentComponent } from './manage-appointment/manage-appointment.component';

const routes: Routes = [
  { path: '', component: AppointmentComponent },
  { path: 'all', component: ManageAppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
