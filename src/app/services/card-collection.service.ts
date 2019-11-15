import { Injectable } from '@angular/core';
import { Card } from 'src/app/models/card';

@Injectable({
  providedIn: 'root'
})
export class CardCollectionService {

  public static cards: Array<Card> = [];

  constructor() { }

  public addCard(card: Card) {
    CardCollectionService.cards.push(card);
  }

  public removeCard(index: number) {
    CardCollectionService.cards.splice(index, 1);
  }

}
