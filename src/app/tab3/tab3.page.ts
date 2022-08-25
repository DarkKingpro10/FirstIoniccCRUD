import { Component, ViewChild  } from '@angular/core';
//dependencia del servicio
import { ApiService } from '../api.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonContent) content: IonContent;
  public hideForm: boolean = false;
  //definiendo las variables que serán utilizadas
  person_name: any;
  person_age: any;
  //definiendo el arreglo que será utilizado
  persons: any=[];
  person: any=[];

  person_id: any;
  constructor(
    public _apiService: ApiService
  ) {
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

  readOne()
  {
    //enviando la solicitud al api service para completar la acción
    //asignando los valores que tomarán las variables
    this._apiService.readOne(this.person_id).subscribe((res:any)=>{
      //imprimir en consola el resultado
      console.log("SUCCESS ONE", res);
      //los resultados son asignados al arreglo correspondiente
      this.person = res;
      this.person_id = this.person[0].person_id;
      this.person_name = this.person[0].person_name;
      this.person_age = this.person[0].person_age;

      console.log(this.person[0])
    },(error:any) => {
      //si hay un error con la api service, se muestra acá
      console.log("ERROR", error);
    })
  }
  showEdit(id){
    if(!this.hideForm){
      this.hideForm = !this.hideForm;
    }
    this.content.scrollToTop(400);
    this.person_id = id;
    this.readOne();
  }
  
  saveEdit(){
    //asignando los valores que tomarán las variables
    let data = {
      person_name: this.person_name,
      person_age: this.person_age,
      person_id: this.person_id
    }

    //verificando entradas
    if(this.person_name != '' && this.person_age > 0 && this.person_id !=''){
      //enviando los datos al api service para completar la acción
      this._apiService.modify(data).subscribe((res:any)=>{
        //imprimir en consola el resultado
        console.log("SUCCESS", res);
        //limpiar campos
        this.person_name = '';
        this.person_age = '';
        this.person_id = '';
        this.content.scrollToTop(400);
      },(error:any) => {
        //si hay un error con la api, se muestra acá
        console.log("ERROR", error);
      })
    } else {
      //si hay algún campo vacío
      console.log("Empty values");
    }
  }

  cancelData(){
    this.person_id = '';
    this.hideForm = !this.hideForm;
  }
}
