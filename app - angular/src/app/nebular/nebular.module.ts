import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule,NbSidebarModule,NbButtonModule,NbSelectModule,NbCardModule
        ,NbInputModule, NbDialogModule,NbAccordionModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const nebular = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbLayoutModule,
  NbEvaIconsModule,
  NbSidebarModule.forRoot(),
  NbButtonModule,
  NbSelectModule,
  NbCardModule,
  NbInputModule,
  NbDialogModule.forRoot(),
  NbAccordionModule

  
]

@NgModule({
  declarations: [],
  imports: [CommonModule,nebular],
  exports:[nebular]
})
export class NebularModule { }
