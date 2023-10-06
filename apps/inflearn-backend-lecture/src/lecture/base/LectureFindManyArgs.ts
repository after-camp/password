/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LectureWhereInput } from "./LectureWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LectureOrderByInput } from "./LectureOrderByInput";

@ArgsType()
class LectureFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LectureWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LectureWhereInput, { nullable: true })
  @Type(() => LectureWhereInput)
  where?: LectureWhereInput;

  @ApiProperty({
    required: false,
    type: [LectureOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LectureOrderByInput], { nullable: true })
  @Type(() => LectureOrderByInput)
  orderBy?: Array<LectureOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LectureFindManyArgs as LectureFindManyArgs };
