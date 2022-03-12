import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vaga } from './models/Vagas.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private _url = "http://localhost:3000/vagas"

  constructor(private _httpClient: HttpClient ) { }

    getVagas(): Observable<Vaga[]>{
      return this._httpClient.get<Vaga[]>(this._url);
    }

    cadastrarVaga(vaga: Vaga):Observable<Vaga[]>{
      return this._httpClient.post<Vaga[]>(this._url,vaga);
    }

    atualizarVaga(id: any, vaga: Vaga):Observable<Vaga[]>{
      const urlAtualizar = `${this._url}/${id}`;
      return this._httpClient.put<Vaga[]>(urlAtualizar, vaga);
    }

    removerVaga(id:any):Observable<Vaga[]>{
      const urlDeletar = `${this._url}/${id}`;
      return this._httpClient.delete<Vaga[]>(urlDeletar);
    }
}
