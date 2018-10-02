import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  btnCheck = false;
  userName = '';
  judulTugas = 'Tugas Dion Maulana';
  constructor() { }

  ngOnInit() {
  }
  onUpdateServerName(event : Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }
  checkUsername(){
    if (this.userName == '') {
      return this.btnCheck = true;
    }
  }
  onChangeForm(){
    this.userName = '';
  }

}
