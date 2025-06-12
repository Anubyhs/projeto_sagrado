import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  cardDescription:string = ""

  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
