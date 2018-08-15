import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EcommerceComponent } from './layout/ecommerce/ecommerce.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import {APP_ROUTES} from "./app.routing";
import {RouterModule} from "@angular/router";
import { FixedpluginComponent } from './components/fixedplugin/fixedplugin.component';
import {SharedModuleModule} from "./shared-module/shared-module.module";
import { ParallaxComponent } from './layout/parallax/parallax.component';


@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FixedpluginComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    SharedModuleModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
