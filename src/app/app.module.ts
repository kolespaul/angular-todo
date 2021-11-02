import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormComponent } from './form/form.component';
import { FormModalComponent } from './form/form-modal/form-modal.component';
import { TodosModalComponent } from './todos/todos-modal/todos-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataService} from "./services/data.service";
import {RefDirective} from "./shared/ref.directive";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FormComponent,
    FormModalComponent,
    TodosModalComponent,
    RefDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  entryComponents: [FormModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
