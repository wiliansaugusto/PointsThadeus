import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/config/snackbar.sevice';
import { PointServiceService } from 'src/app/point-service.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';

@Component({
  selector: 'app.module-dialogue-pupilo',
  templateUrl:'./dialogue-pupilo.component.html',
  styleUrls:['./dialogue-pupilo.component.css']
})


export class DialoguePupiloComponent implements OnInit {
  
  
  pupiloForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, 
    private snackBarService: SnackBarService,
    private apiService: PointServiceService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DashboardComponent,
    public dialogRef: MatDialogRef<DashboardComponent>) { }

  ngOnInit(): void {
    this.pupiloForm = this.formBuilder.group({
      missao:[''],
      pontos_missao:[''],
      
    })
  }

  public salvar(){

    var missao  = {
      missao: this.pupiloForm.value['missao'],
      pontos_missao: this.pupiloForm.value['pontos_missao'],
      idUsuario:this.data.id
    
    }
    console.log(missao.idUsuario);
    
    this.apiService.saveMission(missao).subscribe
    (
      (result:any) =>{
        this.snackBarService.showSnackBar("Missão salva ", "Sucesso");
      },(err:any)=>{
        this.snackBarService.showSnackBar("Não foi possivel efetuar a solicitação", "Sucesso");
        //this.cancel();
  
      }

    )
  
  }
  
  public cancel() {
    //this.formCloseEvent.emit(false);
    this.clearForm();    
  }
  
  public clearForm() {
 //   this.loginForm.reset();
 //   this.loginFormGroupDirective.resetForm();
 //   this.formCloseEvent.emit(true);
  }
}