import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
