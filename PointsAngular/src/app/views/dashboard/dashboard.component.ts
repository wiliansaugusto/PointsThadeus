import { Component, Input, OnInit, Output } from '@angular/core';
import { MetasElements } from 'src/app/_module/metas';

@Component({
  selector: 'app.module-dashboard',
  templateUrl:"./dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //itens necessários para realizar a function collapse
  isMetasCollapsed= false;
  isPupiloCollapsed = true
  isBonusCollapsed = true
  isPenalidadeCollapsed =true;

// responsavél pela construção das tabelas
displayedColumns = ['Meta',  'pontos', 'actions'];

ELEMENT_DATA: MetasElements[] = [
  { descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quia saepe! Nobis, magnam natus! Ad praesentium, quas inventore dolore corrupti rep  ", pontos: 'H', id:1},
  { descricao: 'Helium', pontos: 'He', id:1},
  { descricao: 'Lithium', pontos: 'Li', id:1},
  { descricao: 'Beryllium', pontos: 'Be', id:1},
  { descricao: 'Boron',  pontos: 'B', id:1},
  { descricao: 'Carbon',  pontos: 'C', id:1},
  { descricao: 'Nitrogen',  pontos: 'N', id:1},
  { descricao: 'Oxygen',  pontos: 'O', id:1},
  { descricao: 'Fluorine',  pontos: 'F', id:1},
  { descricao: 'Neon',  pontos: 'Ne', id:1},
];

public DATATASK: MetasElements[] = [
  { descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quia saepe! Nobis ", pontos: 'H', id:1},
  { descricao: 'Rober', pontos: 'He', id:45},
  { descricao: 'Lithium', pontos: 'Li', id:1},
  { descricao: 'Beryllium', pontos: 'Be', id:1},
  { descricao: 'Boron',  pontos: 'B', id:1},
  { descricao: 'Carbon',  pontos: 'C', id:1},
  { descricao: 'Nitrogen',  pontos: 'N', id:1},
  { descricao: 'Oxygen',  pontos: 'O', id:1},
  { descricao: 'Fluorine',  pontos: 'F', id:1},
  { descricao: 'Neon',  pontos: 'Ne', id:1},
];


dataSource: any = this.ELEMENT_DATA;

 
  constructor() { }

  ngOnInit(): void {
  }



}


  