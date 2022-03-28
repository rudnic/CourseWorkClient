import { ReviewsObjectDto } from "./ReviewsObjectDto";
import { UserDto } from "./UserDto";

export class ObjectDto {
    constructor(
        public id: BigInteger,
        public type: string,
        public name: string,
        public picture: string,
        public author: string,
        public rating: number,
        public ratings: {
            user: UserDto,
            rating: number
        }[],
        public reviews: ReviewsObjectDto[]
    ) {}
}