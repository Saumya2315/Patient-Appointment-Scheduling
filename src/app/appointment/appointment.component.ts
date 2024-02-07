
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  title = Constant.appointmentTitle;
  appointment = {
    name: '',
    phoneNumber: '',
    email: '',
    reason: '',
    date: '',
    time: ''
  };
  message: string = '';

  constructor(private http: HttpClient) { }

  @ViewChild('form') form:ElementRef | undefined

  scheduleAppointment() {
    //console.log(this.form);
    
    this.http.post('http://localhost:8080/appointments/schedule', this.appointment)
      .subscribe(
        response => {
          console.log('Response from server:', response); // Log response
          this.message = 'Appointment scheduled successfully!';
          this.form?.nativeElement.reset();
       
          
        },
        error => {
          console.error('Error scheduling appointment:', error);
          this.message = 'Error scheduling appointment. Please try again.';
          this.form?.nativeElement.reset();
        
        }
      );
  }
  

}

