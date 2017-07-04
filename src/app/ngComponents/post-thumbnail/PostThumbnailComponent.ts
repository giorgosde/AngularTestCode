import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListService } from '../../ngServices/ngServices';

@Component({
  selector: 'post-thumbnail',
  templateUrl: './templates/post-thumbnail.html',
  styleUrls: ['./css/style.css'],
})
export class PostThumbnailComponent  {

@Input() postItem:any;
postComments:any;
isCommentVisible:boolean=false;

constructor(public listService:ListService){}

displayComments(postId:any){
  this.isCommentVisible? this.isCommentVisible=false : this.isCommentVisible=true;
  this.listService.getCommentsByPostId(postId).subscribe(res => this.postComments = res);
}
}
