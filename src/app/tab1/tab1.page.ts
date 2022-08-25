import { Component } from '@angular/core';
//dependencia del servicio
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //definiendo las variables que serán utilizadas
  person_name: any;
  person_age: any;

  constructor(
    public _apiService: ApiService
  ) {
  }

  //agregar un nuevo registro
  addData() 
  {
    //asignando los valores que tomarán las variables
    let data = {
      person_name: this.person_name,
      person_age: this.person_age,
    }
    
    //verificando entradas
    if(this.person_name != '' && this.person_age > 0){
      //enviando los datos al api service para completar la acción
      this._apiService.addData(data).subscribe((res:any)=>{
        //imprimir en consola el resultado
        console.log("SUCCESS", res);
        //limpiar campos
        this.person_name = '';
        this.person_age = '';
      },(error:any) => {
        //si hay un error con la api, se muestra acá
        console.log("ERROR", error);
      })
    } else {
      //si hay algún campo vacío
      console.log("Empty values");
    }
  }
}
