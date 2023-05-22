import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-based-on',
  templateUrl: './based-on.component.html',
  styleUrls: ['./based-on.component.scss']
})
export class BasedOnComponent implements OnInit {
  @Input() name!: string;
  @Input() link!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
