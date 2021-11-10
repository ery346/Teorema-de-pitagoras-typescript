import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsComponent } from './inputs/inputs.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AreaPerimetroComponent } from './area-perimetro/area-perimetro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputsComponent,
    ResultadoComponent,
    MainPageComponent,
    AreaPerimetroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
