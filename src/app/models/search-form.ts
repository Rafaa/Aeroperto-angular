export class SearchForm {
  public oaciCode: string;
  public hangar: boolean;
  public ats: boolean;
  public fuel: string;
  public customs: boolean;
  public nightFlight: boolean;
  public repair: boolean;
  public hotelRestaurant: boolean;
  public Transport: boolean;
  public Region: string;
  public city: string;

  constructor() {
    this.oaciCode = 'GGG';
    this.hangar = false;
  }
}
