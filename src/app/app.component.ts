import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  
  // objeto: obj = {
  //   hipotenusa: 0,
  //   catetoa: 0,
  //   catetob: 0
  // }

  // MostrarResultado: string = '';

  // Perimetro: number = 0;

  // Area: number = 0;

  // recolectarResultados(): any{

    
  //   if(this.objeto.hipotenusa === 0 || this.objeto.hipotenusa === null ){

  //     const hipo =  Math.sqrt(Math.pow(this.objeto.catetoa , 2) + Math.pow(this.objeto.catetob , 2));

  //     this.MostrarResultado = `La hipotenusa es : ${hipo}`;

  //     this.Perimetro = hipo + this.objeto.catetoa + this.objeto.catetob;

  //     this.Area = (this.objeto.catetoa * this.objeto.catetob) / 2; 
  //   }

  //   else if(this.objeto.catetoa === 0 || this.objeto.catetoa === null ){

  //     const catA = Math.sqrt(Math.pow(this.objeto.hipotenusa , 2) - Math.pow(this.objeto.catetob , 2));

  //     this.MostrarResultado = `El cateto A es : ${catA}`;

  //     this.Perimetro = this.objeto.hipotenusa + catA + this.objeto.catetob;
      
  //     this.Area = (catA * this.objeto.catetob) / 2; 
      
  //   }

  //   else if(this.objeto.catetob === 0 || this.objeto.catetob === null ){

  //     const catB = Math.sqrt(Math.pow(this.objeto.hipotenusa , 2) - Math.pow(this.objeto.catetoa , 2));

  //     this.MostrarResultado = `El cateto B es : ${catB}`;

  //     this.Perimetro = this.objeto.hipotenusa + this.objeto.catetoa + catB;
     
  //     this.Area = (this.objeto.catetoa * catB) / 2; 
  //   }
    

  //   console.log(this.Perimetro)

    
  // }
  
}
