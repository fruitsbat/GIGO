import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hiring-example',
  templateUrl: './hiring-example.component.html',
  styleUrls: ['./hiring-example.component.scss']
})
export class HiringExampleComponent {
  gender = new FormControl("male", {nonNullable: true});
}
