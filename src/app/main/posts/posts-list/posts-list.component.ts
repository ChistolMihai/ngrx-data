import { Observable } from 'rxjs';
import { PostService } from '../../../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]>;
  postsLoading$: Observable<boolean>;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.entities$;
    this.postsLoading$ = this.postService.loading$;
  }

  onDeletePost(event: Event, id: string) {
    event.preventDefault();
    if (confirm('Are you sure you want to delete the post')) {
      this.postService.delete(id);
    }
  }
}
