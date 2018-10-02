import { Component, OnInit } from '@angular/core';
import {  Mahasiswa } from './mahasiswa';

@Component({
  selector: 'app-quiz-dion',
  templateUrl: './quiz-dion.component.html',
  styleUrls: ['./quiz-dion.component.css']
})
export class QuizDionComponent implements OnInit {
  daftarMhs:Mahasiswa[] = [];
  nim = '';
  nama = '';
  kelas = '';
  mahasiswa;

  constructor() { }

  ngOnInit() {
  }
  tambahData(){
    this.mahasiswa = new Mahasiswa(this.nim,this.nama,this.kelas);
    this.daftarMhs.push(this.mahasiswa);
    this.nama = '';
    this.nim = '';
    this.kelas = '';
  }

}
