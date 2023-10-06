import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LectureModuleBase } from "./base/lecture.module.base";
import { LectureService } from "./lecture.service";
import { LectureController } from "./lecture.controller";
import { LectureResolver } from "./lecture.resolver";

@Module({
  imports: [LectureModuleBase, forwardRef(() => AuthModule)],
  controllers: [LectureController],
  providers: [LectureService, LectureResolver],
  exports: [LectureService],
})
export class LectureModule {}
