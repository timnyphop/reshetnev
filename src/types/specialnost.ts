import { IAbiturient } from './abiturient';

export interface ISpecialnost {
  id: number;
  name: string;
  codespecialnosti: string;
  budget: boolean;
  abiturients_id: number;
  abiturients: IAbiturient[];
}
