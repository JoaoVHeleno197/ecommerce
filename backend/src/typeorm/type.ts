import { ColumnType } from 'typeorm';

const enumType: ColumnType = 'enum';
const timestamp: ColumnType = 'timestamptz';
const polygon: ColumnType = 'geometry';
const json: ColumnType = 'jsonb';

export const dbTypes = {
  enumType,
  timestamp,
  polygon,
  json,
};
