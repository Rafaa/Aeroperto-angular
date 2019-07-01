export class SearchForm {
  public oaciCode: string;
  public hangar: boolean;
  public ats: boolean;
  public fuel: string;
  public customs: boolean;
  public nightFlight: boolean;
  public repair: boolean;
  public hotelRestaurant: boolean;
  public transport: boolean;
  public region: string;
  public city: string;

  constructor() {
    this.oaciCode = '';
  //  this.hangar = false;
  }

  setOaciCode(newCode: string) {
  //  this.oaciCode = newCode;
  }
}
