import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './home/index/index.component';
import { UsersComponent } from './home/users/users.component';
import { ExampleComponent } from './home/example/example.component';


const routes: Routes = [
  {
    path: 'app',
    component: IndexComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'add', component: ExampleComponent },
          { path: '', component: UsersComponent },
        ]
      }


    ]
    
  },{ path: '', component: LoginComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
