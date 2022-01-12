class UrlConfig {
  constructor() {}

  baseExternalUrl = 'http://localhost:5000';

  appendWithBase = (uri: string) => `${this.baseExternalUrl}${uri}`;

  allHolidays = () => this.appendWithBase('/holidays');
  allRegions = () => this.appendWithBase('/regions');
  allTypes = () => this.appendWithBase('/TypesOfHoliday');
}

export const urlConfig = new UrlConfig();

export default urlConfig;
