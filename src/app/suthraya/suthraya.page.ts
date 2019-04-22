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

  constructor(private route: ActivatedRoute) {
    this.selectedSuthraya = this.route.snapshot.paramMap.get('selectedSuthraya');
  }

  ngOnInit() {
    
    this.path = `../../assets/images/'${this.selectedSuthraya}/`;

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
