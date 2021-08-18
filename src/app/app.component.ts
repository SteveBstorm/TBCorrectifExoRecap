import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: NbMenuItem[] = [
    { title:'Fans', icon: 'star', children: [
      { title:'Liste', icon: 'list', link: '/fans/list' },
      { title:'Nouveau', icon: 'person-add', link: '/fans/create' },
    ] }
  ];

  constructor(
    private sidebarService: NbSidebarService
  ) { }

  toggleSidebar() {
    this.sidebarService.toggle(true);
  }

  /* 
  structure de bases
  core
    services
    resolvers
    interceptors
    guards
    states
    models
  features
    modules lazyloadés de pages
  shared
    composants
    pipes
    directives
    validators
  */ 

}
