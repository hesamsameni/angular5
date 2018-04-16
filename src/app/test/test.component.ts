import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = 'Hesam';
  public hasError = true;
  public isSpecial = true;
  displayName = false;
  testName = false;
  public testClass = {
    'text-green' : !this.hasError,
    'text-danger' : this.hasError,
    'text-special' : this.isSpecial
  };
  public test;
  constructor() { }
  ngOnInit() {
  }
  sampleFunction(event) {
    this.test = event.type;
  }
}
