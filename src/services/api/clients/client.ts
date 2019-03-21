import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ClientServiceI } from './interfaces/clientService.interface';
import { TransferHttpService } from '../transferHttp.service';

interface HttpRequest {
  uri: string,
  params?: any,
  payload?: any
};

export class Client {

  public routes = this.clientService.routes;

  constructor(
    private clientService: ClientServiceI,
    private transferHttpService: TransferHttpService
  ) { }

  public sendGetRequest(request: HttpRequest): Observable<any> {
    this.prepareRequest(request);
    return this.transferHttpService.get(request.uri, request.params);
  }

  public sendPostRequest(request: HttpRequest): Observable<any> {
    this.prepareRequest(request);
    return this.transferHttpService.post(request.uri, request.payload, request.params);
  }

  public sendPutRequest(request: HttpRequest): Observable<any> {
    this.prepareRequest(request);
    return this.transferHttpService.put(request.uri, request.payload, request.params);
  }

  public sendDeleteRequest(request: HttpRequest): Observable<any> {
    this.prepareRequest(request);
    return this.transferHttpService.delete(request.uri, request.params);
  }

  private prepareRequest(request: HttpRequest): void {
    request.uri = this.clientService.prepareUrl(request.uri);
    let headers: HttpHeaders = this.clientService.headers;
    request.params = request.params || {};
    request.params.headers = { ...request.params.headers, ...headers };
  }

}
