import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TugasComponent } from './tugas/tugas.component';
import { Tugas3Component } from './tugas3/tugas3.component';
import { PegawaiComponent } from './pegawai/pegawai.component';
import { QuizDionComponent } from './quiz-dion/quiz-dion.component';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TugasComponent,
    Tugas3Component,
    PegawaiComponent,
    QuizDionComponent,
    QuizHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Syarat Two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
