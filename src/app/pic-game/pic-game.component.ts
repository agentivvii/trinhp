import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-pic-game',
  templateUrl: './pic-game.component.html',
  styleUrls: ['./pic-game.component.css']
})
export class PicGameComponent implements OnInit {
  gamepic: string;
  checkif: true;
  messageif: string = "message if on!";
  tabNumber: number =1;
  
  games = [{
    id:1,
    name: 'Lol',
    year: 2014
  },{
    id: 2,
    name: 'gta 5', 
    year: 2014
  },{
    id:3, 
    name: 'csgo',
    year: 2007
  }
]
  constructor() { }

  ngOnInit() {
    this.gamepic = 'this is game picture'
  }
  stclick() {
    this.gamepic = "clicked!!";
  }
  changeTab(tabNumber){
    this.tabNumber = tabNumber;
  }

}
