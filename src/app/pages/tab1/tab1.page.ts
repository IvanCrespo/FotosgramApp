import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];
  habilitado = true;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.siguientes();
    this.postsService.nuevoPost
    .subscribe(post => {
      this.posts.unshift(post);
    });
  }

  recargar(event) {
    this.siguientes(event, true);
    this.habilitado = true;
    this.posts = [];
  }

  siguientes(event?, pull: boolean = false) {
    this.postsService.getPosts(pull).subscribe(res => {
      this.posts.push(...res.posts);

      if (event) {
        event.target.complete();

        if (res.posts.length === 0) {
          this.habilitado = false;
          /* event.target.disabled = true; */
        }
      }
    });
  }
}
