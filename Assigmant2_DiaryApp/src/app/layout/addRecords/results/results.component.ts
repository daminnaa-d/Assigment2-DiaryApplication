import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() text = '';
  @Input() distance = 0;
  @Input() time = 1;
  averagespeed = this.distance / this.time;
  constructor() { }

  ngOnInit(): void {
  }

}
