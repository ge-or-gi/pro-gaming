import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, tap} from 'rxjs/operators';
import {SearcService} from './searc.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit, OnDestroy {

  search: FormControl = new FormControl('');

  constructor(
    private searchSvc: SearcService
  ) { }

  ngOnDestroy(): void {
    // Do something when destroyed
  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      tap(value => console.log(value)),
      debounceTime(500),
    ).subscribe((value: string) => {
      this.searchSvc.search(value);
    })
  }

  onSubmit($event: any) {

  }
}
