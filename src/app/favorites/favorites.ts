import {EntitiesTypeEnum} from '../shared/enums/entities-types-enum';

export interface Favorites {
  name: string;
  type: EntitiesTypeEnum;
  url: string;
}
