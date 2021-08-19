import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FansListResolver } from './core/resolvers/fans-list.resolver';
import { OneFanResolver } from './core/resolvers/one-fan.resolver';
import { DetailsComponent } from './pages/fans/details/details.component';
import { CreateComponent } from './pages/fans/create/create.component';
import { ListComponent } from './pages/fans/list/list.component';
import { UpdateComponent } from './pages/fans/update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'fans/list', pathMatch: 'full' },
  { path: 'fans/list', component: ListComponent, resolve: { fans: FansListResolver } },
  { path: 'fans/create', component: CreateComponent },
  { path : 'fans/details/:id', resolve : {fan : OneFanResolver}, component : DetailsComponent},
  { path : 'fans/update/:id', resolve : {fan : OneFanResolver}, component : UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
