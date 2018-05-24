import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ForgotComponent } from './forgot.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ForgotComponent,
  ],
})
export class ForgotModule { }