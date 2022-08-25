import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin','*');
  }

  //enviando los datos por medio de post
  addData(data){
    return this.http.post('http://localhost/MySecondApp/backend/create.php', data);
  }

  //obteniendo los datos por medio de get
  read(){
    return this.http.get('http://localhost/MySecondApp/backend/read.php');
  }

  //eliminando por medio de delete enviando el parámetro necesario para completar la acción
  delete(person_id) {
    return this.http.delete('http://localhost/MySecondApp/backend/delete.php?person_id='+person_id);
  }
  //Actualizando
  modify(datam){
    return this.http.post('http://localhost/MySecondApp/backend/modify.php', datam);
  }
  //Buscando uno
  //obteniendo los datos por medio de get
  readOne(id){
    return this.http.get('http://localhost/MySecondApp/backend/readOne.php?person_id='+id);
  }
}
