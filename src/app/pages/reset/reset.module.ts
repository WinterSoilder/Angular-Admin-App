import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ResetComponent } from './reset.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ResetComponent,
  ],
})
export class ResetModule { }