import { LectureWhereInput } from "./LectureWhereInput";
import { LectureOrderByInput } from "./LectureOrderByInput";

export type LectureFindManyArgs = {
  where?: LectureWhereInput;
  orderBy?: Array<LectureOrderByInput>;
  skip?: number;
  take?: number;
};
