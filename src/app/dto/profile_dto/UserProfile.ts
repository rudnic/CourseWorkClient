import { ObjectDto } from "../ObjectsListDto";
import { ReviewsProfileDto } from "./ReviewsProfileDto";

export class UserProfile {
    constructor(
      public id: number,
      public email: string,
      public firstname: string,
      public lastname: string,
      public ratingsObjects: Object[],
      public reviews: ReviewsProfileDto[]
    ) {}
  }