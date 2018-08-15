import {Routes} from "@angular/router";
import {EcommerceComponent} from "./layout/ecommerce/ecommerce.component";
import {HomeComponent} from "./home/home.component";
import {ParallaxComponent} from "./layout/parallax/parallax.component";

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: EcommerceComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  { path: 'attakorah', component: ParallaxComponent}
]
