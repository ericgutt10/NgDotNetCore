import { Component, Input } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent {
  @Input() tabList: Array<any>;
  
  constructor() { 
    this.tabList = [];
  }
}
