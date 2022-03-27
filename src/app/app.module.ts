import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignupComponent } from './signup/signup.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ObjectsListComponent } from './objects-list/objects-list.component';
import { ObjectComponent } from './object/object.component';
import { AddReviewFormComponent } from './add-review-form/add-review-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfileReviewsComponent } from './profile-reviews/profile-reviews.component'; 
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { ObjectReviewsComponent } from './object-reviews/object-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ObjectsListComponent,
    ObjectComponent,
    AddReviewFormComponent,
    ProfileReviewsComponent,
    UploadFileComponent,
    ObjectReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    UcWidgetModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
