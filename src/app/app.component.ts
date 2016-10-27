import { Component } from '@angular/core';

import {MusicFinderService} from './services/musicFinder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MusicFinderService]
})
export class AppComponent {}
