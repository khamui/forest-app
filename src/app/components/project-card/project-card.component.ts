import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass']
})
export class ProjectCardComponent implements OnInit
{
  @Input() project$!: Observable<any>;
  project!: IProject;

  ngOnInit(): void
  {
    this.project$.subscribe(({ payload }) => this.project = payload.data());
  }
}
