import { FormGroup, FormBuilder } from '@angular/forms';
import { SnackBarService } from './../../config/snackbar.sevice';
import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';
import { PointServiceService } from 'src/app/point-service.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-marujo',
  templateUrl:'./marujo.component.html',
  styleUrls:['./marujo.component.css', '../dashboard/dashboard.component.css']
})
export class MarujoComponent implements OnInit {
  closeResult = ''; 

  @Input() idUsuario: any;
  @Input() marujo:any = {
    id:'',
    nmUsuario:"", 
    pontos:""
  };

  
  public dataSourcePremio:any = [];
  public dataSourceMission:any=[];



  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  premioForm!: FormGroup;
  missionForm!: FormGroup;

  constructor(private modalService: NgbModal, private api : PointServiceService, private snackbar: SnackBarService,
    private formBuilder: FormBuilder) {
      
   }

  ngOnInit(): void {
    this.getMarujo();
    
    setTimeout(() => {
     this.getAllPremios();
     this.getAllMission();
    }, 3000);
  }


  getMarujo(): void{

    this.api.capMarujo(this.idUsuario.idUsuario).subscribe(
      (resp:any)=>{
        this.marujo = resp;       
        console.log(resp.categoria) 
      }
    )
  }


  getAllPremios(){
  this. dataSourcePremio = [];
  this.marujo.forEach((element:any) => {
 
      this.api.getAllPremios(element[0].id).subscribe(
      (resp:any)=>{
          this.dataSourcePremio.push((resp))
      },(err:any) =>{
        console.warn(err);
        
      }
    )
   });
 
  }
 getAllMission(){
   this.dataSourceMission = [];
   this.marujo.forEach((element :any)=> {
     this.api.getAllMissoes(element[0].id).subscribe(
       (resp:any)=>{
         this.dataSourceMission.push(resp);
         console.log(resp)
       }
     )
   });
 }
  public deletePremio(id:any){
    this.api.deletePremio(id).subscribe(
      (resp:any)=>{
        if(resp){
          this.getAllPremios();
          this.getAllMission();
        }
        this.snackbar.showSnackBar('Premio Apagado com Sucesso', "OK");
                 

      }, (err:any) =>{
        console.error(err);
        this.snackbar.showSnackBar('Não foi possivel deletar o item',"OK");
        
      
    })

  }
  public deleteMissao(id:any){
    this.api.deleteMission(id).subscribe(
      (resp:any)=>{
        if(resp){
          this.getAllPremios();
          this.getAllMission();
          this.snackbar.showSnack("Missao deletado com sucesso", "OK");
        }
      }, (err:any)=> {
        this.snackbar.showSnack("Problemas com o serviodr", "ok");
      }
    )
}

  /**
   * Funções para o funcionamento do Modal
   */

   openTarefa(content: any) {
    this.modalService.open(content, {centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.premioForm = this.formBuilder.group({
        idUsuario:[''],
       premioSave:[''],
       pontosSave:['']
    })

  }
  savePontosPremio(){
    var item :any ={
      pontosPremio:this.premioForm.value['pontosSave'],
      premio:this.premioForm.value['premioSave'],
      idUsuario: this.premioForm.value['idUsuario'],

    }
    console.log(item)
    if(this.premioForm.value['idUsuario'] == "true"){

    this.marujo.forEach((element: any ) => {
      var item :any ={
      pontosPremio:this.premioForm.value['pontosSave'],
      premio:this.premioForm.value['premioSave'],
      idUsuario:element[0].id
    }
      console.log("id:" +element[0].id);     
      this.api.savePremio(item).subscribe(
        (resp:any)=>{
          console.log(resp);
          this.snackbar.showSnackBar("Premio Salvo com sucesso", "OK");
        }, (err:any)=>{
            console.log(err);
            this.snackbar.showSnackBar("Não foi possivel salvar o item ", "OK")
      })
      setTimeout(() => {
        this.getAllPremios();
        this.modalService.dismissAll();
      }, 1000);        
    });
    }else{
      this.api.savePremio(item).subscribe(
        (resp:any)=>{
          console.log(resp);
          this.snackbar.showSnackBar("Premio Salvo com sucesso", "OK");
        }, (err:any)=>{
            console.log(err);
            this.snackbar.showSnackBar("Não foi possivel salvar o item ", "OK")
      })
      setTimeout(() => {
        this.getAllPremios();
        this.modalService.dismissAll();
      }, 1000);
    }
    


 }

  openMissao(contentMissao: any) {
    this.modalService.open(contentMissao, {centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
      this.missionForm = this.formBuilder.group({
        idUsuarioMission:[''],
        pontos_missao:[''],
        missao:['']
      })

    
  }


  public savePontosMission(){
    var item :any ={
      missao:this.missionForm.value['missao'],
      pontos_missao:this.missionForm.value['pontos_missao'],
      idUsuario: this.missionForm.value['idUsuarioMission'],

    }

    console.log(item)
    if(this.missionForm.value['idUsuarioMission'] == "true"){
    this.marujo.forEach((element: any ) => {
      var item :any ={
        missao:this.missionForm.value['missao'],
        pontos_missao:this.missionForm.value['pontos_missao'],
        idUsuario:element[0].id
    }
      console.log("id:" +element[0].id);     
      this.api.saveMission(item).subscribe(
        (resp:any)=>{
          console.log(resp);
          this.snackbar.showSnackBar("Missão Salva com sucesso", "OK");
        }, (err:any)=>{
            console.log(err);
            this.snackbar.showSnackBar("Não foi possivel salvar o item ", "OK")
      })
      setTimeout(() => {
        this.getAllMission();
        this.modalService.dismissAll();
      }, 1000);        
    });
    }else{
      this.api.saveMission(item).subscribe(
        (resp:any)=>{
          console.log(resp);
          this.snackbar.showSnackBar("Missão Salvo com sucesso", "OK");
        }, (err:any)=>{
            console.log(err);
            this.snackbar.showSnackBar("Não foi possivel salvar o item ", "OK")
      })
      setTimeout(() => {
        this.getAllMission();
        this.modalService.dismissAll();
      }, 1000);
    }
    
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}


