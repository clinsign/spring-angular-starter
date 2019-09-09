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
    console.info('>> MyHttpInterceptor');
    if (!req.url.includes('resource')) {
      return next.handle(req);
    }
    const httpsReq = req.clone({
      url: 'http://localhost:8080/resource'
    });

    return next.handle(httpsReq);
  }
}
