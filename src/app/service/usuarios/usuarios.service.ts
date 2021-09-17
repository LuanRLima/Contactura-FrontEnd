// import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Authentication, StorageInfo, User } from 'src/app/models/user';
// import {environment} from 'src/environments/environment';
// import {map} from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsuariosService {
//   private dataEdit = new BehaviorSubject<User>(null);
//   botaoEdit = this.dataEdit.asObservable();

//   constructor(private http: HttpClient) {
//     console.log('socorroDeus')
//   }

//   api_url = environment.api_url;

//   getUsuariosList(usuarios) {
//     this.dataEdit.next(usuarios);
//   }

//   authentication(authentication: Authentication){
//     const headers = new HttpHeaders ({ Authorization: 'Basic ' 
//     + btoa(authentication.username + ':' + authentication.password)});
//     return this.http.get(this.api_url + 'user/login', {headers}).pipe(
//       map(authData => {

//         let storageInformation: StorageInfo = {
//           admin: authData[0],
//           token: authData[1]
//         }
//         console.log(storageInformation);
//         return  storageInformation;
//       }
//       )
//     );

//   }
//   // authentication(authentication: Authentication) {
//   //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(authentication.username + ':' + authentication.password) });
//   //   return this.http.get(this.api_url + 'user/login', { headers}).pipe(
//   //     map(
//   //       authData => {
//   //         return authData;
//   //       }
//   //     )
//   //   );
//   // }
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authentication, StorageInfo, User } from 'src/app/models/user';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private dataEdit =new BehaviorSubject<User>(null);
   botaoEdit = this.dataEdit.asObservable();

  constructor(private http: HttpClient) {
      console.log ('Teste front_end serviço');
  }

  api_url = environment.api_url;

  authentication(authentication: Authentication){
    const headers = new HttpHeaders ({ Authentication: 'Basic ' 
    + btoa(authentication.username + ':' + authentication.password)});
    return this.http.get(this.api_url + 'user/login', {headers}).pipe(
      map(
        authData => {

          let storageInformation: StorageInfo = {
            admin: authData[0],
            token: authData[1]
          }

          console.log(storageInformation);
          return storageInformation;
        }       
      ) 
    );
  }

  getUsersList(usuarios:User){
   this.dataEdit.next(usuarios);
 }

}