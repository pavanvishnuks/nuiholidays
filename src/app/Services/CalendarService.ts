import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlConfig } from './config/ExternalUrlConfig';

export const mock = {
  name: 'Newyear',

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
  Htype: [
    {
      id: 1,
      name: 'General',
    },
    {
      id: '2',
      name: 'Restricted',
    },
    {
      id: '3',
      name: 'Optional',
    },
  ],
  reg: [
    {
      id: '1',
      regionname: 'Bangalore-India',
    },
    {
      id: '2',
      regionname: 'Coimbatore-India',
    },
    {
      id: '3',
      regionname: 'USA',
    },
    {
      id: '4  ',
      regionname: 'UK',
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
  fetchAllHolidays = () => {
    const holidays = this.http.get(urlConfig.allHolidays());
    console.log('Holidays list', holidays);
    return mock;
  };
}
export default CalendarService;
