import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent {

  listOptions: string[] = [
    "First option",
    "Second option",
    "Third option"
  ];

  constructor() {}
}
