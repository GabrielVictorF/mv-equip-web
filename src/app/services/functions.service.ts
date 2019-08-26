import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

declare var M;
export class FunctionsService {

  constructor() { }

  public showToast(message: string) {
    var toastHTML = '<span>' + message + '</span><button class="btn-flat toast-action">Undo</button>';
    M.toast({html: toastHTML});
  }
}
