import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  // store captured logs
  logArr: string[] = [];

  // Method to capture logs
  log(message: string) {
    this.logArr.push(message);
  }
}
