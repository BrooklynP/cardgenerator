import { Component, OnInit } from '@angular/core';
import { CardCollectionService } from 'src/app/services/card-collection.service';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  public selectedCard: Card = {
    characterName: 'Mulan',
    characterDesc: `Mulan is a loving girl who is always brave and bold.
    When her country needs it most, she disguises herself as a man and goes off to fight.
    She uses courage and determination to win the day.`,
    characterImgPath: 'https://exploringyourmind.com/wp-content/uploads/2018/04/mulan1-600x450.jpg',
    characterColourHex: '#ffb7c5'
  };
  public selectedCardIndex = 0;

  constructor(public cardsService: CardCollectionService) {

  }

  ngOnInit() {
    // using event listener as couldn't figure out a way to bind the file path from the upload as it creats a blob not a real path
    document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
        const img = document.querySelector('img');
        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
    });

    // Using event listener as couldn't use object as value for select element, hence couldn't bind
    (document.getElementById('cardSelect') as HTMLInputElement).addEventListener('change', (evt) => {
      this.selectedCard = this.cardsService.cards[(document.getElementById('cardSelect') as HTMLInputElement).value];
    });
  }

  addCardToCollection() {
    this.cardsService.addCard({
        characterName: this.selectedCard.characterName,
        characterDesc: this.selectedCard.characterDesc,
        characterImgPath: this.selectedCard.characterImgPath,
        characterColourHex: this.selectedCard.characterColourHex
    });
  }
}
