import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {SessionModel} from '../sessionmodel';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  


  sessions : SessionModel[] = [
    {
       session_name: "Angular 1",
       trainer_name: " Sharanya",
       date : "11-01-2021"
    },
    {
      session_name: "Angular 2",
      trainer_name: "Pritam",
      date : "11-01-2021"
    },
    {
      session_name: "React",
      trainer_name: "Vignesg",
      date : "12-01-2021"
    }
  ];
  
  constructor() {
 
   }

  deleteSession(session:SessionModel){
   console.log("delete2"+session.session_name);
   this.sessions = this.sessions.filter(s => !(s.session_name === session.session_name && s.trainer_name === session.trainer_name && s.date === session.date ));
    
  }

  editSession(session:SessionModel){
    console.log("edit2"+session.session_name);
    
     
   }

   onSubmit(f: NgForm) {
    console.log(f.value);  
    this.sessions.push(f.value);
  }
  
  ngOnInit(): void {
  }

}
