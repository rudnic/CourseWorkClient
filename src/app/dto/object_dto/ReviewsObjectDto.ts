import { UserDto } from "./UserDto";

export class ReviewsObjectDto {
    constructor(
        public header: string,
        public text: string,
        public user: UserDto
    ) {}
}