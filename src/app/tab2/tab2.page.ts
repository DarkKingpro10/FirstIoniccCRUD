import { Component } from '@angular/core';
//dependencia del servicio
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  //definiendo las variables que serán utilizadas
  person_name: any;
  person_age: any;
  //definiendo el arreglo que será utilizado
  persons: any=[];

  constructor(
    public _apiService: ApiService
  ) {
    //cuando la página se recargue ejecutará el método
    this.read();
  }

  //método para leer los datos
  read()
  {
    //enviando la solicitud al api service para completar la acción
    this._apiService.read().subscribe((res:any)=>{
      //imprimir en consola el resultado
      console.log("SUCCESS", res);
      //los resultados son asignados al arreglo correspondiente
      this.persons = res;
    },(error:any) => {
      //si hay un error con la api service, se muestra acá
      console.log("ERROR", error);
    })
  } 

  /* método para eliminar registros, envía al api service el parámetro necesario
     para completar la acción*/
  delete(person_id)
  {
    //enviando la solicitud y el parámetro al api service para completar la acción
    this._apiService.delete(person_id).subscribe((res:any)=>{
      //imprimir en consola el resultado
      console.log("SUCCESS", res);
      //llama al método de lectura en caso que su resultado de eliminar haya sido exitoso
      this.read();
    },(error:any) => {
      //si hay un error con la api service, se muestra acá
      console.log("ERROR", error);
    })
  }
}
