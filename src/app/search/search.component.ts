import { Component } from '@angular/core';
import {MusicFinderService} from '../services/musicFinder.service';
import {Artist} from '../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];
  constructor(private _musicFinderService: MusicFinderService) {

  }
  searchMusic() {
    this._musicFinderService.searchMusic(this.searchStr).subscribe(res =>{
      this.searchRes = res.artists.items;
    });
  }


}
