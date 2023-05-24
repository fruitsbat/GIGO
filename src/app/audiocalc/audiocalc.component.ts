import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-audiocalc',
  templateUrl: './audiocalc.component.html',
  styleUrls: ['./audiocalc.component.scss']
})
export class AudiocalcComponent {
  salary = new FormControl(7, {nonNullable: true});
  hours = new FormControl(1000, {nonNullable: true});
  transcriptionistSpeed = new FormControl(3, {nonNullable: true});

  formatAudioLength(): string {
    return formatNumber(this.hours.value, "EN");
  }

  getTotalMoney(): string {
    let v = formatNumber(this.hours.value * this.salary.value * this.transcriptionistSpeed.value, "EN");
    return v;
  }

  getTotalTimeSpent(): string {
    let v = formatNumber(this.hours.value * this.transcriptionistSpeed.value, "EN");
    return v;
  }
}
