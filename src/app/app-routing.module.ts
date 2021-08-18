import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FansListResolver } from './core/resolvers/fans-list.resolver';
import { CreateComponent } from './pages/fans/create/create.component';
import { ListComponent } from './pages/fans/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'fans/list', pathMatch: 'full' },
  { path: 'fans/list', component: ListComponent, resolve: { fans: FansListResolver } },
  { path: 'fans/create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
