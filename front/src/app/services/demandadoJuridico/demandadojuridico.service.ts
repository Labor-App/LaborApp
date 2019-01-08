import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemandadoJuridico } from '../../models/DemandadoJuridico';



@Injectable({
  providedIn: 'root'
})
export class DemandadojuridicoService {

  constructor(private http: HttpClient) { }

  getDemandadoJuridico(url: string): any {

    return this.http.get(url);

   }

   enviarDemandadoJuridico(url: string, demandadoJuridico: DemandadoJuridico): any {
     return this.http.post(url, demandadoJuridico);

   }


}
