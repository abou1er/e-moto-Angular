import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-ajouterunproduit',
  templateUrl: './ajouterunproduit.component.html',
  styleUrls: ['./ajouterunproduit.component.css']
})
export class AjouterunproduitComponent implements OnInit {
data:any
  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
  }

  saveProduit(produit:any){
    console.log(produit.value);
    let data = produit.value
    this.produitService.saveProduit(data).subscribe(data =>{
      console.log("donnée enregistré");
      
    })

    
  }

}
