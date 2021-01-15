import { Component, OnInit, Input, Output } from '@angular/core';
import {SessionModel} from '../sessionmodel';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  @Input()  session : SessionModel = new SessionModel();
  @Output() deleteSession : EventEmitter<SessionModel> = new EventEmitter();
  @Output() editSession : EventEmitter<SessionModel> = new EventEmitter();
  selectedSession : SessionModel = new SessionModel();
  loadComponent : boolean = false;
  constructor() { }

  loadSessionDetail(session:SessionModel){
    this.loadComponent = !this.loadComponent;
    this.selectedSession = session;
  }

  deleteSelectedSession(session:SessionModel){
    console.log("delete1"+session.session_name);
    this.deleteSession.emit(session); 
  }

  editSelectedSession(session:SessionModel){
    console.log("edit1"+session.session_name);
    this.editSession.emit(session); 
  }

  ngOnInit(): void {
  }

}
