import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suthraya',
  templateUrl: './suthraya.page.html',
  styleUrls: ['./suthraya.page.scss'],
})

export class SuthrayaPage implements OnInit {

  node: any;
  selectedSuthraya: String;
  path: String;
  src: String;
  // page: number;
  pageVariable: number;



  constructor(private route: ActivatedRoute) {
    this.selectedSuthraya = this.route.snapshot.paramMap.get('selectedSuthraya');
    this.pageVariable=1;
  }

  page(){
    this.pageVariable++;
  }

  ngOnInit() {

    this.src = `../../assets/pdf/01 පාරාජිකා පාළි - විනය.pdf`;


    this.path = `../../assets/images/'${this.selectedSuthraya}/`;
    // this.page = 1;

    this.node = [
      {
        "source": this.path + '0001.png'
      },
      {
        "source": '../../assets/images/' + this.selectedSuthraya + '/0002.png'
      },
      {
        "source": '../../assets/images/' + this.selectedSuthraya + '/0003.png'
      }
    ]

  }

}
