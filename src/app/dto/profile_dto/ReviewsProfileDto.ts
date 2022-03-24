import { ObjectDto } from "../ObjectsListDto";

export class ReviewsProfileDto {
    constructor(
        public header: string,
        public object: ObjectDto,
        public text: string
    ) {}
}