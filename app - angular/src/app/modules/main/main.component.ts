import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Mission } from 'src/app/core/models/mission';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NbSidebarService, NbDialogService } from '@nebular/theme';
import { EditComponent } from '../edit/edit.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  addMission:FormGroup;
  missions:Mission[]=[];
  dateToString:string;
  mission:Mission;
  constructor(private api:ApiService,private formBuilder:FormBuilder,private dialogService: NbDialogService) { }


  add(f) {
    this.dateToString = new Date().toLocaleDateString();
    this.mission = {
      name: f.form.value.name,
      description: f.form.value.description,
      date: this.dateToString
    }
    this.api.addMission(this.mission).subscribe(ele => {
     console.log(this.mission);
     this.missions.push({name:f.form.value.name,description: f.form.value.description,date:this.dateToString})
     
    
  });
    
    

}

delete(id){
 this.api.deleteMission(id).subscribe(ele => {
    this.missions = this.missions.filter(ele => ele.id != id);
    
  });
}

editMission(mission){
  this.dialogService.open(EditComponent, {
    context: {
      mission:mission
    },
  }).onClose.subscribe(newMission => {
    console.log(mission)
    this.missions = this.missions.filter(ele => ele.id != newMission.id)
    this.missions.push(newMission)
  })
}


  ngOnInit(): void {
    this.addMission = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],


    });
    this.api.getAll().subscribe(ele => {
      this.missions = ele;
    console.log(this.missions);
    
      
  })
}
  
    
  }


