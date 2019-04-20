import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pitakaya',
  templateUrl: './pitakaya.page.html',
  styleUrls: ['./pitakaya.page.scss'],
})

export class PitakayaPage implements OnInit {


  selectedPitakaya: String;
  parentNode: any;

  constructor(private route: ActivatedRoute, private httpService: HttpClient) {
    this.httpService = httpService;

    this.selectedPitakaya = this.route.snapshot.paramMap.get('selectedPitakaya');

    this.parentNode = {
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
