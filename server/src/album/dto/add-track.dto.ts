import { ObjectId } from "mongoose";

export class AddTrackDto {
  readonly trackId: ObjectId;
  readonly albumId: ObjectId;
}
