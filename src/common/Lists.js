export const Filters = {
    COLOR:'color',
    SIZE:'size',
    BRAND:'brand',
    PRICE:'price'
}

export const SortOptionsList = [
    {sortName:"Best selling",sortID:1},
    {sortName:"Alphabetically A-Z",sortID:2},
    {sortName:"Alphabetically Z-A",sortID:3},
    {sortName:"Price,low to high",sortID:4},
    {sortName:"Price,high to low",sortID:5},
    {sortName:"Date, old to new",sortID:6},
    {sortName:"Date, new to old",sortID:7}
]

export const FilterOptionsList = [
    {filterOptions:["Black","White","Cyan","Green","Grey","Pink","Gold","Silver","Beige","Blue"],filterType:Filters.COLOR,filterName:'BY COLOR'},
    {filterOptions:["50-70$","7-50$"],filterType:Filters.PRICE,filterName:'BY PRICE'},
    {filterOptions:["L","M","S","XS","Uk 2","Uk 3","Uk 4","XL"],filterType:Filters.SIZE,filterName:'BY SIZE'},
    {filterOptions:["Adika","Zara","HM","Gong","Nike","Adidas"],filterType:Filters.BRAND,filterName:'BY BRAND'},
]

