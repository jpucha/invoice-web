import { Injectable } from '@angular/core';
//import { DatePipe, formatDate } from '@angular/common';
import { Users } from './user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  private urlEndPoint: string = 'http://localhost:8080/invoiceApiServices/api/v1/login';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  getLogin(credentials : Users){
    return this.http.post(this.urlEndPoint, credentials,
      {
        observe: 'response'
      }).pipe(map((response: HttpResponse<any>)=>{
        const body= response.body;
        console.log('Response that: ',body);
        const headers=response.headers;
        localStorage.setItem('token', body.token);
        return body;
      }))
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
