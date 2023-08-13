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
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import {
  Comment,
  CommentDocument,
} from "./schemas/comment.schema";
import {
  Track,
  TrackDocument,
} from "./schemas/track.schema";

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {
  }

  async create(
    dto: CreateTrackDto,
    picture,
    audio,
  ): Promise<Track> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    return await this.trackModel.create({
      ...dto,
      picture: picturePath,
      audio: audioPath,
      listens: 0,
    });
  }

  async getAll(
    count = 20,
    offset = 0,
  ): Promise<Track[]> {
    const tracks = await this.trackModel
      .find()
      .skip(+offset)
      .limit(+count);
    return tracks;
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel
      .findById(id)
      .populate("comments");
    return track;
  }

  async search(query: string): Promise<Track[]> {
    const tracks = await this.trackModel.find({
      name: { $regex: new RegExp(query, "i") },
    });
    return tracks;
  }

  async delete(id: ObjectId): Promise<Types.ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track._id;
  }

  async deleteAll(): Promise<void> {
    await this.trackModel.deleteMany({});
  }
  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    track.comments.push(comment);
    await track.save();
    return comment;
  }

  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id);
    track.listens += 1;
    await track.save();
  }
}
