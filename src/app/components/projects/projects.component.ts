import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  redirectSpringBoot(): void {
    window.open(
      "https://github.com/chandrakumar001/ms-person", "_blank");
  }

  redirectMicroserviceDesign(): void {
    window.open(
      "https://github.com/chandrakumar001/ca-ms-springboot/blob/main/Micro%20service%20Design%20for%20application.PNG", "_blank");
  }
}
