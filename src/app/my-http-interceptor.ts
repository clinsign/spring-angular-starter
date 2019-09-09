import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.info('MyHttpInterceptor working....1');
    if (!req.url.includes('resource')) {
      return next.handle(req);
    }
    console.info('MyHttpInterceptor working....2');

    // clone request and replace 'http://' with 'https://' at the same time
    const httpsReq = req.clone({
      url: 'http://localhost:8080/resource'
    });

    return next.handle(httpsReq);
  }
}
