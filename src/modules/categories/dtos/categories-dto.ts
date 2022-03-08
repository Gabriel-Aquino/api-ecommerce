import { BaseDTO } from 'src/shared/utils/base-dto';

export type CategoriesDTO = Omit<BaseDTO, 'description'>;
