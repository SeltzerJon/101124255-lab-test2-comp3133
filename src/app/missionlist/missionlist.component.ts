import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';
import { Mission } from '../model/mission.interface'; 
@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = []; 
  missionsF: Mission[] = []; 
  selectedMission: Mission | null = null; 

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.fetchMissions();
  }

  fetchMissions() {
    this.missionService.getAllMissions().subscribe(
      (data: Mission[]) => { 
        this.missions = data;
        this.missionsF = [...this.missions];
      },
      (error) => {
        console.error('Error fetching SpaceX launches:', error);
      }
    );
  }

  applyFilterByYear(year: string) {
    if (year) {
      this.missionsF = this.missions.filter(mission => mission.launch_year === year);
    } else {
      this.missionsF = [...this.missions];
    }
  }

  showMissionDetails(mission: Mission) {
    this.selectedMission = mission;
  }
}
