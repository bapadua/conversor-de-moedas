import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { ConversorService, MoedaService } from './services';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  exports:[
    ConversorComponent
  ],
  providers:[
    ConversorService,
    MoedaService
  ]
})
export class ConversorModule {}
