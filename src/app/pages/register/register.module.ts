import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RegisterComponent } from './register.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    RegisterComponent,
  ],
})
export class RegisterModule { }
