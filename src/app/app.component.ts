import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task: String = ""
  visible=true
  names: Array<any> = [
    {name: "learn angular", completed: false},
    {name: "make a project on angular", completed: false},
    {name: "host it on github", completed: false},
    {name: "host the project live", completed: false}
  ]
  click = ()=>{
   // console.log("hi "+ str)
   let ob = {name: this.task, completed: false}
    this.names.push(ob)
    this.task = ''
  }
  mark(i){
    this.names[i].completed = !this.names[i].completed;
  }
  delete=(i)=>{
    console.log('delete '+ i)
    this.names.splice(i, 1)

  }
  constructor(){
    

  }
  ngOnInit(){

  }
}
