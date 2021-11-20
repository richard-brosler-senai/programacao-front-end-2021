import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  
  opContatoSel! : number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    let dados=`
    Nome: ${form.value.nome}
    Endereço: ${form.value.endereco}
    Telefone: ${form.value.telefone}
    E-mail: ${form.value.email}
    Opção de contato: ${this.opContatoSel}
    Mensagem: ${form.value.mensagem}
    `
    console.log(dados);
  }
  Mensagem(){
    $("#mensagem-botao").text("Agora temos mensagem");
  }
}
