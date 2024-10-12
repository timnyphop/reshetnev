import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RaitingComponent } from './pages/raiting/raiting.component';
import { CollegeComponent } from './pages/college/college.component';
import { MagistraturaComponent } from './pages/magistratura/magistratura.component';
import { AspiranturaComponent } from './pages/aspirantura/aspirantura.component';
import { ZachisleniyeComponent } from './pages/zachisleniye/zachisleniye.component';
import { ForeignerComponent } from './pages/foreigner/foreigner.component';
import { DeadlineComponent } from './pages/deadline/deadline.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { BaklavariatComponent } from './pages/baklavariat/baklavariat.component';
import { InstructionComponent } from './pages/instruction/instruction.component';
import { HostelComponent } from './pages/hostel/hostel.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.default),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.default),
      },
      {
        path: 'raiting',
        loadComponent: () =>
          import('./pages/raiting/raiting.component').then(
            (m) => m.RaitingComponent,
          ),
      },
    ],
  },

  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: 'raiting',
    loadComponent: () =>
      import('./pages/raiting/raiting.component').then(
        (m) => m.RaitingComponent,
      ),
  },
  {
    path: 'college',
    loadComponent: () =>
      import('./pages/college/college.component').then(
        (m) => m.CollegeComponent,
      ),
  },
  { path: 'balakvariat', component: BaklavariatComponent },
  { path: 'magistratura', component: MagistraturaComponent },
  { path: 'aspirantura', component: AspiranturaComponent },
  { path: 'zachisleniye', component: ZachisleniyeComponent },
  { path: 'foreignpeople', component: ForeignerComponent },
  { path: 'deadline', component: DeadlineComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'instruction', component: InstructionComponent },
  { path: 'hostel', component: HostelComponent },
];
