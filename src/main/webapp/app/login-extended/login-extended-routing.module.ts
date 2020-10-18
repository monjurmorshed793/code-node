import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginExtendedComponent } from 'app/login-extended/login-extended.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginExtendedComponent,
    data: {
      authorities: [],
      pageTitle: 'Please Login',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginExtendedRoutingModule {}
