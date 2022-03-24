import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewFormComponent } from './add-review-form/add-review-form.component';
import { LoginComponent } from './login/login.component';
import { ObjectComponent } from './object/object.component';
import { ObjectsListComponent } from './objects-list/objects-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'objects', component: ObjectsListComponent },
  { path: 'object/:id', component: ObjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
