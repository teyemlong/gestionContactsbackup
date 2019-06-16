import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
baseurl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  getAllContacts(){
  return this.http.get(this.baseurl + 'contacts');
  }
}
