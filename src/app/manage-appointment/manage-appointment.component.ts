import { Component } from '@angular/core';
import { Constant } from '../constant';
import { Appointment } from '../appointment';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-manage-appointment',
  templateUrl: './manage-appointment.component.html',
  styleUrls: ['./manage-appointment.component.css']
})
export class ManageAppointmentComponent {
  title = Constant.manageAppointment;
  appointments: any=[];

  constructor(private service:HospitalService){}
  ngOnInit()
  {
    this.service.getAllAppointment().subscribe((data)=>{
      this.appointments=data;
    })
  }
}
