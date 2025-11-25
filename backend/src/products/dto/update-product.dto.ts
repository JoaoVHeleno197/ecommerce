import { IsNumber, IsString, Min } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsNumber()
  @Min(0)
  price?: number;

  @IsNumber()
  @Min(0)
  stock?: number;

  @IsString()
  type?: string;
}
