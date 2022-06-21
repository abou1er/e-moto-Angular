import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:any

  produitAmodif:any ={
    _id:'',
    titre:"",
    autonomie:"",
    permis:"",
    prix:"",
    puissance:"",
    equivalent:"",
    urlImage:""
  }

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.products()
  }

  products(){
    this.produitService.getproducts().subscribe(data => {
      this.produits = data;
      console.log(this.produits)
    })
  }


  
  recupInfo(p:any){
    this.produitAmodif = p;
    console.log(" recupInfo() -------- this.produitAmodif" , this.produitAmodif);
    
  }


  deleteProduit(id:any){
    this.produitService.deleteP(id).subscribe(() =>{
      console.log("produit avec l'id " + id + " delete" ,  this.produitAmodif.titre);

      this.products();
    })
  }


  prodUpdate(){
    this.produitService.produitUpdate(this.produitAmodif).subscribe(()=>{
      console.log("prodUpdate()--------this.produits  " , this.produits);
      
    })
  }
  
}
