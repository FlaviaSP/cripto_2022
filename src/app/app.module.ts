import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { TelaIncialComponent } from './tela-incial/tela-incial.component';
import { TabelaPrincipalComponent } from './tabela-principal/tabela-principal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TelaCambioComponent } from './tela-cambio/tela-cambio.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TelaIncialComponent,
    TabelaPrincipalComponent,
    TelaCambioComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
