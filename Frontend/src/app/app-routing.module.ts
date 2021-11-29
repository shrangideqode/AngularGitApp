import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RespositoriesComponent } from './pages/respositories/respositories.component';
import { RepositoryService } from './services/repository.service';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'repository' },
  {path: 'repository', component: RespositoriesComponent,pathMatch: 'full' },
  {path: 'users', component: UsersComponent,pathMatch: 'full' },
  {path: '404', component:NotFoundComponent,pathMatch: 'full' },
  {path: '**', redirectTo: '404',pathMatch: 'full' }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
