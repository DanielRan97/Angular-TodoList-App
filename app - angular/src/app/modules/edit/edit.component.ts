import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ApiService } from 'src/app/core/services/api.service';
import { Mission } from 'src/app/core/models/mission';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NbSidebarService, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editMission:FormGroup;
  newMission:Mission
  constructor(protected dialogRef: NbDialogRef<EditComponent>,private formBuilder:FormBuilder,private api:ApiService) { }
  @Input() mission;
  edit(f) {
    
    this.newMission = {
      id: this.mission.id,
      name: f.form.value.name,
      description: f.form.value.description,
      date:this.mission.date
    }
    this.api.editMission(this.newMission,this.mission.id).subscribe(ele => {
     this.dialogRef.close(this.newMission);
     
     
    
  });
    
    

}

  ngOnInit(): void {
    this.editMission = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],


    });
  }

}
