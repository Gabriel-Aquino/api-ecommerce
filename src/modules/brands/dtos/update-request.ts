import { BaseDTO } from "src/shared/utils/base-dto";

export interface UpdateRequest extends Omit<BaseDTO, 'description'> {
  id: string;
  name: string;
}
