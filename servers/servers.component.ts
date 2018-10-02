import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  header = 'Welcome to the jungle'
  allowNewServer = false;
  serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  getHeader(){
    return this.header;
  }

  constructor() { 
    setTimeout (() =>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreationStatus(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server telah dibuat!';
  }
  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
