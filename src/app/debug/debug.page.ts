import { DebugService } from './../services/debug.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.page.html',
  styleUrls: ['./debug.page.scss'],
})
export class DebugPage implements OnInit {

  infos: object[];
  debugs: object[];
  logLevel: number;

  constructor(private debugService: DebugService) { }

  ngOnInit() {
    this.infos = this.debugService.infos;
    this.debugs = this.debugService.debugs;
    this.logLevel = this.debugService.logLevel;
  }

}
