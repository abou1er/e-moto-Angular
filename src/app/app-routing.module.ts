import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterunproduitComponent } from './composants/ajouterunproduit/ajouterunproduit.component';
import { HomeComponent } from './composants/home/home.component';
import { ProduitsComponent } from './composants/produits/produits.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'produits', component: ProduitsComponent},
  { path: 'ajouterunproduit', component: AjouterunproduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
