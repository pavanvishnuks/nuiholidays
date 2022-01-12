import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
// import { CalenderHomeComponent } from '../calender-home/calender-home.component';
import { CalendarService } from 'src/app/Services/CalendarService';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-year-calendar',
  templateUrl: './year-calendar.component.html',
  styleUrls: ['./year-calendar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class YearCalendarComponent implements OnInit {
  holiday!: any;
  service = new CalendarService(this.http);
  Events!: NgForm;
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  events(Events: NgForm) {
    // this.holiday = this.service.fetchAllHolidays();
    // console.log(this.holiday);
    this.service.ShowAllHoliday().subscribe((data) => {
      this.holiday = data;

      console.log(this.holiday);
    });
  }
}
