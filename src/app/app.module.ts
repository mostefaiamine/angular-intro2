import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Exercice1Component } from './components/exercice1/exercice1.component';
import { Exercice2Component } from './components/exercice2/exercice2.component';
import { Carte1Component } from './components/carte1/carte1.component';
import { Exemple1Component } from './components/exemple1/exemple1.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { Carte2Component } from './components/carte2/carte2.component';
import { Exemple2Component } from './components/exemple2/exemple2.component';
import { Exemple3Component } from './components/exemple3/exemple3.component';
import { Carte3Component } from './components/carte3/carte3.component';
import { Evaluation2Component } from './components/evaluation2/evaluation2.component';
import { Carte4Component } from './components/carte4/carte4.component';
import { Exemple4Component } from './components/exemple4/exemple4.component';
import { Evaluation3Component } from './components/evaluation3/evaluation3.component';
import { Carte5Component } from './components/carte5/carte5.component';
import { Exemple5Component } from './components/exemple5/exemple5.component';
import { Exemple6Component } from './components/exemple6/exemple6.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Carte6Component } from './components/carte6/carte6.component';
import { ListDataComponent } from './components/list-data/list-data.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { Exemple7Component } from './components/exemple7/exemple7.component';
import { TrainingEditorComponent } from './components/training-editor/training-editor.component';
import { Exemple8Component } from './components/exemple8/exemple8.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Exercice1Component,
    Exercice2Component,
    Carte1Component,
    Exemple1Component,
    EvaluationComponent,
    Carte2Component,
    Exemple2Component,
    Exemple3Component,
    Carte3Component,
    Evaluation2Component,
    Carte4Component,
    Exemple4Component,
    Evaluation3Component,
    Carte5Component,
    Exemple5Component,
    Exemple6Component,
    Carte6Component,
    ListDataComponent,
    TableDataComponent,
    Exemple7Component,
    TrainingEditorComponent,
    Exemple8Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
