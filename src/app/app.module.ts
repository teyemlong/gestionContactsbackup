import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactsComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ModalModule.forRoot()
  ],
  entryComponents: [ModalContentComponent],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
