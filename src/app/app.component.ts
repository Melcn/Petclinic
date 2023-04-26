import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  count! : number;

  ngOnInit(): void {
    
    this.count = 0;
    
  }

  More(){
    if(this.count > -100){
      this.count--;
    }  
  }

  Less(){
    if(this.count < 100){
    this.count++;
    }
  }

  title = 'ng-click-counter';
}
