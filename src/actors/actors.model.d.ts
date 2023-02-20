import { Option } from "react-bootstrap-typeahead/types/types";

export interface actorCreationDTO {
  name: string;
  dateOfBirth?: Date;
  picture?: File;
  pictureURL?: string;
  biography?: string;
}

export interface actorMovieDTO extends Option {
  id: number;
  name: string;
  character: string;
  picture: string;
}
