import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-thumbnail',
  templateUrl: './templates/post-thumbnail.html',
  styleUrls: ['./css/style.css'],
})
export class PostThumbnailComponent  {

@Input() postItem:any;
constructor(){}
}