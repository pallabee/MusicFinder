import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Artist} from '../Artist';
import {Album} from '../Album';
import {MusicFinderService} from '../services/musicFinder.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:Artist[];
  album:Album[];

  constructor(private _musicFinderService: MusicFinderService,
    private _route:ActivatedRoute) {
     }

  ngOnInit() {
    this._route.params
        .map(params=> params['id'])
        .subscribe((id)=>{
          this._musicFinderService.getArtist(id)
            .subscribe(artist => {
              this.artist = artist;
            })
        });
  }
}
