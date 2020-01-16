import { Component, OnInit } from '@angular/core';
import { Album } from '../Album';
import { AlbumService } from '../album.service'



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public albums: Album[] = [];

  constructor(
    private albumService: AlbumService,
  ){
  }
  
  ngOnInit() {
    //this.myName = "Israt"
    //this.albums = this.albumService.getAllAlbums();

    this.albumService.getAllAlbums()
    .subscribe(
      //result => this.albums = <Album[]>result,
      result => this.albums =(<Album[]>result).slice(7,-1),
      err => console.error('Got an error: ' + err),
      () => console.log('Got a complete notification')
    );
  
  }
}
