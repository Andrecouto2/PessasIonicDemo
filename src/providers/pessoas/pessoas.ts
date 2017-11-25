import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PessoasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PessoasProvider {
  public pesssoas: any;
  public apiUrl: string = "https://randomuser.me/api/?nat=br&results=10&seed=abc"

  constructor(public http: HttpClient) {
    console.log('Hello PessoasProvider Provider');
  }

  public load() {

    if (this.pesssoas) {
      return Promise.resolve(this.pesssoas)
    }

    return new Promise(resolve => {
      this.http.get<any>(this.apiUrl).subscribe(data => {
        this.pesssoas = data.results;
        resolve(this.pesssoas)
      }, err => {
        console.log(err)
      });
    });

  }

  loadByEmail(email: String): any
  {
    for (let pessoa of this.pesssoas) {
      if (pessoa.email == email) {
        return pessoa;
      }
    }
  }

}
