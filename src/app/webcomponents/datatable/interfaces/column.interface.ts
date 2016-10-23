export interface IColumn {
  name: string;
  data?: number;
  searchable?: boolean;
  orderable?: boolean;
  visible?: boolean;
  search?: {
    value: string;
    regex: string;
  };
}
