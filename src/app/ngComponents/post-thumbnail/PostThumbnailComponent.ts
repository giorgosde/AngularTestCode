import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-thumbnail',
  templateUrl: './templates/post-thumbnail.html',
  styleUrls: ['./css/style.css'],
})
export class PostThumbnailComponent  {

@Input() postItem:any;
@Output() onCommentBtnClick = new EventEmitter();

constructor(){}

sendPostId(id:any){
  this.onCommentBtnClick.emit(id);
}

}