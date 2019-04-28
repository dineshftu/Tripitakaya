import { Component, OnInit, ViewChild } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PitakayaService } from './pitakaya.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';


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
    this.pitakayaService.getPitakayaDetails(this.selectedPitakaya).subscribe(data => {
      // this.parentNode = data;
      console.log("data", data);

      this.dataSource.data = this.addPdfNumber(data); //data;
      //console.log(this.dataSource.data);
    })
  }

  onClick(node: FoodNode) {
    //console.log(node);
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


  addPdfNumber(node: FoodNode[]) {
    for (let index = 0; index < node.length; index++) {
      node[index] = this.recursive(node[index]);
    }

    console.log("node", node);
    return node;
  }

  recursive(node: FoodNode) {
    for (var i = 0; i < node.children.length; i++) {
      if (node.pdfNumber != 0) {
        node.children[i].pdfNumber = node.pdfNumber;
      }
      if (node.children.length) {
        this.recursive(node.children[i]);
      }
    }

    return node;
  }

  // addPdfNumber(node: FoodNode) {
  //   Object.keys(node).forEach(function (item) {
  //     console.log(item);
  //   });
  // }

}

interface FoodNode {
  name: string;
  pdfNumber: number;
  pageNumber: number;
  children?: FoodNode[];
}
