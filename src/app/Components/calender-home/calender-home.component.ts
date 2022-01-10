import { Component, OnInit } from '@angular/core';
import { AngularmaterialModule } from 'src/app/Modules/angularmaterial/angularmaterial.module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { CalendarService } from 'src/app/Services/CalendarService';
export type upcomingEvents = {
  ename: String;
  eimg: String;
  edate: string;
};
export type HolidayPage = {
  name: string;
  desc: string;
  img: string;
  Uevents: [upcomingEvents];
};
@Component({
  selector: 'app-calender-home',
  templateUrl: './calender-home.component.html',
  styleUrls: ['./calender-home.component.css'],
})
export class CalenderHomeComponent implements OnInit {
  public value: Date[] = [
    new Date('05/16/2017'),
    new Date('05/12/2017'),
    new Date('05/6/2017'),
    new Date('05/26/2017'),
    new Date('05/20/2017'),
  ];
  public multiselect: Boolean = true;

  currentDateTime!: any;
  holiday!: any;
  service = new CalendarService();
  constructor(public datepipe: DatePipe) {
    this.currentDateTime = this.datepipe.transform(
      new Date(),
      'EEEE, MMMM d, y'
    );
    console.log(this.currentDateTime);
  }

  ngOnInit(): void {
    this.holiday = this.service.fetchAllHolidays();
  }

  expandedIndex = 0;
}
