import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = new FormGroup({
      'city': new FormControl(null),
    });
  }

  onSearch() {
    console.log(this.searchForm);
  }

}
