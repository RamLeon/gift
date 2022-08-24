import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  // Inyectamos el servicio gifService
constructor(private buscaService:GifsService) { }

  ngOnInit(): void {
  }

    //@ViewChild Enlace con el objeto del html ==> #NombreObjeto
  //<HTMLInputElement> permite en native mostrar el tipado
  // Creamos la variable txBuscar
  //          la cual se enlaza con #txBusqueda del HTML
  // ! especifica que nunca será null
  @ViewChild('txBusqueda') txtBuscar!:ElementRef<HTMLInputElement>;

  // Otras formas de definirlo, pero el editor no nos ayuda
  //@ViewChild('txBusqueda') txtBuscar!:ElementRef;
  //@ViewChild('txBusqueda') txtBuscar:any;


  // Utilizado en el Html, en el placeHolder
  ayudaForm= 'Buscar Fotos por Ayuda'

  //constructor(private buscaService:GifsService) { }

  // Método que se utiliza en el Html, 
  // Programado cada vez que presione una tecla ==> (keyup)
  keyTeclas(evento:any){
    console.log("Tecla",evento)
  }

  // Método que se utiliza en el Html, 
  // Cada vez que presione ShifEnter ==> (keyup.shift.enter)
  keyShiftEnter(texto:String){
    console.log("Tecla Enter",texto)
    //document.querySelector('input').value=''
    console.log("Objeto",this.txtBuscar)
  }

  // Método que se utiliza en el Html, 
  // Cada vez que presione Enter ==> (keyup.enter)
  keyEnter(){
    console.log("Control Enter********",this.txtBuscar.nativeElement.value)
   // this.buscaService.buscarGifts(this.txtBuscar.nativeElement.value)
   this.buscaService.buscarGifts(this.txtBuscar.nativeElement.value) 
    this.txtBuscar.nativeElement.value=""
  }

}
