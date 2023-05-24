import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-audiocalc',
  templateUrl: './audiocalc.component.html',
  styleUrls: ['./audiocalc.component.scss']
})
export class AudiocalcComponent {
  salary = new FormControl(1, {nonNullable: true});
  hours = new FormControl(1, {nonNullable: true});
  transcriptionistSpeed = new FormControl(2, {nonNullable: true});

  getTotalMoney(): number {
    return this.salary.value + this.hours.value;
  }
}
