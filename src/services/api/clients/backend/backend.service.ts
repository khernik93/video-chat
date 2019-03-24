import { Injectable } from "@angular/core";
import { ClientServiceI } from '../interfaces/clientService.interface';

let ROUTES: any = {
  joinRoom: '/joinRoom'
};

@Injectable()
export class BackendService implements ClientServiceI {

  headers: any;
  routes: any;

  private apiKeyHeader = 'X-Api-Key';
  private apiBasePath = 'http://localhost:3011/api';

  constructor() {
    this.routes = ROUTES;
    this.initializeHeaders();
  }

  private initializeHeaders() {
    this.headers = { [this.apiKeyHeader]: API_KEY };
  }

  prepareUrl(uri: string) {
    return this.apiBasePath + uri;
  }

}
