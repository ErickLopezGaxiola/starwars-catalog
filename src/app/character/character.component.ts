import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  character?: any;
  homeworldSelected = false;
  relatedSelected = false;

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.characterService.getCharacter(id)
      .subscribe(data => this.character = data);
  }

  onHomeworldSelected(): void{
    this.homeworldSelected = true;
    this.relatedSelected = false;
  }

  onRelatedSelected(): void{
    this.homeworldSelected = false;
    this.relatedSelected = true;
  }
}
