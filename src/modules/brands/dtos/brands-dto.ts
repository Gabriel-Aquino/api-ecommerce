import { BaseDTO } from 'src/shared/utils/base-dto';

export type BrandsDTO = Omit<BaseDTO, 'description'>;
