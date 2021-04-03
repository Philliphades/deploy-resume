import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { map, share} from 'rxjs/operators';
import { ProjectInt } from './Project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects : ProjectInt []
  isDefault : boolean;
  constructor(private projectService: ProjectService) {

  }
  ngOnInit() {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }
  projects$ = this.projectService.getProjects().pipe(share());
  showAll(){
    this.projects$
      .subscribe(response => this.projects = response);

  }
  filterProjWeb(){
    this.projects$.pipe(
    map(projects => projects.filter(project => project.type=="web")))
    .subscribe(response => this.projects = response);
  
  
    }
  
    filterProjApp(){  
      this.projects$.pipe(
        map(projects => projects.filter(project => project.type=="app"))
       ).subscribe(response => this.projects = response);
      }
  
  
    filterProjDLG(){
  
      this.projects$.pipe(
      map(projects => projects.filter(project => project.type=="dlg")))
      .subscribe(response => this.projects = response);
  
  
    }
  
    filterProjMobi(){
  
      this.projects$.pipe(
      map(projects => projects.filter(project => project.type=="mobi")))
      .subscribe(response => this.projects = response);
  
  
    }
}
