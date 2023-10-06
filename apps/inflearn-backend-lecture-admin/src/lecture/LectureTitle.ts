import { Lecture as TLecture } from "../api/lecture/Lecture";

export const LECTURE_TITLE_FIELD = "title";

export const LectureTitle = (record: TLecture): string => {
  return record.title?.toString() || String(record.id);
};
