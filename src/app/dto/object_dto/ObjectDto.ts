import { ReviewsObjectDto } from "./ReviewsObjectDto";

export class ObjectDto {
    constructor(
        public id: BigInteger,
        public type: string,
        public name: string,
        public picture: string,
        public author: string,
        public rating: number,
        public reviews: ReviewsObjectDto[]
    ) {}
}