import {
  Component,
  Injectable,
  OnInit
} from '@angular/core';
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DataTableComponent } from '../webcomponents/datatable/datatable.component';

@Injectable()
export class DataService {
  private url = 'http://cbadmin-tmp-front--dev.candlebets.com/api/trades/table';

  constructor(private http: Http) {}

  static objToSearchParams(values, body: URLSearchParams, parent: string = '') {
    if (values instanceof Object) {
      Object.keys(values).forEach((key, i) => {
        if (values[key] instanceof Array) {
          for (let j =0; j<values[key].length; j++ ) {
            DataService.objToSearchParams(values[key][j], body, key+'['+j+']');
          }
          return;
        }
        if (values[key] instanceof Object) {
          DataService.objToSearchParams(values[key], body, (parent ? parent + '['+key+']' : key));
          return;
        }
        if (parent) {
          body.set(parent+'['+key+']', values[key]);
          return;
        }
        body.set(key, values[key]);
      });
    }
  }

  getData(values) : Observable<any[]> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    const body = new URLSearchParams();
    DataService.objToSearchParams(values, body);
    return this.http.post(this.url, body.toString(), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

@Component ({
  selector: 'trading-report',
  providers: [DataService],
  template: `
    <div class="panel">
      <data-table
        [columns]="columns"
        [data]="data">
      </data-table>
    </div>
  `
})
export class TradingReportComponent implements OnInit {
  data: any = [];
  columns: any;
  error: any;

  constructor(private dataService: DataService) {
    this.dataService.getData({
      draw:1,
      columns: [
        {
          data: 0,
          name: 'server',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 1,
          name: 'id',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 2,
          name: 'name',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 3,
          name: 'game',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 4,
          name: 'balance_start',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 5,
          name: 'amount',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 6,
          name: 'profit',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 7,
          name: 'balance_end',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 8,
          name: 'time_open',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 9,
          name: 'time_close',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 10,
          name: 'change',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        },
        {
          data: 11,
          name: 'game_result',
          searchable: true,
          orderable: true,
          search: {
            value: '',
            regex: false
          }
        }
      ],
      order: [
        {
          column: 8,
          dir: 'desc'
        }
      ],
      start: 0,
      length: 10,
      search: {
        value: '',
        regex: false
      }
    }).subscribe(
      data => {
        this.data = data['data'];
        console.log(this.data);
      },
      error => this.error = <any>error
    );

    this.columns = [
        {
          name: 'server'
        },
        {
          name: 'id'
        },
        {
          name: 'name'
        },
        {
          name: 'game'
        },
        {
            name:"balance_start"
        },
        {
            name:"amount"
        },
        {
            name: "profit"
        },
        {
            name: "balance_end"
        },
        {
            name: "time_open"
        },
        {
            name: "time_close"
        },
        {
            name: "change"
        },
        {
            name: "game_result"
        }
      ];
  }

  ngOnInit() {

  }

  renderFunction(...args) {
    console.log(args);
  }
}
