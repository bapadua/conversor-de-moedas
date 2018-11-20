import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conversao, ConversaoResponse } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=a366b157db8a2cbd72fcf153ed942e18";

  constructor(private http: HttpClient) { }


  converter(conversao: Conversao): Observable<ConversaoResponse> {
    let params = `&symbols=${conversao.moedaDe},${conversao.moedaPara}`;
    return this.http.get(this.BASE_URL + params);
  }
  
  cotacaoDe(conversaoResponse: ConversaoResponse,
    conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    return (1 / conversaoResponse.rates[conversao.moedaDe])
      .toFixed(4);
  }

  cotacaoPara(conversaoResponse: ConversaoResponse,
    conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }
    return conversaoResponse.rates[conversao.moedaPara];
  }

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }



}
