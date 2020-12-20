

export const TAX_VAT_API = 'https://api.vatlookup.eu/rates/'
export const TAX_COUNTRY_CODES_API = 'http://api.vatlookup.eu/countrylist/'
export const TAX_COUNTRY_CODES = [
  {"code":"AT","vat_prefix":"AT","name":"Austria"},
  {"code":"BE","vat_prefix":"BE","name":"Belgium"},
  {"code":"BG","vat_prefix":"BG","name":"Bulgaria"},
  {"code":"CY","vat_prefix":"CY","name":"Cyprus"},
  {"code":"CZ","vat_prefix":"CZ","name":"Czech Republic"},
  {"code":"DE","vat_prefix":"DE","name":"Germany"},
  {"code":"DK","vat_prefix":"DK","name":"Denmark"},
  {"code":"EE","vat_prefix":"EE","name":"Estonia"},
  {"code":"EL","vat_prefix":"EL","name":"Greece"},
  {"code":"ES","vat_prefix":"ES","name":"Spain"},
  {"code":"FI","vat_prefix":"FI","name":"Finland"},
  {"code":"FR","vat_prefix":"FR","name":"France"},
  {"code":"HR","vat_prefix":"HR","name":"Croatia"},
  {"code":"HU","vat_prefix":"HU","name":"Hungary"},
  {"code":"IE","vat_prefix":"IE","name":"Ireland"},
  {"code":"IT","vat_prefix":"IT","name":"Italy"},
  {"code":"LT","vat_prefix":"LT","name":"Lithuania"},
  {"code":"LU","vat_prefix":"LU","name":"Luxembourg"},
  {"code":"LV","vat_prefix":"LV","name":"Latvia"},
  {"code":"MT","vat_prefix":"MT","name":"Malta"},
  {"code":"NL","vat_prefix":"NL","name":"Netherlands"},
  {"code":"PL","vat_prefix":"PL","name":"Poland"},
  {"code":"PT","vat_prefix":"PT","name":"Portugal"},
  {"code":"RO","vat_prefix":"RO","name":"Romania"},
  {"code":"SE","vat_prefix":"SE","name":"Sweden"},
  {"code":"SI","vat_prefix":"SI","name":"Slovenia"},
  {"code":"SK","vat_prefix":"SK","name":"Slovakia"},
  {"code":"UK","vat_prefix":"GB","name":"United Kingdom"}
]

export const TAX_RATES = [
  {
    "code":"AT",
    "vat_prefix":"AT",
    "name":"Austria",
    "rates":[{"name":"Super Reduced","rates":[]},{"name":"Reduced","rates":[10,13]},{"name":"Standard","rates":[20]},{"name":"Increased","rates":[]},{"name":"Parking","rates":[13]}]
  },
  {
    "code":"BE",
    "vat_prefix":"BE",
    "name":"Belgium",
    "rates":[{"name":"Super Reduced","rates":[]},{"name":"Reduced","rates":[6,12]},{"name":"Standard","rates":[21]},{"name":"Increased","rates":[]},{"name":"Parking","rates":[12]}]
  },
  {
    "code":"DE",
    "vat_prefix":"DE",
    "name":"Germany",
    "rates":[{"name":"Super Reduced","rates":[]},{"name":"Reduced","rates":[7]},{"name":"Standard","rates":[19]},{"name":"Increased","rates":[]},{"name":"Parking","rates":[]}]
  },
  {
    "code":"PT",
    "vat_prefix":"PT",
    "name":"Portugal",
    "rates":[{"name":"Super Reduced","rates":[]},{"name":"Reduced","rates":[6,13]},{"name":"Standard","rates":[23]},{"name":"Increased","rates":[]},{"name":"Parking","rates":[13]}]
  }
]