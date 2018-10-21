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
    // Runs when the parent filter changes, to update the floating filter
    // We don't need this because we won't allow anything to change the parent model.
    /*
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

var rowData = [];
const gfcore = window.gfcore;
var dolls = gfcore.dolls;
dolls.forEach(function(doll){
  var s1 = "";
  var s2 = "";
  try {
    s1 = doll.skill1.codename;
    s2 = doll.skill2.codename;
  } catch (err){}
  var tmp = {
    name:doll.codename,
    rarity:doll.rank+"★",
    type:doll.type.toUpperCase(),
    fp:doll.stats.pow,
    acc:doll.stats.hit,
    eva:doll.stats.dodge,
    rof:doll.stats.rate,
    hp:doll.stats.hp,
    skill1:s1,
    skill2:s2
  };
  rowData.push(tmp);
});
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