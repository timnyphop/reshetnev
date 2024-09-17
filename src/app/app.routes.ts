import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import HomeComponent from './pages/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RaitingComponent } from './pages/raiting/raiting.component';
import { CollegeComponent } from './pages/college/college.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  { path: 'product', component: ProductComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'raiting', component: RaitingComponent },
  { path: 'college', component: CollegeComponent },
];
