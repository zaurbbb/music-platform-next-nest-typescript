import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { AlbumModule } from "./album/album.module";

import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot("mongodb+srv://zaur:zaur@cluster0.4udo8gf.mongodb.net/?retryWrites=true&w=majority"),
    TrackModule,
    FileModule,
    AlbumModule,
  ],
})
export class AppModule {

}
