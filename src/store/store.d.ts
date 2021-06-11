declare namespace Store {
  interface Action {
    type: string;
    value?: any;
  }

  interface State {
    count: number;
    kugouRank: any[];
    uuid: string;
  }
}
