import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _injector: Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService = this._injector.get(AuthService);
    let tokenized = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenized);
  }
}
