import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Artist} from '../Artist';
import {Album} from '../Album';
import {MusicFinderService} from '../services/musicFinder.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id:string;

  album:Album[];

  constructor(private _musicFinderService: MusicFinderService,
    private _route:ActivatedRoute) {
     }

  ngOnInit() {
    this._route.params
        .map(params=> params['id'])
        .subscribe((id)=>{
          this._musicFinderService.getAlbum(id)
            .subscribe(album => {
              this.album = album;
            })
        });
  }
}