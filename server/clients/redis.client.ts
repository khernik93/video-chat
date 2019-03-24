import * as redis from 'redis';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import config from '../config/config';
import streamService from '../services/stream.service';

/**
 * Example:
 * 
 * redisService.set('key1', 'value1');
 * redisService.get('key1')
 *   .subscribe(val => console.log(val));
 */
class RedisClient {

  private connection$ = new BehaviorSubject(null);
  private instance: any;

  constructor() {
    this.initializeClient();
  }

  /**
   * Initialize redis client and handle eventual errors
   */
  private initializeClient(): void {
    this.instance = redis.createClient(config.redis.port, config.redis.host);
    this.instance.on('connect', () => this.connection$.next(true));
    this.instance.on('error', (err) => this.connection$.error(err));
  }

  /**
   * Get value from redis storage
   * @param key 
   * @returns value stream
   */
  get(key: string): Observable<any> {
    return this.connection$
      .pipe(
        switchMap(() => streamService.fromCallback(this.instance.get, [key])),
        map((data: any) => JSON.parse(data))
      );
  }

  /**
   * Set key/value in redis storage
   * @param key 
   * @param value 
   */
  set(key: string, value: any): void {
    this.instance.set(key, JSON.stringify(value), redis.print);
  }

  /**
   * Delete key from redis storage
   * @param key 
   */
  delete(key: string): Observable<void> {
    return this.connection$
      .pipe(
        switchMap(() => streamService.fromCallback(this.instance.del, [key]))
      );
  }

}

export default new RedisClient();
