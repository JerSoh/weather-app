import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {}
}