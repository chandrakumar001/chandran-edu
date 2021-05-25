import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@app/shared/Component/dynamic-menu/model/menu-item';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.scss']
})
export class DynamicMenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'noicon',
      route: 'home'
    },
    {
      label: 'Skills',
      icon: 'noicon',
      route: 'skills'
    },
    {
      label: 'Projects',
      icon: 'noicon',
      route: 'projects'
    },
    {
      label: 'Live-apps',
      icon: 'noicon',
      route: 'live-apps'
    },
    {
      label: 'Blogs',
      icon: 'blogs',
      route: 'blogs'
    },
    {
      label: 'Contact Me',
      icon: 'contact',
      route: 'contact-me'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
