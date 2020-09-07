import { Component, OnInit, HostListener } from '@angular/core';
import { ItemsService } from '../items.service'

@Component({
  selector: 'app-shopping-items',
  templateUrl: './launch-program.component.html',
  styleUrls: ['./launch-program.component.css']
})
export class LaunchProgramComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  items$: any;
  originalItem: any;
  count: number = 20;
  years: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  selectedYear: number;
  selectedBtn: string;
  


  ngOnInit() {
    this.getItems();
  }

  onSelect(filter) {
    let temItems = [];
    console.log('data is selected', filter);
    this.selectedBtn = filter;
    this.itemsService.getItems(this.count, this.selectedBtn)
      .subscribe(res => {
        console.log('data', res);
        this.items$ = res;
      });


//     for (let i = 0; i <= this.items$.length; i++) {
//       if (this.selectedBtn == "launchTrue" && this.items$[i].launch_success == true) {
// this.items$.push(this.items$[i]);
//       }else if(this.selectedBtn == "launchTrue" && this.items$[i].launch_success != true){
//         temItems.push(this.items$[i]);
//       }
//     }
  // this.items$ = temItems;
  //   console.log('itesm', this.items$);
  }
  getItems(): void {
    this.itemsService.getItems(this.count)
      .subscribe(res => {
        console.log('data', res);
        this.items$ = res;
        console.log('length', this.items$[0].launch_success)
      });
  }

  onScroll() {
    console.log('event');
    this.count = this.count + 20;
    this.getItems();
  }


}
