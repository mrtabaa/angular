import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailsService } from './emails.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { TitleMakerPipe } from './title-maker.pipe';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { BooksComponent } from './books/books.component';
import { BooksPipe } from './pipes/books.pipe';
import { BooksService } from './books.service';
import { LikeComponent } from './like/like.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ZippyComponent } from './zippy/zippy.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MyContactFormComponent } from './my-contact-form/my-contact-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './html-lectures/posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-errors-handlers';
import { MoshFollowersComponent } from './mosh-followers/mosh-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminComponent } from './admin/admin.component';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    SummaryPipe,
    TitleMakerPipe,
    CoursesComponent,
    BooksComponent,
    BooksPipe,
    LikeComponent,
    FavoriteComponent,
    ZippyComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    MyContactFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    MoshFollowersComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:id/:login',
        component: ProfileComponent
      },
      {
        path: 'followers',
        component: MoshFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'archive/:year/:month',
        component: ArchiveComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'no-access',
        component: NoAccessComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [EmailsService, AuthorsService,
    CoursesService, BooksService, PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    OrderService,
    AuthService, AuthGuard, AdminAuthGuard,

    // For creating a mock back-end. You don't need these in a real app.
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
