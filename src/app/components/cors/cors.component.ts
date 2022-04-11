import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cors',
  templateUrl: './cors.component.html',
  styleUrls: ['./cors.component.css'],
})
export class CorsComponent implements OnInit {
  output: string = '';
  constructor() {}

  ngOnInit() {
    var url = 'https://api.covid19api.com/countries';
    //var url = "http://api.worldbank.org/countries?per_page=10&incomeLevel=LIC"
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = 'json';
    //xhttp.setRequestHeader('X-Requested-With',"XMLHttpRequest");
    xhttp.onreadystatechange = function () {
      console.log('this.readyState', this.readyState);
      console.log('this.readyState', this.status);
      if (this.readyState == 4 && this.status == 200) {
        // this.successFunction(this);

        console.log('response successFunction', this.response); // JSON response
        //this.output = JSON.stringify(this.response);
      }
    };
    xhttp.open('GET', url, true);
    /* xhttp.onload = function (e) {
    if (this.status == 200) {
      console.log('response', this.response); // JSON response
    }
  };*/

    xhttp.send();
  }

  successFunction(result: XMLHttpRequest): void {
    console.log('response successFunction', result.response); // JSON response
    this.output = JSON.stringify(result.response);
  }
}
