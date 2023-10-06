import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LectureServiceBase } from "./base/lecture.service.base";

@Injectable()
export class LectureService extends LectureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
