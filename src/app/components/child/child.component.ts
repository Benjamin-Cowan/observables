import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
    this.interactionService.teacherMessage$.subscribe((response: any) => {
      console.log(response)
    })
  }

}
