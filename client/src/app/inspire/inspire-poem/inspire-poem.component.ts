import { Component, OnInit } from '@angular/core';
import { Poem } from 'src/app/models/inspire';
import { InspirationService } from 'src/app/services/inspiration.service';

@Component({
  selector: 'app-inspire-poem',
  templateUrl: './inspire-poem.component.html',
  styleUrls: ['./inspire-poem.component.scss']
})
export class InspirePoemComponent implements OnInit{

  poem!: Poem[]
  
  constructor(private inspireSvc: InspirationService) {}

  ngOnInit(): void {
      this.getPoem()
  }

  getPoem() {
    this.inspireSvc.getPoem().subscribe(data => {
      this.poem = data
    })
  }



}
