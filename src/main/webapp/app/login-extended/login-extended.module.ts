import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginExtendedRoutingModule } from './login-extended-routing.module';
import { LoginExtendedComponent } from './login-extended.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LoginExtendedComponent],
  imports: [CommonModule, LoginExtendedRoutingModule, ReactiveFormsModule, NgbModalModule],
})
export class LoginExtendedModule {}
