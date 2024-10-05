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
    component: HomeComponent,
    children: [{ path: '', component: HomeComponent }],
  },

  { path: 'auth', component: AuthComponent },
  { path: 'raiting', component: RaitingComponent },
  { path: 'college', component: CollegeComponent },
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
