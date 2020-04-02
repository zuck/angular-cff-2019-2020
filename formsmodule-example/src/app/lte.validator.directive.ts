import { Directive, Input } from '@angular/core';
import {
 NG_VALIDATORS,
 Validator,
 ValidationErrors,
 FormGroup
} from '@angular/forms';

@Directive({
   selector: '[lte]',
   providers: [{
     provide: NG_VALIDATORS,
     useExisting: LessThanOrEqualDirective,
     multi: true
   }]
})
export class LessThanOrEqualDirective implements Validator {
  @Input('lte') maxValue: number = 10;

  validate(formGroup: FormGroup): ValidationErrors {
    if (!formGroup) return null

    if (formGroup.value == null) return {
      'required': true
    }

    if (formGroup.value > this.maxValue) {
      return {
        'lte': this.maxValue
      }
    }

    return null
  }
}
