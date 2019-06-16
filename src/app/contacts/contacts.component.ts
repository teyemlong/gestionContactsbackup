import { Component, OnInit,TemplateRef } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts: any;
totalRec: number;
page: number = 1;
bsModalRef: BsModalRef;
modalRef: BsModalRef;
 list=[];
 usersJson:any=[];

  constructor(private contactservcie: ContactsService,private modalService: BsModalService) { }

  ngOnInit() {
    this.contactservcie.getAllContacts().subscribe(data => {
      this.contacts = data;
      this.totalRec = this.contacts.length;
      console.log(this.contacts);
    },
    err => {
      console.log(err);
    });
  }
/*
  openModalWithComponent() {

    this.contactservcie.getAllContacts().subscribe(data => {
      this.contacts = data;
      this.totalRec = this.contacts.length;

      //this.usersJson=Array.of(this.contacts.json());
      console.log('TESTTT --Robert '+this.contacts.Array);
    //  this.bsModalRef = this.modalService.show(ModalContentComponent, {this.contacts});
    //  this.bsModalRef.content.closeBtnName = 'Close';
      console.log(this.contacts);
    },
    err => {
      console.log(err);
    });
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Test Tableau'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
*/


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

}
