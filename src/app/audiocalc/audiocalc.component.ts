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
  salary = new FormControl(20.25, { nonNullable: true });
  hours = new FormControl(1791.0, { nonNullable: true });
  transcriptionistSpeed = new FormControl(3.0, { nonNullable: true });

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

  speeds: SliderData[] = [
    {
      value: 2.5,
      short: "professional transcriptionist",
      href: "https://www.notta.ai/en/blog/how-long-does-it-take-to-transcribe-1-hour-of-audio",
      about: "a professional transcriptionist can transcribe one hour of audio in 2 to 3 hours",
    },
    {
      value: 10,
      short: "amateur transcriptionist",
      href: "https://www.notta.ai/en/blog/how-long-does-it-take-to-transcribe-1-hour-of-audio",
      about: "an amatuer transcriptionist can use up to ten hours to transcribe one hour of audio",
    }
  ]

  dataSets: SliderData[] = [
    {
      value: 100,
      short: "AMI",
      href: "https://huggingface.co/datasets/edinburghcstr/ami",
      about: "AMI is a data set of recorded business meetings",
    },
    {
      value: 1791,
      short: "VoxPopuli",
      href: "https://huggingface.co/datasets/facebook/voxpopuli",
      about: "VoxPopuli is a set of transcribed audio from the eu parliament"
    },
    {
      value: 2763,
      short: "AudioSet",
      href: "https://research.google.com/audioset/dataset/speech.html",
      about: "AudioSet is a data set taken from google captions",
    },
    {
      value: 3209,
      short: "Common Voice 13 (english)",
      href: "https://commonvoice.mozilla.org/en/datasets",
      about: "Mozilla Common Voice is a dataset recorded and verified by volunteers"
    },
    {
      value: 17689,
      short: "Common Voice 13 (full, validated)",
      href: "https://huggingface.co/datasets/mozilla-foundation/common_voice_13_0",
      about: "Mozilla Common Voice is a dataset recorded and verified by volunteers"
    },
  ];


  getSelectedHours(): SliderData[] {
    return this.dataSets.filter(s => s.value === this.hours.value);
  }

  getSelectedSalaries(): SliderData[] {
    return this.salaries.filter(s => s.value === this.salary.value);
  }

  getSelectedSpeeds(): SliderData[] {
    return this.speeds.filter(s => s.value === this.transcriptionistSpeed.value);
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
