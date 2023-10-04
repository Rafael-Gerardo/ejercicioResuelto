import { Component, EventEmitter, Output } from '@angular/core';
import {v4 as uuii} from "uuid";
import { character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  public character:character = {
    id:uuii(),
    name:"",
    power: 0
  }

  @Output()
  public emitCharacterFromTheForm:EventEmitter<character> = new EventEmitter();

  emitChatacterToTheList() {
    if (this.character.name.length===0) return;
    this.character.id = uuii();
    this.emitCharacterFromTheForm.emit(this.character);
    this.character= {name:"",power:0};
  }
}
