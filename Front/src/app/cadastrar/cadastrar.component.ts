import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Usuario } from './Model/Usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  user:Usuario = new Usuario
  confirmSenha: string
  usuar:string
  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }
  confirmeSenha(event:any){
    this.confirmeSenha = event.target.value
    
    }
    tipouser(event: any){
    this.usuar= event.target.value
    }
    cadastrar(){
    this.user.tipo=this.usuar
    
     if(this.user.senha !=this.confirmSenha){
      alert("A senha esta esta incorreta")
    }else{
      this.authService.cadastrar(this.user).subscribe((resp:Usuario)=>{
        this.user=resp
        this.router.navigate(['/entrar'])
        alert('Usuario Cadastrado com Sucesso')
      })
    } 
    }
}
