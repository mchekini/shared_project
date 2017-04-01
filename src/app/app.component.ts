import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <button (click)="inidHello()">INID</button>`
  ,
})
export class AppComponent  
{ 
  name:string = 'Angular'; 
  inidHello(){
    this.name="aghyoul N Samir 2ggggggeee"
  }
}

