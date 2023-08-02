import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  Model,
  ObjectId,
  Types,
} from "mongoose";
import {
  FileService,
  FileType,
} from "../file/file.service";
import {
  Track,
  TrackDocument,
} from "../track/schemas/track.schema";
import { AddTrackDto } from "./dto/add-track.dto";
import { CreateAlbumDto } from "./dto/create-album.dto";
import {
  Album,
  AlbumDocument,
} from "./schemas/album.schema";

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    private fileService: FileService,
  ) {
  }

  async create(
    dto: CreateAlbumDto,
    picture,
  ): Promise<Album> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    return await this.albumModel.create({
      ...dto,
      picture: picturePath,
    });
  }

  async getAll(
    count = 20,
    offset = 0,
  ): Promise<Album[]> {
    const albums = await this.albumModel
      .find()
      .skip(+offset)
      .limit(+count);
    return albums;
  }

  async getOne(id: ObjectId): Promise<Album> {
    const album = this.albumModel
      .findById(id)
      .populate("tracks");
    return album;
  }

  async addTrack(dto: AddTrackDto): Promise<Track> {
    const album = await this.albumModel.findById(dto.albumId);
    const track = await this.trackModel.findById(dto.trackId);
    album.tracks.push(track);
    await album.save();
    return track;
  }

  async delete(id: ObjectId): Promise<Types.ObjectId> {
    const album = await this.albumModel.findByIdAndDelete(id);
    return album._id;
  }
}
