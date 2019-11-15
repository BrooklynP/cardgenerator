import { Component, OnInit } from '@angular/core';
import { CardCollectionService } from 'src/app/services/card-collection.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  public characterName = 'Mulan';
  public characterDescription = `Mulan is a loving girl who is always brave and bold.
  When her country needs it most, she disguises herself as a man and goes off to fight.
  She uses courage and determination to win the day.`;
  public characterImageSrc = 'https://exploringyourmind.com/wp-content/uploads/2018/04/mulan1-600x450.jpg';
  public characterColour = '#ffb7c5';

  constructor(public cardsService: CardCollectionService) {

  }

  ngOnInit() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
        const img = document.querySelector('img');
        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
    });
  }

  addCardToCollection() {
    this.cardsService.addCard({
        characterName: this.characterName,
        characterDesc: this.characterDescription,
        characterImgPath: this.characterImageSrc,
        characterColourHex: this.characterColour
    });

    console.log(CardCollectionService.cards);
  }
}
