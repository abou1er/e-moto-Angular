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

  // tableau pour tri par permis
  recupPermis : any;
  categoriePermis= ["Permis A1","Permis B + Formation 7h", "permis moto", 
  "sans permis", "non homologuée" ];



    // //var searchInpt()--------------
    // valInptSearch:any ={
    //   value:'',
    // }  
    //  //va servir à stocker la valeur qui sera rentré dans l'input search
    //  valMin :any;
    //  valMax : any;
    // totalSearchInp : boolean = false
    // totalFork : boolean = false
    // totalCat : boolean = false
    // nombreCat : any;
    // searchIsVide : boolean = false  // va servir à jouer avec le ngif si aucune valeur correspondante image.pngne ressort
    // totalFound : any
    // show : any;

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.products()
  }

  products(){
    this.produitService.getproducts().subscribe(data => {
      this.produits = data;
      console.log(this.produits)
      this.totalSearchInp = false;
        this.totalFork = false;
        this.totalCat = false;
    })
  }


  onCategoryPermis(cP:any){
    this.produitService.getbyCategoPermis(cP).subscribe(data =>{
        this.produits = data;
        this.nombreCat= cP
        console.log("this.produits : ", this.produits.length);

        this.totalCat = true;
        this.totalSearchInp = false;
        this.totalFork = false;


    })
    console.log("moto coorespondant : ", cP);
    
    
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
  

    
  searchByPrice(dataForm:any){
    console.log(dataForm.nameMin);
    console.log(dataForm.nameMax);
    this.produitService.getbyprice(dataForm.nameMin, dataForm.nameMax).subscribe(data =>{
      this.produits = data;
     this.valMin = dataForm.nameMin
     this.valMax = dataForm.nameMax
      
      console.log("this.produits = ", this.produits);
      // 
      //retour nombre objet trouvé
      this.totalFound = this.produits.length;
      console.log("this.totalFound ", this.totalFound.length);
      
     
        this.totalSearchInp = false;
        this.totalFork = true;
        this.totalCat = false;
        
     
      



    } )
    
  }


      //var searchInpt()--------------
    valInptSearch:any ={
      value:'',
    }  
     //va servir à stocker la valeur qui sera rentré dans l'input search
     valMin :any;
     valMax : any;
    totalSearchInp : boolean = false
    totalFork : boolean = false
    totalCat : boolean = false
    nombreCat : any;
    searchIsVide : boolean = false  // va servir à jouer avec le ngif si aucune valeur correspondante image.pngne ressort
    totalFound : any
    show : any;


  searchByKeyWord(inpSearch:any){
    console.log("inpSearch.nameInptSearchBar", inpSearch.nameInptSearchBar);
    this.valInptSearch.value = inpSearch.nameInptSearchBar
    console.log("this.valInptSearch = ", this.valInptSearch );

    this.produitService.getbyKeyWord(inpSearch.nameInptSearchBar).subscribe(data =>{
      this.produits = data;

      this.totalFound = this.produits.length;
      console.log("this.totalFound ", this.totalFound.length);
      
  
        this.totalSearchInp = true;
        this.totalFork = false;
        this.totalCat = false;
      
      console.log("this.produits = ", this.produits);
    } )
    
  }


  
}
