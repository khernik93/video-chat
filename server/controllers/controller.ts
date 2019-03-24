import { Observable } from "rxjs";

export default class Controller {

  sendErrorResponse(err: any, res: any): Observable<any> {
    res.status(500);
    res.send(err);
    throw err;
  }

  sendSuccessResponse(body: any, res: any): void {
    res.status(200);
    res.send(JSON.stringify(body));
  }

}
