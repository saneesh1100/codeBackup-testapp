import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()

export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {
    let router = this.injector.get(Router);
    console.log(`Request URL: ${router.url}`);

    if (error instanceof HttpErrorResponse) {
      console.error('Backend returned status code:' + error.status);
      console.error('Response body :' + error.message);
    }
    else {
      console.error('An error occured: ' + error.message);
    }
    router.navigate(['error']);
  }

}
