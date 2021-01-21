// Type elemental
declare type TPid = string;
declare type TTaxCountries = {
  code: string;
  vat_prefix: string;
  name: string;
  rates: {
      name: string;
      rates: number[];
  }[];
}[]

// Type compounds
declare type TUser = {
  uid: string;
  name: string;
  email: string;
  projects: TPid[];
}

declare type TSheet = [][];

declare type TProject = {
  pid: TPid;
  name: string;
  settings: {
    startDate: Date;
    period: number;
    taxSystem: any;
    taxInterval: any;
  };
  data: {
    expenses: TSheet;
    revenues: TSheet;
  }
}

