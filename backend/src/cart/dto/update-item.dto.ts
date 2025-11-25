import { IsNumber, IsString } from "class-validator";

export class UpdateItemDto {
  @IsNumber()
  quantity: number;
}
