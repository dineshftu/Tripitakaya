import { Component, OnInit, ViewChild } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PitakayaService } from './pitakaya.service';
import {MatTreeNestedDataSource} from '@angular/material/tree';


@Component({
  selector: 'app-pitakaya',
  templateUrl: './pitakaya.page.html',
  styleUrls: ['./pitakaya.page.scss'],
})

export class PitakayaPage implements OnInit {
  
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  selectedPitakaya: String;
  parentNode: any;

  constructor(private route: ActivatedRoute, private pitakayaService: PitakayaService) {
    this.selectedPitakaya = this.route.snapshot.paramMap.get('selectedPitakaya');
  }


  ngOnInit() {
      this.pitakayaService.getPitakayaDetails(this.selectedPitakaya).subscribe(data=>{
        this.parentNode = data;

        this.dataSource.data = data;
      })
  }
  
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
