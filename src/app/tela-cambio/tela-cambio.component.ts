import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Valor {
  name: string;
  type: string;
  unit: string;
  value: number;
}

@Component({
  selector: 'app-tela-cambio',
  templateUrl: './tela-cambio.component.html',
  styleUrls: ['./tela-cambio.component.css']
})
export class TelaCambioComponent implements OnInit {
  valores: Valor[] = []

  constructor(private http: HttpClient) { }
 

  ngOnInit(): void {
    this.http.get<any>('https://api.coingecko.com/api/v3/exchange_rates')
      .subscribe(
        res => {
          console.log(res);
          const temp = Object.values(res.rates);
          this.valores = temp as Valor[];
        },
        err => console.log(err))
  }

}
