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
  pageNumber: number;
  isPaali:boolean;



  constructor(private route: ActivatedRoute) {
    this.selectedSuthraya = this.route.snapshot.paramMap.get('selectedSuthraya');
    this.pageNumber=28;
  }

  page(){
    this.pageNumber+=2;
  }

  changeToPaali(){
    this.pageNumber--;
    this.isPaali = true;
  }

  changeToSinhala(){
    this.pageNumber++;
    this.isPaali = false;
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
