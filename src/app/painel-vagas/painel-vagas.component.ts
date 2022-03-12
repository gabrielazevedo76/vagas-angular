import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css'],
})
export class PainelVagasComponent implements OnInit {
  public vaga: Vaga = new Vaga(0, '', '', '', 2, '', false);
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe({
      next: (v) => {
        this.vaga = new Vaga(0, '', '', '', 2, '', false);
      },
      error: (e) => {
        console.log('erro ao cadastrar');
      },
    });
    window.location.href = '/mural';
  }

  atualizar(id: number) {
    this._vagasService.atualizarVaga(id, this.vaga).subscribe({
      next: (v) => {
        this.vaga = new Vaga(0, '', '', '', 2, '', false);
      },
      error: (e) => {
        console.log('erro ao atualizar');
      },
    });

    window.location.href = '/mural';
  }

  excluir(id: number) {
    this._vagasService.removerVaga(id).subscribe({
      next: (v) => {
        this.vaga = new Vaga(0, '', '', '', 2, '', false);
      },
      error: (e) => {
        console.log('erro ao deletar');
      },
    });

    window.location.href = '/mural';
  }

  listarVagas() {
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {
        return new Vaga(
          item.idVaga,
          item.titulo,
          item.descricao,
          item.requisitos,
          item.remuneracaoVaga,
          item.beneficios,
          item.aberta
        );
      });
    });
  }
}
