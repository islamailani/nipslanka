import { IBaseEntity } from './i-base.entity';
import { IBaseNamedEntity } from './i-base-named.entity';
import { ICountry } from './i-country';
import { ICity } from './i-city';

export interface IAddress extends IBaseEntity {
  addressLine?: string;
  zipCode?: string;
  city?: ICity;
  country?: ICountry;
}
