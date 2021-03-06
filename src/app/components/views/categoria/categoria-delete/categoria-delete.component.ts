import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria-model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria.id = this.activeRoute.snapshot.paramMap.get('id')! //pega o id da tela atraves de ActivatedRoute com esse cmando. 
    this.findById() //sempre chama esse metodo quando chamanos o metodo delete..
  }

  findById():void{
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome
      this.categoria.descricao =resposta.descricao
      console.log(resposta)
    })
  }

  delete():void{
    this.service.delete(this.categoria.id!).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria removido com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error) // envia o erro na tela.
    })
  }
  cancelar():void {
    this.router.navigate(['categorias'])
  }

}
