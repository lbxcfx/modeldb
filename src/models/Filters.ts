export enum PropertyType {
  NUMBER,
  STRING,
  METRIC,
  BOOLEAN
}

export enum ComparisonType {
  MORE,
  LESS
}
export interface IStringFilterData {
  type: PropertyType.STRING;
  name: string;
  value: string;
  invert: boolean;
}

export interface INumberFilterData {
  type: PropertyType.NUMBER;
  name: string;
  value: number;
  invert: boolean;
}

export interface IBooleanFilterData {
  type: PropertyType.BOOLEAN;
  name: string;
  value: boolean;
}

export interface IMetricFilterData {
  type: PropertyType.METRIC;
  name: string;
  value: number;
  comparisonType: ComparisonType;
}

export type IFilterData = IStringFilterData | INumberFilterData | IBooleanFilterData | IMetricFilterData;
