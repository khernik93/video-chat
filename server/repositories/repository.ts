import { Observable } from "rxjs";

export default interface Repository {
  key: string;
  getAll(): Observable<any>;
}
