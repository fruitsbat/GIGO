import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { formatNumber } from '@angular/common';
import { SliderData } from '../sliderdata';

@Component({
  selector: 'app-audiocalc',
  templateUrl: './audiocalc.component.html',
  styleUrls: ['./audiocalc.component.scss']
})
export class AudiocalcComponent {
  salary = new FormControl(20.25, {nonNullable: true});
  hours = new FormControl(1791.0, {nonNullable: true});
  transcriptionistSpeed = new FormControl(3.0, {nonNullable: true});

  salaries: SliderData[] = [
    {
      value: 7.25,
      about: "the nation wide minimum wage in the us is 7.25USD",
      href: "https://www.usa.gov/minimum-wage",
      short: "federal minimum wage (us)",
    },
    {
      value: 12.93,
      about: "the minimum wage in germany is 12 euro or 12.93USD",
      href: "https://www.bundesregierung.de/breg-de/aktuelles/12-euro-mindestlohn-2006858",
      short: "minimum wage (de)",
    },
    {
      value: 20.28,
      about: "the average wage for a transcriptionist in the us is 20.28$",
      href: "https://www.indeed.com/career/transcriptionist/salaries",
      short: "transcriptionist (us)",
    },
    {
      value: 31.55,
      about: "the average software engineer in germany earns 29.33 euro or 31.55USD per hour",
      href: "https://www.glassdoor.de/Geh%C3%A4lter/software-engineer-gehalt-SRCH_KO0,17.htm",
      short: "software engineer (de)",
    },
    {
      value: 49.24,
      about: "the average wage for a software engineer in the us is 49.24",
      href: "https://www.indeed.com/career/software-engineer/salaries",
      short: "software engineer (us)",
    }
  ];

  getSelectedSalaries(): SliderData[] {
    return this.salaries.filter(s => s.value === this.salary.value);
  }

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
