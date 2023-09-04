import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  // DI - added LoggerService into Calculator Service
  constructor(private logger: LoggerService) { }


  add(x: number, y: number) {

    let result = x + y;
    // Calling LoggerService log method to capture log
    this.logger.log("Added two numbers successfully!");

    return result;
  }
  sub(x: number, y: number) {
    const result = x - y;
    // Calling LoggerService log method to capture log
    this.logger.log("Substracted two numbers successfully!");
    return result;
  }

  mul(x: number, y: number) {
    this.logger.log("Inside mul method");
    const result = x * y;
    // Calling LoggerService log method to capture log
    this.logger.log("Multiplied two numbers successfully!");

    return result;
  }

  div(x: number, y: number) {
    const result = x / y;
    // Calling LoggerService log method to capture log
    this.logger.log("Divided two numbers successfully!");
    return result;
  }
}
