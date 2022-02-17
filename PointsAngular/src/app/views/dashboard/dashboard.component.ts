import { AuthService } from './../../config/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogueMesteComponent } from '../../dialogue/dialogue-meste/dialogue-meste.component';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialoguePupiloComponent } from 'src/app/dialogue/dialogue-pupilo/dialogue-pupilo.component';
import { PointServiceService } from 'src/app/point-service.service';
import { SnackBarService } from 'src/app/config/snackbar.sevice';



export interface DialogData {
  id: any;  
  premio: string;
  pontosPremio:any;

}

@Component({
  selector: 'app.module-dashboard',
  templateUrl:"./dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //itens necessários para realizar a function collapse
  isMetasCollapsed= true;
  isPupiloCollapsed = false;
  isBonusCollapsed = true;
  isPenalidadeCollapsed = true;

@Input() public capitao!:string;
@Input() pontos!:any;
@Input() idUsuario!:any;
public bonusForm!:FormGroup;
public penalidadeForm!:FormGroup;

id = this.idUsuario;  
premio: string | undefined;
pontosPremio!:any;
categoria!: any;

// responsavél pela construção das tabelas
displayedColumns = ['premio',  'pontosPremio', 'actions'];
public DATATASK:any=[];
public dataSource: any =[] ;

@Input() public BONUSUSER:any=[];
@Input() public PENALIDADESUSER:any=[];
 
  constructor(public dialog: MatDialog, public apiService: PointServiceService, 
    private snackbar : SnackBarService, private formBuilder: FormBuilder ,
    private auth: AuthService) {

 }


  ngOnInit(): void {
    this.loadCapitao();
    
    this.loadBonusForm();
    this.loadPenalidadesForm();
    this.getPenalidades();
    this.getBonus();
    this.getPenalidades();
    setTimeout(() => {
      this.loadAllPremios();
      this.loadAllMissoes();
    }, 1000);
  }
  
  //monta o formBuilder de bonus
public loadBonusForm(){
  this.bonusForm = this.formBuilder.group({
    bonus:[''],
    pontos_bonus:['']
  })
}
public loadPenalidadesForm(){
  this.penalidadeForm = this.formBuilder.group({
    penalidade:[''],
    pontos_penalidade:['']

  })
}
public saveBonus(){
var bonus:any  ={
  id:this.idUsuario,
  bonus:this.bonusForm.value['bonus'],
  pontos_bonus:this.bonusForm.value['pontos_bonus']
};
this.apiService.saveBonus(bonus).subscribe(
  (resp:any) =>{
    this.snackbar.showSnack("Foram adicionados: "+bonus.pontos_bonus+" pontos","OK")
    this.loadCapitao();
    this.bonusForm.reset();
    this.getBonus();
  }, (err:any)=>{
    console.error(err);
    this.snackbar.showSnackBar("Não foi possivel salvar a bonificação", "OK")
  }
)
//console.log(bonus);
}

public savePenalidade(){
  var penalidade:any  ={
    id:this.idUsuario,
    penalidade:this.penalidadeForm.value['penalidade'],
    pontos_penalidade:this.penalidadeForm.value['pontos_penalidade']
  }
  this.apiService.savePenalidade(penalidade).subscribe(
    (resp:any) =>{
      this.snackbar.showSnackBar("Penalidade credita: "+penalidade.pontos_penalidade+" pontos","Ok");
      this.loadCapitao();
      this.penalidadeForm.reset();
      this.getPenalidades();  

    },(err)=>{
      this.snackbar.showSnackBar("Não foi possivel salvar a penalidade","Ok");

    }
  )
  console.log(penalidade);
  }



public getBonus() {
  this.apiService.getPontosBonus(this.idUsuario).subscribe(
    (resp:any)=>{
      this.BONUSUSER = resp;
      //console.log(this.BONUSUSER.length)
      //console.log(resp)

    },(err:any)=>{
      console.error(err);
    
    }
  )
}

public getPenalidades() {
  this.apiService.getPontoPenalidade(this.idUsuario).subscribe(
    (resp:any)=>{
      this.PENALIDADESUSER = resp;
      //console.log(this.BONUSUSER.length)
      //console.log(resp)

    },(err:any)=>{
      console.error(err);
    
    }
  )
}

public loadCapitao(){

this.idUsuario = this.auth.getIdCapitao();  

  this.apiService.getCapitao(this.idUsuario).subscribe(
    (resp:any) =>{
      this.capitao = resp[0].nmUsuario;
      this.pontos = resp[0].pontos;
      this.idUsuario = resp[0].id;
      this.categoria = resp[0].categoria;
    }
  )
  
}

  openPupilo(){
    // salva missao
    const dialogRefPupilo = this.dialog.open(DialoguePupiloComponent,
    {
      data:{ id:this.idUsuario, premio:this.premio, pontosPremio:this.pontosPremio}
    });

     dialogRefPupilo. afterClosed().subscribe((result:any) => {
      setTimeout(() => {
        this.loadAllPremios();
        this.loadAllMissoes();
      }, 1000);
      });
   
      
      
  }

  openDialog() {
    //salva o Premio
    const dialogRef = this.dialog.open(DialogueMesteComponent,{
      data:{ id:this.idUsuario, premio:this.premio, pontosPremio:this.pontosPremio}
    });

      dialogRef.afterClosed().subscribe((result:any) => {
        //console.log("Result: "+ this.id);
        //console.log("Result: "+ this.pontosPremio);
        //console.log("Result: "+ this.premio);
        //console.warn(result);
        //console.warn("loading");
        setTimeout(() => {
          this.loadAllPremios();
          this.loadAllMissoes();
        }, 100);

      });
     
    }

  public loadAllPremios() {
    var id:string =this.idUsuario;
    this.apiService.getAllPremios(id).subscribe(
      (resp: any) => {
        this.dataSource = resp;
      })
        
  }
  public loadAllMissoes() {
     var id = this.idUsuario;
    this.apiService.getAllMissoes(id).subscribe(
      (resp: any) => {
        this.DATATASK = resp;
      })
  }

  public deletePremio(id:any){
    this.apiService.deletePremio(id).subscribe(
      (resp:any)=>{
        console.log(resp);
        if(resp){
          this.loadAllPremios();
        }
        this.snackbar.showSnackBar('Premio Apagado com Sucesso', "OK");
                 

      }, (err:any) =>{
        console.error(err);
        this.snackbar.showSnackBar('Não foi possivel deletar o item',"OK");
        
      
    })

  }

   public deleteMission(id:any){
    this.apiService.deleteMission(id).subscribe(
      (resp:any)=>{
        console.log(resp);
        this.snackbar.showSnackBar('Premio Apagado com Sucesso', "OK");

        this.loadAllMissoes();
      }, (err:any) =>{
        console.error(err);
        this.snackbar.showSnackBar('Não foi possivel deletar o item',"OK");
        
    })
    
  }

  //adiciona os pontos ao participante

  public addPoints(pontos:any){

    const pontosAdd = {
      pontos:pontos,
      id : this.idUsuario
    }
    this.apiService.addPontos(pontosAdd).subscribe(
      (res:any) =>{      
        this.pontos = res.pontos;
        this.loadCapitao();
        this.snackbar.showSnackBar("Aguardando aprovação do seu capitão", "OK")
      },err =>{
        console.log("RES",err);
        console.warn("Pontos add",pontosAdd)
      }
    )
  }
  //subtrai os pontos do usuario;
  public decrementaPoints(pontos:any){

    const pontosAddDec = {
      pontos:pontos,
      id : this.idUsuario
    }
    this.apiService.decrementsPontos(pontosAddDec).subscribe(
      (res:any) =>{
        this.pontos = res.pontos;
        this.loadCapitao();
        this.snackbar.showSnack("Foram debitados: "+pontos+" pontos","OK")
      },err =>{
        console.log("RES",err);
        console.warn("Pontos add",pontosAddDec)
      }
    )
  }





  
}

 



  



  