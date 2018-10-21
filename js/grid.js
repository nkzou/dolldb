function autoSizeAll() {
  var allColumnIds = [];
  gridOptions.columnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
  });
  gridOptions.columnApi.autoSizeColumns(allColumnIds);
  gridOptions.api.resetRowHeights();
}


var columnDefs = [
  {
    headerName: "Name",
    field: "name",
    minWidth: 110,
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
    floatingFilterComponent:'raritydropdown',
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
    floatingFilterComponent:'typedropdown',
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
    minWidth: 300,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agTextColumnFilter',
    floatingFilterComponentParams: {
      suppressFilterButton: true
    },
    cellClass: 'cell-wrap-text',
    autoHeight: true
  }, {
    headerName: "Skill 2",
    field: "skill2",
    minWidth: 300,
    suppressMenu: true,
    suppressResize: true,
    suppressMovable: true,
    filter: 'agTextColumnFilter',
    floatingFilterComponentParams: {
      suppressFilterButton: true
    },
    cellClass: 'cell-wrap-text',
    autoHeight: true
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
  {
    name: "PKP",
    rarity: "5★",
    type: "MG",
    fp: 120,
    acc: 30,
    eva: 29,
    rof: 150,
    hp: 201,
    skill1: "Something something 20% chance to crit.",
    skill2: ""
  },
  {
    name: "ST AR-15",
    rarity: "4★",
    type: "AR",
    fp: 120,
    acc: 30,
    eva: 29,
    rof: 150,
    hp: 201,
    skill1: "RoF buff something.",
    skill2: ""
  },
  {
    name: "UMP45",
    rarity: "4★",
    type: "SMG",
    fp: 120,
    acc: 30,
    eva: 29,
    rof: 150,
    hp: 201,
    skill1: "Decreases enemy damage or accuracy or something.",
    skill2: ""
  },
  {
    name: "M37",
    rarity: "4★",
    type: "SG",
    fp: 120,
    acc: 30,
    eva: 29,
    rof: 150,
    hp: 201,
    skill1: "Hits a target, knocks them back i think.",
    skill2: ""
  },
];

function generateDropdownFloatingFilter(htmlstring, modelmatchtype) {
  function DropdownFloatingFilter() {}

  DropdownFloatingFilter.prototype.init = function (params) {
    this.onFloatingFilterChanged = params.onFloatingFilterChanged;
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = htmlstring;
    this.currentValue = null;
    this.eFilterInput = this.eGui.querySelector('select');
    var that = this;

    function onInputBoxChanged() {
      that.currentValue = that.eFilterInput.options[that.eFilterInput.selectedIndex].value;
      if (that.currentValue === '') {
        that.onFloatingFilterChanged(null);
        return;
      }
      console.log(that.currentValue);
      that.onFloatingFilterChanged({
        model: {
          type: modelmatchtype,
          filter: that.currentValue
        }
      });
    }
    this.eFilterInput.addEventListener('change', onInputBoxChanged);
  };

  DropdownFloatingFilter.prototype.onParentModelChanged = function (parentModel) {
    /* Runs when the parent filter changes, to update the floating filter
    // We don't need this because we won't allow anything to change the parent model.
    if (!parentModel) {
      this.eFilterInput.value = '';
      this.currentValue = null;
    } else {
      this.eFilterInput.value = parentModel.filter + '';
      this.currentValue = parentModel.filter;
    }*/
  };

  DropdownFloatingFilter.prototype.getGui = function () {
    return this.eGui;
  };

  return DropdownFloatingFilter;
}

const raritydropdown = '<select id="rdrop" style="width:100%;">\
  <option value="" selected="selected">All</option>\
  <option value="2">2★★</option>\
  <option value="3">3★★★</option>\
  <option value="4">4★★★★</option>\
  <option value="5">5★★★★★</option>\
  <option value="7">Extra★</option>\
  </select>'
const typedropdown = '<select id="tdrop" style="width:100%;">\
  <option value="" selected="selected">All</option>\
  <option value="ar">AR</option>\
  <option value="rf">RF</option>\
  <option value="mg">MG</option>\
  <option value="hg">HG</option>\
  <option value="smg">SMG</option>\
  <option value="sg">SG</option>\
  </select>'
var gridOptions = {
  components:{
    raritydropdown: generateDropdownFloatingFilter(raritydropdown, 'contains'),
    typedropdown: generateDropdownFloatingFilter(typedropdown, 'equals')
  },
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
window.addEventListener("resize", gridOptions.api.sizeColumnsToFit());