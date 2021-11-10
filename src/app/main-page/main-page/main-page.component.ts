import { Component, EventEmitter, Output } from '@angular/core';
import { obj } from "../Interface/objeto.interface";




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  
  public objeto1: obj = {
    hipotenusa: 0,
    catetoa: 0,
    catetob: 0
  }

  public MostrarResultado1: string = '';

  public error: string = '';
  public class: string = '';
  public Perimetro: number = 0;
  public Area: number = 0;

  recolectarResultados(){
    if ((this.objeto1.hipotenusa ===  0 || this.objeto1.hipotenusa ===  null ) && (this.objeto1.catetoa === 0 || this.objeto1.catetoa === null ) && (this.objeto1.catetob === 0  || this.objeto1.catetob === null)) {
      this.error = 'Ingresa 2 valores';
      this.class = 'form-control is-invalid text-center text-danger fs-5';
      this.MostrarResultado1 = '';
      this.Area = 0;
      this.Perimetro = 0;
    }
    else if (this.objeto1.hipotenusa > 0 && this.objeto1.catetoa > 0 && this.objeto1.catetob > 0 ) {
      this.error = 'Ingresa los valores necesarios';
      this.class = 'form-control is-invalid text-center text-danger fs-5';
      this.MostrarResultado1 = '';
      this.Area = 0;
      this.Perimetro = 0;
    }
    else if(this.objeto1.hipotenusa === 0 || this.objeto1.hipotenusa === null ){
      this.error = '';
      this.class = '';
      const hipo =  Math.sqrt(Math.pow(this.objeto1.catetoa , 2) + Math.pow(this.objeto1.catetob , 2));

      this.MostrarResultado1 = `La hipotenusa es : ${hipo}`;

      this.Perimetro = hipo + this.objeto1.catetoa + this.objeto1.catetob;

      this.Area = (this.objeto1.catetoa * this.objeto1.catetob) / 2; 
    }

    else if(this.objeto1.catetoa === 0 || this.objeto1.catetoa === null ){
      this.error = '';
      this.class = '';
      const catA = Math.sqrt(Math.pow(this.objeto1.hipotenusa , 2) - Math.pow(this.objeto1.catetob , 2));

      this.MostrarResultado1 = `El cateto A es : ${catA}`;

      this.Perimetro = this.objeto1.hipotenusa + catA + this.objeto1.catetob;
      
      this.Area = (catA * this.objeto1.catetob) / 2; 
      
    }

    else if(this.objeto1.catetob === 0 || this.objeto1.catetob === null ){
      this.error = '';
      this.class = '';
      const catB = Math.sqrt(Math.pow(this.objeto1.hipotenusa , 2) - Math.pow(this.objeto1.catetoa , 2));

      this.MostrarResultado1 = `El cateto B es : ${catB}`;

      this.Perimetro = this.objeto1.hipotenusa + this.objeto1.catetoa + catB;
     
      this.Area = (this.objeto1.catetoa * catB) / 2; 
    }

    console.log(this.Perimetro)

    
  }
}
