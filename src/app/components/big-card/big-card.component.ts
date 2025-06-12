import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
  standalone: true,
  imports: [RouterLink, SafeUrlPipe, CommonModule]
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"
  @Input()
  instagramLink: string | undefined;
  @Input()
  showInstagramContent: boolean = false;
  @Input()
  videoSrc: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
