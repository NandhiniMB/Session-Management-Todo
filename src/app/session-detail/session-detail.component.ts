import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SessionModel } from '../sessionmodel';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss']
})
export class SessionDetailComponent implements OnInit {

  @Input() selectedSession: SessionModel = new SessionModel();
  @Output() deleteSelectedSession : EventEmitter<SessionModel> = new EventEmitter();
  @Output() editSelectedSession : EventEmitter<SessionModel> = new EventEmitter();

  loadEditComponent : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  onDelete(session:SessionModel){
    console.log("delete"+session);
    this.deleteSelectedSession.emit(session);
  }
  onEdit(session:SessionModel){
    console.log("edit"+session);
    this.loadEditComponent=true;
    // this.editSelectedSession.emit(session);
  }
  editSession(f:NgForm){
  console.log(f.value);
     this.selectedSession.session_name = f.value.session_name;
     this.selectedSession.trainer_name = f.value.trainer_name;
     this.selectedSession.date = f.value.date;
     console.log(this.selectedSession);
     this.loadEditComponent=false;
  }
}
