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

declare type TSettings = {
    startDate: Date;
    period: number;
    taxSystem: any;
    taxInterval: any;
};

// Type compounds
declare type TUser = {
  uid: string;
  name: string;
  email: string;
  projects: TPid[];
}

declare type TProjectMeta = {
  pid: TPid;
  name: string;
  settings: TSettings;
}

declare type TSheet = [][];

declare type TProject = {
  pid: TPid;
  name: string;
  settings: TSettings;
  data: {
    expenses: TSheet;
    revenues: TSheet;
  }
}

