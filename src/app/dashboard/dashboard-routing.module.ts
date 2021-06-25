import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [{
  path: '', component: DashboardComponent, children: [
    {path: 'books', loadChildren: () => import('../list/list.module').then(m => m.ListModule)},
    {path: 'favorites', loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule)},
    {path: 'about', loadChildren: () => import('../about/about.module').then(m => m.AboutModule)},
  ],
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
