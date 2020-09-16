import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {
    AppError, BadInputError, NotFoundError,
    UnavailableError, InternalServerError
} from 'src/app/common/app-errors-handlers';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts = [];
    form: any;

    constructor(private service: PostService) { }

    // IMPORTNAT:
    // Always initialize methods in ngOnInit
    ngOnInit() {
        this.service.getAll()
            .subscribe(
                data => {
                    this.posts = data;
                },
                (error: AppError) => {
                    if (error instanceof UnavailableError) {
                        alert('The API link is unavailable');
                    }
                    else { throw error; }
                }
            );
    }

    createTitle(input: HTMLInputElement) {
        const post = { title: input.value, newId: this.posts.length + 1 };
        // add new post on top of the posts array
        this.posts.splice(0, 0, post); // Optimistic Update

        input.value = '';

        this.service.create(post)
            .subscribe(
                newPost => {
                    // add new post on top of the posts array
                    // this.posts.splice(0, 0, newPost); //Pessimistic Upadate
                },
                (error: AppError) => {
                    this.posts.splice(0, 1); // Remove the item, if the above post addition fails.

                    if (error instanceof BadInputError) {
                        alert('Invalid inputs.');

                        // this.form.setErrors(error);
                    }
                    else if (error instanceof InternalServerError) {
                        alert('Server not responding.');
 }
                    else { throw error; }
                }
            );
    }

    updatePostPut(input: HTMLInputElement) {
        // post is the new info
        const post = { userID: '24', title: 'New title', body: 'My new body.' };

        // insert post and replace it with input
        this.service.updatePut(input.id, post)
            .subscribe(
                updatedPost => {
                    console.log(updatedPost);
                },
                (error: AppError) => {
                    if (error instanceof NotFoundError) {
                        alert('The filed is not found.');
                    }
                    else if (error instanceof InternalServerError) {
                        alert('Server not responding.');
 }
                    else { throw error; }
                }
            );
    }

    updatePostPatch(input: HTMLInputElement) {
        const newPostTitle = { title: 'Updated title' };

        this.service.updatePatch(input.id, newPostTitle)
            .subscribe(
                updatedPost => {
                    console.log(updatedPost);
                },
                (error: AppError) => {
                    if (error instanceof NotFoundError) {
                        alert('The filed is not found.');
                    }
                    else if (error instanceof InternalServerError) {
                        alert('Server not responding.');
 }
                    else { throw error; }
                }
            );
    }

    deletePost(input: HTMLInputElement) {
        const index = this.posts.indexOf(input);
        this.posts.splice(index, 1); // Pasimistic Update approach
        console.log(input);

        this.service.delete(input.id)
            .subscribe(
                null // this object will be empty so function has no parameter. So change it to null
                ,
                (error: AppError) => {
                    this.posts.splice(index, 0, input); // put the removed item back to array if there is an error.

                    if (error instanceof NotFoundError) {
                        alert('This item is already deleted.');
                    }
                    else if (error instanceof InternalServerError) {
                        alert('Server not responding.');
 }
                    else { throw error; }
                }
            );
    }
}
