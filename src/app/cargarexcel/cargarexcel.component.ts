import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-cargarexcel',
  templateUrl: './cargarexcel.component.html',
  styleUrls: ['./cargarexcel.component.css'],
  providers: [DataService]
})
export class CargarexcelComponent implements OnInit {

  public rows:Array<any> = [];
  public listitem;
public columns:Array<any> = [
  {title: 'ID', name: 'recno', sort: 'asc'},
  {title: 'Descripcion', name: 'descripcion'},
  {title: 'Tipo de Operacion.', name: 'tipoOperacion', sort: ''}
];
public page:number = 1;
public itemsPerPage:number = 10;
public maxSize:number = 5;
public numPages:number = 1;
public length:number = 0;
// pager object
pager: any = {};

// paged items
pagedItems: any[];

public config:any = {
  paging: true,
  sorting: {columns: this.columns},
  filtering: {filterString: ''},
  className: ['table-striped', 'table-bordered']
};

private data:Array<any> =[];

public constructor(private dataservice:DataService) {
  
  this.length = this.data.length;
}

public ngOnInit():void {
  this.onChangeTable(this.config);
  
}



public changePage(page:any, data:Array<any> = this.data):Array<any> {
  let start = (page.page - 1) * page.itemsPerPage;
  let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
  return data.slice(start, end);
}

public changeSort(data:any, config:any):any {
  if (!config.sorting) {
    return data;
  }

  let columns = this.config.sorting.columns || [];
  let columnName:string = void 0;
  let sort:string = void 0;

  for (let i = 0; i < columns.length; i++) {
    if (columns[i].sort !== '' && columns[i].sort !== false) {
      columnName = columns[i].name;
      sort = columns[i].sort;
    }
  }

  if (!columnName) {
    return data;
  }

  // simple sorting
  return data.sort((previous:any, current:any) => {
    if (previous[columnName] > current[columnName]) {
      return sort === 'desc' ? -1 : 1;
    } else if (previous[columnName] < current[columnName]) {
      return sort === 'asc' ? -1 : 1;
    }
    return 0;
  });
}

public changeFilter(data:any, config:any):any {
  let filteredData:Array<any> = data;
  this.columns.forEach((column:any) => {
    if (column.filtering) {
      filteredData = filteredData.filter((item:any) => {
        return item[column.name].match(column.filtering.filterString);
      });
    }
  });

  if (!config.filtering) {
    return filteredData;
  }

  if (config.filtering.columnName) {
    return filteredData.filter((item:any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));
  }

  let tempArray:Array<any> = [];
  filteredData.forEach((item:any) => {
    let flag = false;
    this.columns.forEach((column:any) => {
      if (item[column.name].toString().match(this.config.filtering.filterString)) {
        flag = true;
      }
    });
    if (flag) {
      tempArray.push(item);
    }
  });
  filteredData = tempArray;

  return filteredData;
}

public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
  if (config.filtering) {
    Object.assign(this.config.filtering, config.filtering);
  }

  if (config.sorting) {
    Object.assign(this.config.sorting, config.sorting);
  }

  this.dataservice.catalogo().subscribe(
      res =>{
        this.listitem = res;
        //this.rows = this.listitem;
        this.data = this.listitem;
        this.length = this.data.length;
        let filteredData = this.changeFilter(this.data, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
        this.setPage(1);
      },
      err =>{
        console.log("There is an error : "+err);
      }
  )
  
}

setPage(page: number) {
  // get pager object from service
  this.pager = this.dataservice.getPager(this.length, page);

  // get current page of items
  this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
public onCellClick(data: any): any {
  console.log(data);
}

}
