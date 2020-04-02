import { Directive } from '@angular/core';
import {
 NG_VALIDATORS,
 Validator,
 ValidationErrors,
 FormGroup
} from '@angular/forms';

@Directive({
   selector: '[fiscalCode]',
   providers: [{
     provide: NG_VALIDATORS,
     useExisting: FiscalCodeDirective,
     multi: true
   }]
})
export class FiscalCodeDirective implements Validator {
  validate(formGroup: FormGroup): ValidationErrors {
    if (!formGroup || !formGroup.value) return null

    const errors = {}

    if (formGroup.value !== formGroup.value.toUpperCase()) {
      errors['lowercase'] = true
    }

    if (formGroup.value.length < 11) {
      errors['minLength'] = 11
    }

    return Object.keys(errors).length > 0 ? errors : null
  }
}
