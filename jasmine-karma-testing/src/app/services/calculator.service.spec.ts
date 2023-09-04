import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

describe('Calculator Service', () => {
  let loggerService: LoggerService;
  let calcService: CalculatorService;

  // Adding required dependencies without TestBed
  // beforeEach(() => {
  //   loggerService = new LoggerService();
  //   calcService = new CalculatorService(loggerService);
  // })

  // Add required dependencies using  TestBed
  beforeEach(() => {
    TestBed.configureTestingModule({});
    loggerService = TestBed.inject(LoggerService);
    calcService = TestBed.inject(CalculatorService);
  });

  it('verify add method', () => {
    spyOn(loggerService, 'log');
    const result = calcService.add(10, 10);
    expect(result).toBe(20);

    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

  it('Verify substract method', () => {
    spyOn(loggerService, 'log');
    const result = calcService.sub(10, 10);
    expect(result).toBe(0);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

  it('Verify mul method', () => {
    spyOn(loggerService, 'log');
    const result = calcService.mul(10, 10);
    expect(result).toBe(100);
    expect(loggerService.log).toHaveBeenCalledTimes(2);
  });

  it('Verify div method', () => {
    spyOn(loggerService, 'log');
    const result = calcService.div(10, 10);
    expect(result).toBe(1);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });


})
