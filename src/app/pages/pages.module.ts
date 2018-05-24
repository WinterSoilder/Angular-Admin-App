import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgotModule } from './forgot/forgot.module';
import { ResetModule } from './reset/reset.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AuthGuard } from './auth.gaurd';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    LoginModule,
    RegisterModule,
    ForgotModule,
    ResetModule
  ],providers:[AuthGuard],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
