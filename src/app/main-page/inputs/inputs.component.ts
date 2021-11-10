import { Component, Input, Output } from '@angular/core';
import { obj } from '../Interface/objeto.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
 
})
export class InputsComponent  {

 
  @Input()
  objeto: obj = {
    hipotenusa: 0,
    catetoa: 0,
    catetob: 0
  }


}
