import { BaseDTO } from "src/shared/utils/base-dto";

export interface UpdateCategoriesRequest extends Omit<BaseDTO, 'description'> {
  id: string;
}
