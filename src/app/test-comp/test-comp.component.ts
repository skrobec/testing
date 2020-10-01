import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.sass']
})
export class TestCompComponent implements OnInit {

  constructor() { }

  public testCount: number [] = [];
  public numberOfValues = 10000;

  ngOnInit() {
    for ( let i = 1; i < this.numberOfValues; i++) {
      this.testCount.push(i);
    }
  }

}
