import { Component } from '@angular/core';

interface IPessoa {
  nome: string;
  sobrenome: string;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public texto = 'Boa noite pessoal.'

  public pessoa: IPessoa = {
    nome: 'Gustavo',
    sobrenome: 'Martins'
  };

  public cor = 'blue'
  
  public currentvalue = ''

  public switch = true;

  public valorNumerico = 0;

  aumentar(): void {
    if (this.valorNumerico < 10) this.valorNumerico++;
  }

  diminuir(): void {
    if (this.valorNumerico > 0) this.valorNumerico--;
  }
 
  resetar(): void{
    this.valorNumerico = 0;
  }
  
}
