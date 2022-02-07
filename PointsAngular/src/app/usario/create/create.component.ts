import { Router } from '@angular/router';
import { Usuario } from 'src/app/_module/usuario';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { SnackBarService } from 'src/app/config/snackbar.sevice'; 
import { PointServiceService } from 'src/app/point-service.service';

@Component({
  selector: 'app.module-create',
  templateUrl:'./create.component.html',
  styleUrls:['./create.component.css']
})
export class CreateComponent implements OnInit {


  @Input() public actionName = "Cadastrar";
  @Input() public usuarioItem!: Usuario;

  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild("usuarioFormDirective") usuarioFormGroupDirective !: FormGroupDirective;

  public usuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService, 
    private apiService: PointServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }


  private createForm() {
    this.usuarioForm = this.formBuilder.group({
      nomeCompleto:[''],
      email:[''],
      dtNascimento:[''],
      nmUsuario:[''],
      password:[''],
      categoria:['']
      
      
    })
  }
  public cancel() {
    this.formCloseEvent.emit(false);
    this.clearForm();    
  }

  public save() {
    var usuarioNovo : Usuario = {
     guid:'', 
     nomeCompleto:this.usuarioForm.value['nomeCompleto'] ,
     email:this.usuarioForm.value['email'] ,
     dtNascimento:this.usuarioForm.value['dtNascimento'] ,
     nmUsuario:this.usuarioForm.value['nmUsuario'] ,
     password:this.usuarioForm.value['password'] ,
     pontos:0  ,
     categoria: this.usuarioForm.value['categoria'],
    };
    var idadevalidada:number = this.validarIdade(usuarioNovo.dtNascimento,usuarioNovo.categoria);
    //this.snackBarService.showSnackBar((usuarioNovo.nomeCompleto+" salvo com sucesso"),"OK");


    console.warn(idadevalidada);
    if(idadevalidada > 0){
      setTimeout(() => {
        this.apiService.saveUsuario(usuarioNovo).subscribe(
          (resp : any)=>{
            this.snackBarService.showSnackBar((usuarioNovo.nomeCompleto+" salvo com sucesso"),"OK");
           
            this.router.navigate(['/login']);
          },(err:any)=>{
            this.snackBarService.showSnackBar((usuarioNovo.nomeCompleto+" Não foi possivel salvar "+err),"OK")
          }
        )
      }, 6000);
   
    }
        
  }

private validarIdade(dtNascimento: Date,tp : string){
  var d: any = new Date(dtNascimento);

  var idade = Math.floor((Date.now() - d) / (31557600000));
  if (idade > 17 &&  (tp == "Mestre" || tp == "Pupilo")) {
    this.snackBarService.showSnackBar((this.usuarioForm.value['dataNascimento']+"Você tem: "+idade + " anos, e escolheu ser "+tp),"OK");
    return idade;
  }else if(idade < 17 && tp == "Pupilo"){
    this.snackBarService.showSnackBar((this.usuarioForm.value['dataNascimento']+"Você tem: "+idade + " anos, e escolheu ser "+tp),"OK");
    return idade;
  }else{
    
      this.snackBarService.showSnackBar(("Você tem: "+idade + " anos, só pode ser um pupilo, preencha o formulario novamente! "),"OK");
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
