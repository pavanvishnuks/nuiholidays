import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlConfig } from './config/ExternalUrlConfig';
import { HolidayModule } from '../Modules/holiday/holiday.module';
import { HolidayRegionsModule } from '../Modules/holiday/holiday.regions.module';
import { HolidayTypesModule } from '../Modules/holiday/holiday.types.module';
export const mock = {
  name: 'New-Year',

  desc: 'Diwali or Deepavali is one of the biggest and auspicious festivals celebrated by Hindus all around the globe. The festival of lights signifies peace and joy, the victory of good over evil, and light over darkness every day. It is one of the most symbolic Hindu festivals, and all the communities in the country celebrate it with much pomp. During this festival, people clean their homes, decorate every corner with lights, lamps, diyas, flowers, rangoli, and candles.',

  img: 'assets/diwali.jpg',

  Uevents: [
    {
      ename: 'Pongal/sankranthi',
      eimg: 'assets/sankranthi.jpg',
      edate: '14/01/22',
    },
    {
      ename: 'Pongal/sankranthi',
      eimg: 'assets/sankranthi.jpg',
      edate: '14/01/22',
    },
    {
      ename: 'Pongal/sankranthi',
      eimg: 'assets/sankranthi.jpg',
      edate: '14/01/22',
    },
  ],
  // birthday: [
  //   {
  //     ename: 'pavan ks',
  //     eimg: 'assets/pavan.png',
  //     edate: '02/07/22',
  //   },
  // ],
  types: [
    {
      holidayTypeId: 1,
      holidayTypeName: 'General',
    },
    {
      holidayTypeId: '2',
      holidayTypeName: 'Restricted',
    },
    {
      holidayTypeId: '3',
      holidayTypeName: 'Optional',
    },
  ],
  regions: [
    {
      regionId: '1',
      regionName: 'Bangalore-India',
    },
    {
      regionId: '2',
      regionName: 'Coimbatore-India',
    },
    {
      regionId: '3',
      regionName: 'USA',
    },
    {
      regionId: '4  ',
      regionName: 'UK',
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  ShowAllHoliday(): Observable<HolidayModule[]> {
    return this.http.get<HolidayModule[]>(urlConfig.allHolidays());
  }

  fetchAllRegions(): Observable<HolidayRegionsModule[]> {
    return this.http.get<HolidayRegionsModule[]>(urlConfig.allRegions());
  }
  fetchAllHolidayTypes(): Observable<HolidayTypesModule[]> {
    return this.http.get<HolidayTypesModule[]>(urlConfig.allTypes());
  }
}
// public fetchAllHolidays = () => {
//   const holidays = this.http.get(urlConfig.allHolidays());
//   holidays.subscribe((data) => {
//     console.log('Holidays list', data);
//     this.generalHolidays = data;
//   });
//   console.log('Holidays list2', this.generalHolidays);
//   return mock;
// };
// }
export default CalendarService;
