import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'spinner',
  template:
  `  <div class="loader"></div>`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

}
