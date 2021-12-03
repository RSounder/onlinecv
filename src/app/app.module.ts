import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { PageUnderBuildComponent } from './page-under-build/page-under-build.component';
import { AwardsComponent } from './awards/awards.component'
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoaderComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    PageUnderBuildComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
