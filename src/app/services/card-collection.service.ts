import { Injectable } from '@angular/core';
import { Card } from 'src/app/models/card';

@Injectable({
  providedIn: 'root'
})
export class CardCollectionService {

  public cards: Array<Card> = [];

  constructor() { }

  public addCard(card: Card) {
    this.cards.push(card);

  }

  public removeCard(index: number) {
    this.cards.splice(index, 1);
  }

}
