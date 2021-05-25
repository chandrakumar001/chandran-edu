import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gridColumns = 2;

  toggleGridColumns() {
    // this.gridColumns = this.gridColumns === 3 ? 2 : 3;
  }

}
