import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  data = {};
  constructor(private http: HttpClient) {
    console.info('>> call to spring api');
    http.get('resource').subscribe(data => this.data = data);
  }
}
