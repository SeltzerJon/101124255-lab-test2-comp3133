import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  launchYear: string = '';

  @Output() filterByYearEvent = new EventEmitter<string>();

  filterByYear() {
    this.filterByYearEvent.emit(this.launchYear);
  }
}
