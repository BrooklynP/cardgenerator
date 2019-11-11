import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  constructor() {
    window.addEventListener('load', () => {
      document.querySelector('input[type="file"]').addEventListener('change', function() {
          if (this.files && this.files[0]) {
              const img = document.querySelector('img');  // $('img')[0]
              img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          }
      });
    });
   }

  ngOnInit() {
  }
}
