import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  constructor( private dbzService:dbzService) {
  }

  // This emit the list
  get character ():character[] {
    return [...this.dbzService.characterList];
  }

  // This emit the ID of the items
  removeById (id:string):void {
     this.dbzService.removeById(id);
  }

  addToTheList(character:character) {
    this.dbzService.addToTheList(character);
  }

}
