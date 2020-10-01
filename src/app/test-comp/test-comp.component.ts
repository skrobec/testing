import { Component, OnInit } from '@angular/core';

interface lineObject {

}

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.sass']
})
export class TestCompComponent implements OnInit {

  constructor() { }

  public testCount: number [] = [];
  public lineArray: lineObject [] = [];
  public numberOfValues = 1000;

  ngOnInit() {
    let position = 1;
    for ( let i = 0; i < this.numberOfValues; i++) {
      this.testCount.push(position);

      this.lineArray.push({
        x1: 100*position + 50,
        y1: 100,
        x2: 100*position + 150,
        y2: 100,
        style: "stroke:rgb(255,255,0);stroke-width:2",
      });

      position = position +2;
    }
  }

}
