import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularmaterialModule } from './Modules/angularmaterial/angularmaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderHomeComponent } from './Components/calender-home/calender-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import {
  matDatepickerAnimations,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { YearCalendarComponent } from './Components/year-calendar/year-calendar.component';
@NgModule({
  declarations: [AppComponent, CalenderHomeComponent, YearCalendarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    CdkAccordionModule,
    CalendarModule,
    MatDatepickerModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
