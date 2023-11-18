import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Link {
  path: string;
  label: string;
}
@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  public links: Link[] = [
/*
    {
      path: '',
      label: 'Home'
    },
    {
      path: 'about',
      label: 'About'
    },
    {
      path: 'contact',
      label: 'Contact'
    },
*/
    {
      path: "countries/by-capital",
      label: "By Capital"
    },
    {
      path: "countries/by-region",
      label: "By Region"
    },
    {
      path: "countries/by-country",
      label: "By Country"
    },

  ]
}
