import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { combineAll } from 'rxjs/operators';
import { Commande } from '../models/livreur';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  updateCommande(com: Commande, etat: string){
    return this.http.put<Commande>('https://127.0.0.1:8000/api/commandes/'+com.id, {status: etat}).subscribe(
      (result) => {
        com.status = result.status
      }
    )
  }

  getCommandeByCode(code: string):Observable<Commande>{
    return this.http.get<Commande>('https://127.0.0.1:8000/api/commandes?code='+code);
  }

  getCommandeById(id: number):Observable<Commande>{
      return this.http.get<Commande>('https://127.0.0.1:8000/api/commandes/'+id);
  }
  
}
