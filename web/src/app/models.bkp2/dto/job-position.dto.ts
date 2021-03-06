import { IJobPosition } from "../interfaces"
import { VacancyDto } from "./vacancy.dto"
import { IsOptional } from "class-validator"
import { Type } from "class-transformer"

export class JobPositionDto implements IJobPosition {
  @IsOptional()
  id: number

  @IsOptional()
  name: string

  @IsOptional()
  code: string

  @IsOptional()
  description?: string

  @IsOptional()
  skills?: string

  @IsOptional()
  experience?: string

  @IsOptional()
  qualifications?: string

  @IsOptional()
  @Type(() => VacancyDto)
  vacancies?: VacancyDto[]
}
