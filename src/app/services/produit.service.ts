import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue, Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }


  getAllProduits():Observable<Catalogue>{
    return this.http.get<Catalogue>('https://127.0.0.1:8000/api/catalogues');
  }

  getProduitById(idProduit: number):Observable<any>{
    return this.http.get<any>(`https://127.0.0.1:8000/api/produits/${idProduit}`);
  }
  
}
