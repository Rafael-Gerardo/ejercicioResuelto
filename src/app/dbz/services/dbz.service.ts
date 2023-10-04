import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class dbzService {
  constructor() { }

  public characterList:character[] = [{
    id: uuid(),
    name: "Goku",
    power: 10
  }, {
    id: uuid(),
    name: "Trumks",
    power:7
  },{
    id: uuid(),
    name: "Picoro",
    power: 3
  },
]

  addToTheList(character:character) {
    this.characterList.push(character);
  }

  removeById(id:string) {
    this.characterList = this.characterList.filter(character => character.id !== id);
  }
}
