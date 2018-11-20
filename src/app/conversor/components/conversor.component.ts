import { Component, OnInit, ViewChild } from '@angular/core';
import { Moeda, Conversao, ConversaoResponse } from '../model';
import { NgForm } from '@angular/forms';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  private moedas:Moeda[];
  private possuiErro:boolean;
  private conversao:Conversao;
  private conversaoResponse:ConversaoResponse;

  @ViewChild("conversaoForm") conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) { }

  ngOnInit() {
    this.init();
    this.moedas = this.moedaService.listarTodas();
  } 

  init(): void {
  	this.conversao = new Conversao('USD', 'BRL', null);
  	this.possuiErro = false;
  }

  converter():void{
    if(this.conversaoForm.form.valid){
      this.conversorService.converter(this.conversao).subscribe((response) =>{
        this.conversaoResponse = response;
      }, error => this.possuiErro = true);
    }
  }

}
