import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Gifs, GifsHttpResponse } from 'src/app/gif.interface';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // Url del Sitio Web
  private servicioUrl = "https://api.giphy.com/v1/gifs/"
  // ApiKey Obtenida del Sitio
  private apiKey = "l3fnCQxU0DyLbLK3GXi1RWzI0snoyNkD"
  // Arreglo de Historia
  private _historia:String[]=["ultraman","heman","messi","chavo","jerry"]
  //Resultados obtenidos del Backend
  private resultados:Gifs[]=[]

  // Solo para visualizar cuando se ejecuta por primera vez
  constructor( private http:HttpClient) { console.log("Constructor GifsService   *******************  ")}

  // Método que ejecutará el componente buscar y el sidebar
  buscarGifts(query:string){
  console.log("buscarGifts final debiera ser Observable")
  // Revisa el historial
  query = this.revisaHistoria(query)

   // Ejecuta el método del back-end como sincrónico
     //this.buscarGiftsSincronico(query)
    // this.buscarGiftsAsincronico(query)
    this.buscarGiftsSuscribe(query)
}

  // Retorna el arreglo de _Historial
  get getHistorial(){
    //return this._historia; // devuelve por referencia
    //return ["servicio","mesa","chavo","Harrys","prueba"]
    // devuelve por valor(copia)
    return [...this._historia]; 
  }

   // Retorna el arreglo resultados Por Valor(Copia)
  get getResultados(){
    return [...this.resultados]
  }

  // Revisa si la palabra esta en el arreglo
  // Si se encuentra no hace nada
  revisaHistoria(query:string):string{ 
    //Transforma a minusculas 
     //  y realiza un trim(elimina blancos externos)
     query = query.toLowerCase().trim()
     // Si no tiene contenido finaliza
     if (query.length==0) return query
 
     //  si existe finaliza, pero no carga, no me sirve
     //  if (this._historia.includes(query)) return
 
     // Si no existe lo agrega al arreglo
     if (!this._historia.includes(query)) {
       // Lo Agrega al final del arreglo
       this._historia.unshift(query) 
       // Deja los 10 Primeros
       this._historia = this._historia.splice(0,10)
     }
     return query
   }

   async buscarGiftsSincronico(query:String){
  
    // Si esta vacio, no tiene sentido que siga
    if (query.trim().length==0) return

//********************************************************** */
   //let resp = await fetch("https://api.giphy.com/v1/gifs/search$1api_key=XXXXX&q=messi&limit=10")
   // configuramos ls url, con la api_key, la palabra y el limite
   let stUrl = `${this.servicioUrl}search$2api_key=${this.apiKey}&q=${query}&limit=10`
   
   // Para poder ejecutarlo localmente, 
   // siempre y cuando haya iniciado el servicio JSonServer
   // Si se inscribio en https://api.giphy.com
   // elimine la siguiente línea
   stUrl = "http://localhost:3000/" + query
   
   // Revisamos en la consola la url
   console.log(stUrl)
   
   // Ejecuta la url, await, espera hasta que llegue la respuesta local
   //   En este caso await sería un error
   let resp = await fetch(stUrl)
   
   // Transforma la respuesta en un JSon
   let lData = await resp.json()
   
   // Copia la respuesta al arreglo resultados
   this.resultados = lData.data
   
   // Desplegamos la data en la consola
   console.log("Sincronizador Sync Await",lData)

   // Observe que sin hacer nada se redespliega el resultado
  }

   // Asincrónico
   buscarGiftsAsincronico(query:String){
    //let resp = await fetch("https://api.giphy.com/v1/gifs/search$1api_key=XXXXX&q=messi&limit=10")
    // configuramos ls url, con la api_key, la palabra y el limite
    let stUrl = `${this.servicioUrl}search$2api_key=${this.apiKey}&q=${query}&limit=10`
 
    // Para poder ejecutarlo localmente, 
    // siempre y cuando haya iniciado el servicio JSonServer
    // Si se inscribio en https://api.giphy.com
    // elimine la siguiente línea
    stUrl = "http://localhost:3000/" + query
 
    // Revisamos en la consola la url
    console.log(stUrl)
 
 //********************************************************** */
    // Observe la secuencia de los log
    console.log("1111111111111111111111111111111111111111")
    fetch(stUrl)
        .then(resp=>{
             console.log("22222222222222222222222222222222222")
             resp.json().then(data=>{
               console.log("AASincronizador ",data)
                  // Copia la respuesta al arreglo resultados
                this.resultados = data.data
                console.log("3333333333333333333333333333333")
 
             })
             console.log("4444444444444444444444444444444444444444") 
        })
    console.log("555555555555555555555555555555555555555555555")     
   }

   async buscarGiftsSuscribe(query:string){
    // Creaamos un objeto en el cual pueda enviar los parámetros
    const parametros = new HttpParams()
                  .set("api_key",this.apiKey)
                  .set("q",query)
                  .set("limit",10)
    console.log("Parametros ", parametros)              

    //********************************************************** */
  //this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=l3fnCQxU0DyLbLK3GXi1RWzI0snoyNkD&q=chavo&limit=10`)
    // Sin respuesta de estructura
    // Con respuesta de estructura llamada GifsHttpResponse la cual declaramo como interfaces
    this.http.get<GifsHttpResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)

    let stUrl = `${this.servicioUrl}search`
    //stUrl = "http://localhost:3000/" + query
    console.log("1111111111111111111111111111111111111111")
    this.http.get<GifsHttpResponse>(stUrl,{params:parametros})
        .subscribe((resp)=>{   // funciona por <GifHttpResponse> colocado en el get
            console.log("22222222222222222222222222222222222")
            console.log("Observable Respuesta ",resp.data)
            this.resultados = resp.data
            console.log("3333333333333333333333333333333")
            
            // Grabamos los resultados en el LocalStorage
            localStorage.setItem("resultados",JSON.stringify(this.resultados))
          })
     console.log("555555555555555555555555555555555555555555555")     
     
     // Grabamos la historia en el LocalStorage
     localStorage.setItem("historia",JSON.stringify(this._historia))

  }
  

}
