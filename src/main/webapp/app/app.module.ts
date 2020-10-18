import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CodenodeSharedModule } from 'app/shared/shared.module';
import { CodenodeCoreModule } from 'app/core/core.module';
import { CodenodeAppRoutingModule } from './app-routing.module';
import { CodenodeHomeModule } from './home/home.module';
import { CodenodeEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButton } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginExtendedModule } from 'app/login-extended/login-extended.module';

@NgModule({
  imports: [
    BrowserModule,
    CodenodeSharedModule,
    CodenodeCoreModule,
    CodenodeHomeModule,
    LoginExtendedModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CodenodeEntityModule,
    CodenodeAppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    FlexLayoutModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CodenodeAppModule {}
