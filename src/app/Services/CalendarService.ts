import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const mock = {
  name: 'Newyear',

  desc: 'Diwali or Deepavali is one of the biggest and auspicious festivals celebrated by Hindus all around the globe. The festival of lights signifies peace and joy, the victory of good over evil, and light over darkness every day. It is one of the most symbolic Hindu festivals, and all the communities in the country celebrate it with much pomp. During this festival, people clean their homes, decorate every corner with lights, lamps, diyas, flowers, rangoli, and candles.',

  img: 'assets/diwali.jpg',

  employees: [
    {
      empname: 'Ajith',
      empimg: 'assets/ajith.png',
    },
    {
      empname: 'pavan KS',
      empimg: 'assets/ajith.png',
    },
  ],
};
@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {
    // this.http=http;
  }
  fetchAllHolidays = () => {
    return mock;
  };
}
export default CalendarService;
