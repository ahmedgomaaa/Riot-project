import { Component, OnInit } from '@angular/core';
import { compileInjectable } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';



export class Player {
  constructor(
      public name: string,
      public summonerLevel: number,
      public profileIconId: string,

  
  ) {
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  player : Player;
  finalplayericonrul:string;
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }


    
clicked(value) {
  console.log(value);
  
  this.http.get<any>('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + value + '?api_key=RGAPI-c88d3a9b-1736-4b69-a8b3-8534436f7055'
  ).subscribe(data => {
    this.player = data;
    this.finalplayericonrul = "https://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/" + this.player.profileIconId + ".png"
    console.log(this.player);
  }

  
  );

}
}

