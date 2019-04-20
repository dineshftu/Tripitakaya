import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { TreeNode } from '../tree-node'


@Component({
  selector: 'app-pitakaya',
  templateUrl: './pitakaya.page.html',
  styleUrls: ['./pitakaya.page.scss'],
})

export class PitakayaPage implements OnInit {

  @ViewChild(TreeNode) treeNode;

  selectedPitakaya: String;
  node: any;

  constructor(private route: ActivatedRoute, private httpService: HttpClient) {
    this.httpService = httpService;

    this.selectedPitakaya = this.route.snapshot.paramMap.get('selectedPitakaya');

    this.node = {
      name: 'root', children: [
        { name: 'a', children: [] },
        { name: 'b', children: [] },
        {
          name: 'c', children: [
            { name: 'd', children: [] },
            { name: 'e', children: [] },
            { name: 'f', children: [] },
          ]
        },
      ]
    };

  }


  ngOnInit() {
  }

}
