import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LectureService } from "./lecture.service";
import { LectureControllerBase } from "./base/lecture.controller.base";

@swagger.ApiTags("lectures")
@common.Controller("lectures")
export class LectureController extends LectureControllerBase {
  constructor(
    protected readonly service: LectureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
