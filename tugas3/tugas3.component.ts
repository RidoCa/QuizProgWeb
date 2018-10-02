import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
        .backColor{
            background-color:blue;
        }
    `]
})
export class Tugas3Component implements OnInit {
  tampil = '';
  status = false;
  log = [];
  counter = 1;
  constructor() { }

  ngOnInit() {
  }
  onChangeForm(){
    if (this.status==false) {
      this.tampil = 'POLITEKNIK NEGERI MALANG';
      this.status = true;
    }else{
      this.tampil = '';
      this.status = false;
    }
  }
  onClickLog(){
    if (this.status==false) {
      
      this.tampil = 'POLITEKNIK NEGERI MALANG';
      
      this.status = true;
    }else{
      this.tampil = '';
      this.status = false;
    }
    this.log.push(this.log.length+1);
  }
  // getColor() {
  //   return this.log.length > 4 ? 'white' : 'black';
  // }
}
