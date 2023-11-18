import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent  implements  OnInit{
@Input()
  public  placeholder: string = '';

@Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string) {
    this.onValue.emit(value)
  }

  @Output()
  public onDebouncedValue = new EventEmitter<string>();

  onKeyPress(value: string) {
    this.debounced.next(value)
  }

  private debounced: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounced
      .pipe(
        debounceTime(1000)
      )

      .subscribe(value =>
        this.onDebouncedValue.emit(value)
      )
  }
}
