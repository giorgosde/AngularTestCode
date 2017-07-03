import { Component } from '@angular/core';
import { ListService } from '../../ngServices/ngServices';

@Component({
  selector: 'post-stage',
  templateUrl: './templates/post-stage.html',
  styleUrls: ['./css/style.css'],
})
export class PostStageComponent  {
option:any;
users:any;
selectedValue:any;
posts:any;
visiblePosts:any;
postComments:any;

constructor(public listService:ListService){
  this.listService.getUsers().subscribe(res => this.users = res);

  this.listService.getPosts().subscribe(res => this.posts = this.visiblePosts = res);
}

filterPostsByUser(userId:any){
    var filteredPosts = this.posts.filter((x:any) => {
     return x.userId==userId; 
    });
    this.visiblePosts=filteredPosts;
}

initializeView(){
  this.visiblePosts = this.posts;
  this.selectedValue='';
}

displayComments(postId:any){
  this.listService.getCommentsByPostId(postId).subscribe(res => this.postComments = res);
}

}