import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/livreur';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClientById(idClient: number):Observable<Client>{
    return this.http.get<Client>('https://127.0.0.1:8000/api/clients/'+idClient);
  }
  
}
