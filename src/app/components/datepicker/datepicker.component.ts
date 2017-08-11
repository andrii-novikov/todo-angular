import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  model;
  @Input() set date(value) {
    this.model = this.formatter.parse(value)
  };
  get date() { return this.formatter.format(this.model) }
  @Output() dateChange = new EventEmitter();
  @Output() onDateChange = new EventEmitter();

  constructor(private formatter: NgbDateParserFormatter) {}

  get buttonColor() {
    if (this.daysLeft() < 3) {
      return 'btn-danger'
    } else if (this.daysLeft() < 5) {
      return 'btn-warning'
    } else if (this.daysLeft() < 7) {
      return 'btn-primary'
    } else if (this.daysLeft() < 14) {
      return 'btn-info'
    } else {
      return 'btn-secondary'
    }
  }

  daysLeft() {
    const diff = Date.parse(this.date) - Date.now() ,
      days_left = diff / 1000 / 86400;
    return days_left > 0 ? Math.ceil(days_left) : 0
  }

  handleModelChange(date) {
    this.dateChange.emit(this.formatter.format(date));
    this.onDateChange.emit();
  }
}
