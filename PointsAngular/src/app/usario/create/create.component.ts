import { Router } from '@angular/router';
import { Usuario } from 'src/app/_module/usuario';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { SnackBarService } from 'src/app/config/snackbar.sevice'; 
import { PointServiceService } from 'src/app/point-service.service';
import { AuthService } from 'src/app/config/auth.service';

@Component({
  selector: 'app.module-create',
  templateUrl:'./create.component.html',
  styleUrls:['./create.component.css']
})
export class CreateComponent implements OnInit {


  @Input() public actionName!:string;
  @Input() public usuarioItem!: Usuario;

  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild("usuarioFormDirective") usuarioFormGroupDirective !: FormGroupDirective;

  public usuarioForm!: FormGroup;
  public isAuth!: any;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService, 
    private apiService: PointServiceService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.createForm();
    this.setCategoria();
    
  }


  private createForm() {
    this.usuarioForm = this.formBuilder.group({
      nomeCompleto:[''],
      email:[''],
      dtNascimento:[''],
      nmUsuario:[''],
      password:[''],
      
      
    })
  }
  public cancel() {
    this.formCloseEvent.emit(false);
    this.clearForm();    
  }

   setCategoria(){
    if(this.auth.getIdCapitao() == undefined){
      this.actionName = "Cadastrar novo Capitão";
      return"capitao";  
    }
    this.actionName = "Cadastrar novo Marujo";
      return "marujo";
   }
  public save() {
    var usuarioNovo : any = {
     nomeCompleto:this.usuarioForm.value['nomeCompleto'] ,
     email:this.usuarioForm.value['email'] ,
     dtNascimento:this.usuarioForm.value['dtNascimento'] ,
     nmUsuario:this.usuarioForm.value['nmUsuario'] ,
     password:this.usuarioForm.value['password'] ,
     pontos:0  ,
     categoria:this.setCategoria(),
     idCapitao: this.auth.getIdCapitao(),
    };
    var idadevalidada:number = this.validarIdade(usuarioNovo.dtNascimento,usuarioNovo.categoria);

    if(usuarioNovo.categoria == "capitao"){
      if(idadevalidada > 0){
        setTimeout(() => {
          this.apiService.saveUsuario(usuarioNovo).subscribe(
            (resp : any)=>{ 
              if(resp.mensage == "Email já cadastrado" ){
                this.snackBarService.showSnackBar(resp.mensage ,"OK");        
                this.clearForm();
                console.log(resp);
                
              }else{
                this.snackBarService.showSnackBar((resp.nomeCompleto+" salvo com sucesso"),"OK");        
                this.router.navigate(['/login']);
                console.log(resp);

              }
              //console.log(resp);
            },(err:any)=>{
              console.log(err);
              this.snackBarService.showSnackBar((usuarioNovo.nomeCompleto+" Não foi possivel salvar "+err),"OK")
            }
          )
        }, 600);
     
      }
    }else if(usuarioNovo.categoria == "marujo"){
        if(idadevalidada > 0){
      setTimeout(() => {
        this.apiService.saveUsuario(usuarioNovo).subscribe(
          (resp : any)=>{
            if(resp == "Email já cadastrado"){
              this.snackBarService.showSnackBar(resp.mensage ,"OK");        
              this.clearForm();
            }else{
              this.snackBarService.showSnackBar((resp.nomeCompleto+" salvo com sucesso"),"OK");        
              this.router.navigate(['/login']);

            }
            //console.log(resp);
          },(err:any)=>{
            console.log(err);
            this.snackBarService.showSnackBar((usuarioNovo.nomeCompleto+" Não foi possivel salvar "+err),"OK")
          }
        )
      }, 600);
   
    }
        
  }
        
    }
   

private validarIdade(dtNascimento: Date,tp : string){
  var d: any = new Date(dtNascimento);

  var idade = Math.floor((Date.now() - d) / (31557600000));
  if (idade > 17 &&  (tp == "capitao" || tp == "marujo")) {
    return idade;
  }else if(idade < 17 && tp == "marujo"){
    return idade;
  }else{
    
      this.snackBarService.showSnackBar(("Você tem: "+idade + " anos, só pode ser um marujo, peça para um responsável se cadastrar como seu capitão "),"OK");
      this.clearForm();
      
      return 0;    
    }      
        



}

  
  public clearForm() {
    this.usuarioForm.reset();
    this.usuarioFormGroupDirective.resetForm();
    this.formCloseEvent.emit(true);
  }
 
  }
