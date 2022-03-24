import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {MatDialog} from '@angular/material/dialog';
import { AddReviewFormComponent } from '../add-review-form/add-review-form.component';
import { UserProfile } from '../dto/profile_dto/UserProfile';
// import { UserProfile } from '../dto/profile_dto/UserProfile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentProfile: UserProfile;
  isClickedAddReviewButton: boolean = false;

  constructor(private profileService: ProfileService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.profileService.getProfile()
      .subscribe(response => {
        this.currentProfile = response
      })
  }

  isUsersProfile(): boolean {
    if (Number(sessionStorage.getItem("id")) === this.currentProfile.id) {
      return true;
    }
    return false;
  }

}
