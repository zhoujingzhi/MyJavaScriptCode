import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor() {}
  hero: Hero = {
    id: 1,
    name: 'FirstName'
  };
  ngOnInit() {
  }

}

