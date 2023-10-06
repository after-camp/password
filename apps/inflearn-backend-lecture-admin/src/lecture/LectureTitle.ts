import { Lecture as TLecture } from "../api/lecture/Lecture";

export const LECTURE_TITLE_FIELD = "id";

export const LectureTitle = (record: TLecture): string => {
  return record.id?.toString() || String(record.id);
};
