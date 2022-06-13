import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  elementCtrl = new FormControl();
  filteredElements: Observable<string[]>;
  elements: string[] = [];
  @Input() allElements: string[];
  @Input() title:string;
  @ViewChild('elementInput') elementInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredElements = this.elementCtrl.valueChanges.pipe(
      startWith(null),
      map((element: string | null) => (element ? this._filter(element) : this.allElements.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our element
    if (value) {
      this.elements.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.elementCtrl.setValue(null);
  }

  remove(element: string): void {
    const index = this.elements.indexOf(element);

    if (index >= 0) {
      this.elements.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.elements.push(event.option.viewValue);
    this.elementInput.nativeElement.value = '';
    this.elementCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allElements.filter(element => element.toLowerCase().includes(filterValue));
  }
}
