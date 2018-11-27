import { Component, OnInit } from '@angular/core';

import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public selectedTime: string;

  constructor( private atp: AmazingTimePickerService ) { }

  open() {
      const amazingTimePicker = this.atp.open();
      amazingTimePicker.afterClose().subscribe(time => {
          this.selectedTime = time;
      });
  }

}
