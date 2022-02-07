import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { SnackBarService } from 'src/app/config/snackbar.sevice';
import { PointServiceService } from 'src/app/point-service.service';
import { Login } from 'src/app/_module/login';

@Component({
  selector: 'app.module-login',
  templateUrl:"./login.component.html",
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
 
   imagemRandon = ["../../../assets/entrada.jpg",
   "../../../assets/fotoprancha.jpeg",
   "../../../assets/naPraia.jpeg" ];
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild("loginFormDirective") loginFormGroupDirective !: FormGroupDirective;
  public loginForm!:FormGroup;
  @Input() public urlImagem!:string;
  constructor( private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private apiService: PointServiceService,) {
      this.urlImagem = this.imagemRandon[Math.floor(Math.random()*this.imagemRandon.length)] ;

     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  public login(){
    var login : Login = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password']
    }
    this.apiService.login(login).subscribe
    (
      (resp:any) =>{
        this.snackBarService.showSnackBar("Logado com sucesso", "Sucesso")
        console.warn(resp);
        
      },(err:any)=>{
        this.snackBarService.showSnackBar("Usuário e senha não coincidem", "Sucesso")
        
        console.warn(err);
        //this.cancel();
  
      }
    )
  

  
    
  }
  public cancel() {
    this.formCloseEvent.emit(false);
    this.clearForm();    
  }
  
  public clearForm() {
    this.loginForm.reset();
    this.loginFormGroupDirective.resetForm();
    this.formCloseEvent.emit(true);
  }
}
