import { IsNumber, IsString } from "class-validator";

export class UpdateItemDto {
  @IsString()
  cartId: string;

  @IsNumber()
  quantity: number;
}
