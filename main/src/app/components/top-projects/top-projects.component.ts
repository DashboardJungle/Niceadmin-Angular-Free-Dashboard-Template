import { Component } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';



export interface productsData {
  id: number;
  imagePath: string;
  bgcolor: string;
  project: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  budget: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-2.jpg',
    project: 'Modernize',
    title: 'Emily Carter',
    subtitle: 'Project Manager',
    timeline: '4–6 weeks',
    budget: '$10K',
    category: 'On track',
    bgcolor: 'bg-light-warning text-warning',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-3.jpg',
    project: 'Spike Admin',
    title: 'Jason Miller',
    subtitle: 'Web Developer',
    timeline: '6–8 weeks',
    budget: '$40K',
    category: 'Delayed',
    bgcolor: 'bg-light-error text-error',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    project: 'Material Pro',
    title: 'Ryan Scott',
    subtitle: 'UI/UX Designer',
    timeline: '3–5 weeks',
    budget: '$25K',
    category: 'Submitted',
    bgcolor: 'bg-light-success text-success',
  },
];
@Component({
  selector: 'app-top-projects',
  imports: [
    MaterialModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    TablerIconsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './top-projects.component.html',
})
export class AppTopProjectsComponent {

  displayedColumns: string[] = ['Project', 'Assigned', 'Timeline', 'Budget', 'Status'];
  dataSource = ELEMENT_DATA;

  constructor() { }
}
