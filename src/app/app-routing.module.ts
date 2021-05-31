import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'categorias', // path para listar categorias passando na URL..
  component: CategoriaReadComponent
},
{
  path: 'categorias/create', // path para create categorias na URL..
  component: CategoriaCreateComponent
},
{
  path: 'categorias/delete/:id', // path para deletar categorias passando o id na URL..
  component: CategoriaDeleteComponent
},
{
  path: 'categorias/update/:id',// path para update categorias passando o id na URL usando a rota (endpoint)..
  component: CategoriaUpdateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
