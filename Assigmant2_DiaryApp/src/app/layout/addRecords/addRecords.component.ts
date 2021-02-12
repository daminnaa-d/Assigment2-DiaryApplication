import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-records',
  templateUrl: './addRecords.component.html',
  styleUrls: ['./addRecords.component.css']
})

export class AddRecordsComponent implements OnInit{
  text = '';
  distance = 0;
  time = 1;
  constructor(){

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
}
