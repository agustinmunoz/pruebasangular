import { Component, ElementRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebas';

  evento_agu:Event=  new Event ('evento_agu',);

  constructor(private eventManager: EventManager,private _elemRef: ElementRef) {
    
    
    const removeGlobalEventListener = this.eventManager.addGlobalEventListener(
      'document',
      'keypress',
      (ev) => {
        console.log('ev', ev);
      }
    );



    
    this.evento_agu.initEvent("hola") 

    //console.log(this._elemRef.nativeElement)
    this._elemRef.nativeElement.addEventListener('evento_agu',this.HazAlgo(this.evento_agu));
    
    
    this._elemRef.nativeElement.dispatchEvent(new CustomEvent('agus',{detail:"hello que tal",bubbles: true }))
    
    this._elemRef.nativeElement.addEventListener('agus',this.HazAlgo2(CustomEvent));

    //this._elemRef.nativeElement.
   // addEventListener('document','evento_agu',this.HazAlgo)
    //evento_agu: Event= new Event('agu');

  }

  HazAlgo(event){

    console.log(event.type);
  }


  HazAlgo2(event){

    console.log(event);
  }


 
  



}
