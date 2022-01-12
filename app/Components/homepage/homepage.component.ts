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
import { HolidayModule } from 'src/app/Modules/holiday/holiday.module';
import { HolidayRegionsModule } from 'src/app/Modules/holiday/holiday.regions.module';
import { HolidayTypesModule } from 'src/app/Modules/holiday/holiday.types.module';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // public value: Date[] = [
  //   new Date('05/16/2017'),
  //   new Date('05/12/2017'),
  //   new Date('05/6/2017'),
  //   new Date('05/26/2017'),
  //   new Date('05/20/2017'),
  // ];
  // public multiselect: Boolean = true;

  currentDateTime!: any;
  holiday: HolidayModule = {
    name: '',
    description: '',
    date: '',
    day: '',
    note: '',

    upcomingEvents: [],
    types: [],
    regions: [],
  };
  regions: HolidayRegionsModule[] = [
    {
      regionId: 0,
      regionName: '',
    },
  ];
  types: HolidayTypesModule[] = [
    {
      holidayTypeId: 0,
      holidayTypeName: '',
    },
  ];

  service = new CalendarService(this.http);

  constructor(public datepipe: DatePipe, private http: HttpClient) {
    this.currentDateTime = this.datepipe.transform(
      new Date(),
      'EEEE, MMMM d, y'
    );
    console.log(this.currentDateTime);
  }

  ngOnInit(): void {
    this.service.ShowAllHoliday().subscribe((data) => {
      console.log(data);
      if (data) {
        const firstItem = data[0];
        const { name, date, day, description, note } = firstItem;
        const transformedData: any = {
          name,
          date,
          day,
          description,
          note,
          upcomingEvents: data,
          types: [],
          regions: [],
        };
        this.holiday = transformedData;
      }
    });
    this.service.fetchAllRegions().subscribe((data) => {
      console.log('Regions fetched', data);
      if (data) {
        this.regions = data;
      }
    });
    this.service.fetchAllHolidayTypes().subscribe((data) => {
      console.log('Types fetched', data);
      if (data) {
        this.types = data;
      }
    });
  }
  // expandedIndex = 0;
}
