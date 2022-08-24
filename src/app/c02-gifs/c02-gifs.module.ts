import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrinPageComponent } from './prin-page/prin-page.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PrinPageComponent,
    GifsPageComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule        
  ],
  exports: [PrinPageComponent], 
})
export class C02GifsModule { }
