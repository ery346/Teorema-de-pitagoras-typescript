import { Component, Input} from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-area-perimetro',
  templateUrl: './area-perimetro.component.html',
  
})
export class AreaPerimetroComponent  {


 
  @Input() perimetro: number = 0;
  @Input() area: number = 0;

}
