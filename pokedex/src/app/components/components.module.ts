import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
  declarations: [
    PokemonTypeComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonTypeComponent,
    ErrorModalComponent
  ]
})
export class ComponentsModule { }
