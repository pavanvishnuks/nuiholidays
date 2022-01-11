class UrlConfig {
  constructor() {}

  baseExternalUrl = 'http://localhost:5000';

  appendWithBase = (uri: string) => `${this.baseExternalUrl}${uri}`;

  allHolidays = () => this.appendWithBase('/holidays');
}

export const urlConfig = new UrlConfig();

export default urlConfig;
