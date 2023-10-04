import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { PagesComponent } from './pages/pages.component';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,

  ],
  exports: [
    AddCharacterComponent,
    PagesComponent,
    ListComponent
  ],
  declarations: [
    AddCharacterComponent,
    PagesComponent,
    ListComponent,

  ],
  providers: [],
})
export class dbzModule { }
