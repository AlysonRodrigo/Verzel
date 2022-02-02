import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { UsuarioLogin } from '../cadastrar/Model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../cadastrar/Model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.put<UsuarioLogin>('http://localhost:8080/usuario/credenciais', userLogin)
  }
  cadastrar(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuario/salvar', user)
  }
  // logado() {
  //   let ok: boolean = false

  //   if (environment.token != '') {
  //     ok = true
  //   }

  //   return ok
  // }
}