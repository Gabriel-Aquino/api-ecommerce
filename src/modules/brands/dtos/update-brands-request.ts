import { BaseDTO } from "src/shared/utils/base-dto";

export interface UpdateBrandsRequest extends Omit<BaseDTO, 'description'> {
  id: string;
}
