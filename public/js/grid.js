function autoSizeAll() {
  var allColumnIds = [];
  gridOptions.columnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
  });
  gridOptions.columnApi.autoSizeColumns(allColumnIds);
}


var columnDefs = [
  {
    headerName: "Name",
    field: "name",
    minWidth: 150,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agTextColumnFilter',
    floatingFilterComponentParams: {
      suppressFilterButton: true
    }
  }, {
    headerName: "Rarity",
    field: "rarity",
    minWidth: 110,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agTextColumnFilter',
    floatingFilterComponentParams: {
      suppressFilterButton: true
    }
  }, {
    headerName: "Type",
    field: "type",
    minWidth: 110,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agTextColumnFilter',
    floatingFilterComponentParams: {
      suppressFilterButton: true
    }
  }, {
    headerName: "FP",
    field: "fp",
    minWidth: 110,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agNumberColumnFilter',
    filterParams: {
      defaultOption: "greaterThan"
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true
    }
  }, {
    headerName: "ACC",
    field: "acc",
    minWidth: 110,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agNumberColumnFilter',
    filterParams: {
      defaultOption: "greaterThan"
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true
    }
  }, {
    headerName: "EVA",
    field: "eva",
    minWidth: 110,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agNumberColumnFilter',
    filterParams: {
      defaultOption: "greaterThan"
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true
    }
  }, {
    headerName: "ROF",
    field: "rof",
    minWidth: 110,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agNumberColumnFilter',
    filterParams: {
      defaultOption: "greaterThan"
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true
    }
  }, {
    headerName: "HP",
    field: "hp",
    minWidth: 110,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agNumberColumnFilter',
    filterParams: {
      defaultOption: "greaterThan"
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true
    }
  }, {
    headerName: "Skill 1",
    field: "skill1",
    minWidth: 100,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agTextColumnFilter',
    floatingFilterComponentParams: {
      suppressFilterButton: true
    },
    cellClass: 'cell-wrap-text'
  }, {
    headerName: "Skill 2",
    field: "skill2",
    minWidth: 100,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agTextColumnFilter',
    floatingFilterComponentParams: {
      suppressFilterButton: true
    },
    cellClass: 'cell-wrap-text'
  },

];
var rowData = [
  {
    name: "IWS 2000",
    rarity: "5★",
    type: "RF",
    fp: 162,
    acc: 78,
    eva: 29,
    rof: 32,
    hp: 440,
    skill1: "Increases IWS-2000's damage by 180%, decreases her rate of fire by 35% for 10.0 seconds.",
    skill2: ""
  },
];
var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  enableSorting: true,
  enableFilter: true,
  multiSortKey: true,
  floatingFilter: true,
  rowSelection: "single"
};

var grid = document.querySelector('#dollGrid');
new agGrid.Grid(grid, gridOptions);
autoSizeAll();
window.addEventListener("resize", autoSizeAll());