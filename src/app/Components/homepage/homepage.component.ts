import { Component, OnInit } from '@angular/core';
import { AngularmaterialModule } from 'src/app/Modules/angularmaterial/angularmaterial.module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { CalendarService } from 'src/app/Services/CalendarService';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';

export type upcomingEvents = {
  ename: String;
  eimg: String;
  edate: string;
};
export type holidaytype = {
  id: number;
  name: string;
};
export type region = {
  id: number;
  regionname: String;
};
export type HolidayPage = {
  name: string;
  desc: string;
  img: string;
  Uevents: [upcomingEvents];
  Htype: [holidaytype];
  reg: [region];
};

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
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

  service = new CalendarService(this.http);

  constructor(public datepipe: DatePipe, private http: HttpClient) {
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
