import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  message="Qu tal";

  nameInput = document.getElementById('name') as HTMLInputElement;
  
  pepepe = fromEvent(this.nameInput, 'keydown').subscribe((e: KeyboardEvent) =>{

    // if (e.keyCode === 27) {
      // this.nameInput.value = '';
       console.log(e.keyCode);
   //  }

   });


  constructor(public data:DataService) { }

  ngOnInit(): void {

    this.data.getClientes$().subscribe(
      
      clientes => {
     
    //console.log("***************PPPPP"+clientes)
    this.message=clientes;
    }
      );


     
    
    
  }



}

