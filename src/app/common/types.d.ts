// Type elemental
declare type TPid = string;


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

