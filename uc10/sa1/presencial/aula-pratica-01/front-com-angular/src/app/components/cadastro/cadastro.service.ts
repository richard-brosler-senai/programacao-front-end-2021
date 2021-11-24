import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  public readById(id: number): Observable<any>{
    return null;
  }

  public showMessege(mensagem: string){

  }

  public updateCadastro(formData: any): Observable<any>{
    return null;
  }
}
