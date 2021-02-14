// Type elemental
declare type TPid = string;
declare type TUid = string;
declare type TSheet = [][];

// Interface shapes
declare interface ITaxCountries {
  code: string;
  vat_prefix: string;
  name: string;
  rates: {
      name: string;
      rates: number[];
  }[];
}

declare interface ISettings {
  startDate: any;
  period: number;
  taxSystem: string;
  taxInterval: string;
}

declare interface IUser {
  uid: string;
  name: string;
  email: string;
  projects: TPid[];
}

declare interface IProjectMeta {
  id: TPid;
  name: string;
  settings: ISettings;
}

declare interface IProject extends IProjectMeta {
  data: {
    expenses: TSheet;
    revenues: TSheet;
  }
}