import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterunproduitComponent } from './ajouterunproduit.component';

describe('AjouterunproduitComponent', () => {
  let component: AjouterunproduitComponent;
  let fixture: ComponentFixture<AjouterunproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterunproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterunproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
