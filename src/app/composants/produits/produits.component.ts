import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:any

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


  deleteProduit(id:any){
    this.produitService.deleteP(id).subscribe(() =>{
      console.log("produit avec l'id" + id + "delete");

      this.products();
    })
  }
  
}
