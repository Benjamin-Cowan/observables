import { Component } from '@angular/core';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private interactionService: InteractionService) {

  }
  greetStudent() {
    this.interactionService.sendMessage('good morning');
  }
  appreciateStudent() { }
}
