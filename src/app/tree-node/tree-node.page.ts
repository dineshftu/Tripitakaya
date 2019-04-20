import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.page.html',
  styleUrls: ['./tree-node.page.scss'],
})
export class TreeNodePage {

  @Input() node;

  constructor() { }

  ngOnInit() {
  }

}
