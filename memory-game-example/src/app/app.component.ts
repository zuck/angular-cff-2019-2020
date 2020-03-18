import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memory-game';

  card1 = null;
  card2 = null;
  playing = true;
  msgToBeShown = '';
  showBtn = false;
  images = [
    'https://picsum.photos/id/100/100/100',
    'https://picsum.photos/id/1000/100/100',
    'https://picsum.photos/id/200/100/100',
    'https://picsum.photos/id/10/100/100',
    'https://picsum.photos/id/200/100/100',
    'https://picsum.photos/id/30/100/100',
    'https://picsum.photos/id/50/100/100',
    'https://picsum.photos/id/1000/100/100',
    'https://picsum.photos/id/50/100/100',
    'https://picsum.photos/id/10/100/100',
    'https://picsum.photos/id/30/100/100',
    'https://picsum.photos/id/100/100/100',
  ]

  showMsg(msg) {
    this.msgToBeShown = msg;
  }

  clickOnCard(idx) {
    if (this.card1 === null) {
      this.card1 = idx;
    }
    else if (this.card2 === null) {
      this.card2 = idx;
    }

    if (
      this.playing &&
      this.card1 !== null &&
      this.card2 !== null
    ) {
      this.playing = false;
      setTimeout(() => {
        const img1 = this.images[this.card1];
        const img2 = this.images[this.card2];
        if (img1 === img2) {
          alert('Matched!')
        }
        this.card1 = null;
        this.card2 = null;
        this.playing = true;
      }, 500);
    }
  }

  isFlipped(idx) {
    return idx === this.card1 || idx === this.card2
  }
}
