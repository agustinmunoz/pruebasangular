import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message:string;
  datos = []
  private clientes$ = new Subject<string>();

  constructor() {

this.datos.push({"nombre":"Hola","ape1":"Perez"});
//console.log(this.datos)

   }


addDatos(message){

  //this.datos.push({"nombre":"Juan","ape1":"Traspon"});
 // this.message="hola";
  
 // this.clientes$.next(message);

 let timeoutId = setTimeout(() => {
  this.clientes$.next("Hola1");
  
}, 1000);


let timeoutId2 = setTimeout(() => {
  this.clientes$.next("Hola2");
  
}, 2000);


let timeoutId3 = setTimeout(() => {
  this.clientes$.next("Hola3");
  
}, 3000);



let timeoutId4 = setTimeout(() => {
  this.clientes$.complete();
  
}, 4000);



}

getDatos(){

  return this.datos;
}


getClientes$(): Observable<string> {
  return this.clientes$.asObservable();
}

}
