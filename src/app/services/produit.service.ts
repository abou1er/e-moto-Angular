import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) { }

  getproducts(){
    return this.http.get("http://localhost:3333/")
  }

  saveProduit(produit:any){
    return this.http.post("http://localhost:3333" , produit)
  }

  deleteP(_id:any){
    return this.http.delete("http://localhost:3333/"+ _id)
  }

  produitUpdate(produit:any){
    return this.http.patch("http://localhost:3333/"+produit._id, produit)
  }
  
}
