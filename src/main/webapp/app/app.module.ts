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

@NgModule({
  imports: [
    BrowserModule,
    CodenodeSharedModule,
    CodenodeCoreModule,
    CodenodeHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CodenodeEntityModule,
    CodenodeAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CodenodeAppModule {}
