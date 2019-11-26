import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

declare var M;

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  public showToast(message: string) {
    var toastHTML = '<span>' + message + '</span><button class="btn-flat toast-action">Reportar Erro</button>';
    M.toast({html: toastHTML});
    function reportErrorSentry() {
      let eventId = sessionStorage.getItem('sentry-error-ev-id');
      if (eventId) {
        Sentry.showReportDialog({ eventId });
      }
    }
    let eventId = sessionStorage.getItem('sentry-error-ev-id')
  }

  public initCalendar() {
    let options = {
      format: 'dd/mmmm/yyyy',
      date: new Date(),
      setDefaultDate: true,
      i18n: {
        months: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ],
        monthsShort: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ],
        weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        weekdaysShort: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
      }
    }
    let calendar = document.querySelectorAll('.datepicker');
    return M.Datepicker.init(calendar, options);
  }

  public initSelect() {      
    let select = document.querySelectorAll('select');
    M.FormSelect.init(select);
  }
}
