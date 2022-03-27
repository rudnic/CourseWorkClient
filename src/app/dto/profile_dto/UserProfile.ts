import { ObjectListDto } from "../ObjectsListDto";
import { ReviewsProfileDto } from "./ReviewsProfileDto";
import { UserPhoto } from "./UserPhoto";

export class UserProfile {
    constructor(
      public id: number,
      public email: string,
      public firstname: string,
      public lastname: string,
      public ratingsObjects: ObjectListDto[],
      public reviews: ReviewsProfileDto[],
      public photos: UserPhoto[]
    ) {}
  }