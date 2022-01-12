import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayTypesModule } from './holiday.types.module';
import { HolidayRegionsModule } from './holiday.regions.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class HolidayModule {
  name!: string;
  description!: string;
  date!: string;
  day!: string;
  note!: string;
  upcomingEvents!: [HolidayModule?];
  types!: [HolidayTypesModule?];
  regions!: [HolidayRegionsModule?];
}
