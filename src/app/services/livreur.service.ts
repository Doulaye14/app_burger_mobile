import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraison } from '../models/livreur';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private http: HttpClient) { }

  getLivreurById(id: number):Observable<any>{
    return this.http.get<any>('https://127.0.0.1:8000/api/livreurs/'+id)
  }

  getLivraisonById(id: number):Observable<Livraison>{
    return this.http.get<Livraison>('https://127.0.0.1:8000/api/livraisons/'+id);
  }
  
}
