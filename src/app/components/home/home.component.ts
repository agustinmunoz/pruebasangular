import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  clientes: any[];
  clientes$: Observable<string>;

  constructor(public data:DataService) { 

 //  console.log( data.datos);

  }

  ngOnInit(): void {

    //this.clientes$ = this.data.getClientes$();
    this.data.getClientes$().subscribe(
      
      clientes => {
     
    console.log("***************PPPPP"+clientes)
    }
      );
  }


  onClick(){

    this.data.addDatos("Este es mi mensaje");
    //console.log(this.data.getDatos());
  }

}
