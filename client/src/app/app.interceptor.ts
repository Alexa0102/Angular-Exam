// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { Inject, Injectable, Provider } from "@angular/core";
// import { Router } from "@angular/router";
// import { BehaviorSubject, catchError, Observable, of, switchMap, throwError, withLatestFrom } from "rxjs";
// import { environment } from "src/environments/environment";

// import { AuthService } from "./auth/auth.service";
// import { API_ERROR } from "./shared/constants";


// const apiURL = environment.apiUrl;

// @Injectable()
// export class AppInterceptor implements HttpInterceptor {

//   constructor(
//     @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
//     private router: Router,
//     private authService: AuthService
//   ) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // if (req.url.startsWith('/api')) {
//     //   req = req.clone({ url: req.url.replace('/api', apiURL), withCredentials: true })
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${this.authService.getToken()}`
//         }
//       });
//     }
//     return next.handle(req).pipe(
//       catchError(err => of(err).pipe( // combineLatest([err], this.authService.user$).pipe(take(1))
//         withLatestFrom(this.authService.user$),
//         switchMap(([err, user]) => {
//           if (err.status === 401) {
//             if (!user) {
//               this.router.navigate(['/login']);
//             } else {
//               this.router.navigate(['/auth/no-permissions']);
//             }
//           } else {
//             this.apiError.next(err);
//             this.router.navigate(['/error']);
//           }
//           return throwError(() => err);
//         })
//       ))
//     );
//   }

// }

//   export const appInterceptorProvider: Provider = {
//     provide: HTTP_INTERCEPTORS,
//     useClass: AppInterceptor,
//     multi: true
//   }



import { Injectable, Provider } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg3NGUxNDgxZDYzZjgwZGFhYWRiYWEiLCJlbWFpbCI6InRvZG9yb3d3d3dAZ21haWwuY29tIiwidXNlcm5hbWUiOiJlcmlrMDQiLCJpYXQiOjE2Njk4MTE3MzJ9.PGQNrAC0b3dvOcadZtk-eY30mjnKua5Ghw_aT9pvIGo'
        return next.handle(req.clone({ setHeaders: { 'X-Authorization': token}}));
    }

}
export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  };