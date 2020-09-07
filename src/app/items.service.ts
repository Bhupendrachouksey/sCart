import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(count: number, btn?: string) {
    if (btn) {
      if (btn == "launchTrue") {

        return this.http.get(`https://api.spacexdata.com/v3/launches?limit=${count}&amp;launch_success=true`);
      } else if (btn == "launchFalse") {

        return this.http.get(`https://api.spacexdata.com/v3/launches?limit=${count}&amp;launch_success=false`);
      }
    } else {
      return this.http.get(`https://api.spacexdata.com/v3/launches?limit=${count}`)
    }
  }
}
