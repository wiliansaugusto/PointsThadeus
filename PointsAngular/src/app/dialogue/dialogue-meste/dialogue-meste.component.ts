import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SnackBarService } from 'src/app/config/snackbar.sevice';
import { PointServiceService } from 'src/app/point-service.service';
import { Router } from '@angular/router';
import { DashboardComponent, DialogData } from 'src/app/views/dashboard/dashboard.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app.module-dialogue-meste',
  templateUrl:'./dialogue-mestre.component.html',
  styleUrls:['./dialogue-mestre.component.css']
})
export class DialogueMesteComponent implements OnInit {


  public mestreForm!:FormGroup;
  DashboardComponent: any;

  constructor(private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private apiService: PointServiceService, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DashboardComponent,
    public dialogRef: MatDialogRef<DashboardComponent>
    ) { }

  ngOnInit(): void {
    this.mestreForm = this.formBuilder.group({
      premio:[''],
      pontosPremio:[''],
      id:['']
    })
  }

  public salvar(){
    var premio  = {
      premio: this.mestreForm.value['premio'],
      pontosPremio: this.mestreForm.value['pontosPremio'],
      idUsuario: this.data.id
    }
    /*
    terminar de construir a api
    */
    console.warn("idUSuario: "+premio.idUsuario , premio.pontosPremio);
    console.warn("data: "+  this.data.id);
   
    this.apiService.savePremio(premio).subscribe(
      (resp:any) =>{
        this.snackBarService.showSnackBar("Premio  Cadastrado com sucesso", "Sucesso");
      },(err:any)=>{
        this.snackBarService.showSnackBar("Não foi possivel concluir a solicitação", "Sucesso");
        console.warn(err);

      }

    )
    this.dialogRef.close();

  }
  
 
}
