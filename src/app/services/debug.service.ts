import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugService {
  debugs = [];
  infos = [];
  logLevel = 2;

  constructor() { }

  debug(msg: string) {
    this.debugs.push(msg);
  }

  info(msg: string) {
    this.infos.push(msg);
  }

  show(level: number) {
    this.logLevel = level;
  }
}
