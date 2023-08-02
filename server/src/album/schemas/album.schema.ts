import {
  Prop,
  Schema,
  SchemaFactory,
} from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { HydratedDocument } from "mongoose";
import { Track } from "../../track/schemas/track.schema";

const ObjectId = mongoose.Schema.Types.ObjectId;
export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  picture: string;

  @Prop({
    type: [
      {
        type: ObjectId,
        ref: "Track",
      },
    ],
  })
  tracks: Track[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
