import { ObjectListDto } from "../ObjectsListDto";

export class ReviewsProfileDto {
    constructor(
        public header: string,
        public object: ObjectListDto,
        public text: string
    ) {}
}