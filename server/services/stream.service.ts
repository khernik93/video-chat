import { Observable } from "rxjs";

class StreamService {

  /**
   * Wrap callback function with an observable stream 
   * @param cb 
   * @param arguments
   */
  fromCallback(cb: Function, args: any): Observable<any> {
    return Observable.create(observer => {
      cb(args[0], (err, res) => {
        observer.next(res);
        observer.complete();
      });
      /*
      args.push((error, result) => {
        if (error) observer.error(error);
        else observer.next(result);
        observer.complete();
      });
      
      cb.apply(this, args);
      */
    });
  }

}

export default new StreamService();
