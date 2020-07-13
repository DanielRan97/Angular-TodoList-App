import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NebularModule } from './nebular/nebular.module';
import { MainComponent } from './modules/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EditComponent } from './modules/edit/edit.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    NebularModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
