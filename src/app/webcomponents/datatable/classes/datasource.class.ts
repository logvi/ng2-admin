

interface DataSourceOptions {
  rowsPerPage?: number;
  currentPage?: number;
  order?: {
    column: number;
    dir: string;
  };
}

export class DataSource {
  static ORDER_ASC = 'asc';
  static ORDER_DESC = 'desc';

  private options: DataSourceOptions = {
    rowsPerPage: 15,
    currentPage: 1,
    order: {
      column: 0,
      dir: DataSource.ORDER_ASC
    }
  };
  private resultData: Array<any>;

  constructor(
    private data: Array<any>,
    options?: DataSourceOptions
  ) {
    this.resultData = this.data.slice();
    if (options) this.options = Object.assign({}, this.options, options);
  }

  orderBy(column, dir?: string) {
    let currentOrder = this.getOption('order'),
        orderDirection = dir || DataSource.ORDER_ASC;
    if (currentOrder) {
      orderDirection = currentOrder.column !== column ? dir || DataSource.ORDER_ASC : dir || this._toggleSortDirection(currentOrder.dir);
    }
    this.setOptions({
      order: {
        column: column,
        dir: orderDirection
      }
    });
    this._sort(column, orderDirection);
  }

  setFilter(args: any) {
    this.resultData = this.data.filter((element, index, array) => {
        return element[args.column] === args.search;
    });
  }

  setOptions(options: DataSourceOptions) {
    this.options = Object.assign({}, this.options, options);
  }

  getOption(option) {
    return this.options[option];
  }

  getData() {
    return this.resultData;
  }

  getTotalLength() {
    return this.data.length;
  }

  changeData() {
    this.resultData = [
      [1,6,'asd'],
      [0,1,'zzzzzz'],
      [3,4,'sdgsg']
    ]
  }

  private _sort(column, dir) {
    this.resultData.sort((a,b) => {
      switch (dir) {
        case DataSource.ORDER_ASC:
          return a[column] - b[column];
        case DataSource.ORDER_DESC:
          return b[column] - a[column];
        default:
          return a[column] - b[column];
      }
    });
  }

  private _toggleSortDirection(dir) {
    if (dir === DataSource.ORDER_ASC) return DataSource.ORDER_DESC;
    return DataSource.ORDER_ASC;
  }

}
