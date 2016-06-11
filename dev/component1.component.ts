import {Component} from '@angular/core';
import {LoggingService} from "./services/logging.service";
import {CalculatorService} from "./services/calculator.service";
import {DataService} from "./services/data.service";

@Component({
    selector: 'component-1',
    providers: [LoggingService, CalculatorService, DataService],
    template: `
        <div>
            <h3>Logging Service</h3>
            <input type="text" #message>
            <button (click)="onLog(message.value)">Send</button>
        </div>
        <div>
            <h3>Calculator Service</h3>
            <p>Add or Multiply these two numbers:</p>
            <input type="text" #num1>
            <input type="text" #num2><br/>
            <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
            <button (click)="onAdd(num1.value, num2.value)">Add</button>
            <br/>
            <p>Result: {{result}}</p>
        </div>
        <div>
            <h3>Data Service</h3>
            
            <input type="text" #newData>
            <button (click)="onInsert(newData.value)">Insert new data</button>
            <br/>
            <button (click)="onGetData()">Get some data</button>
            <p>Data: {{data}}</p>
        </div>
    `
})
export class Component1Component {
    result: string;
    data: string;

    constructor(
        private _loggingService: LoggingService,
        private _calculatorService: CalculatorService,
        private _dataService: DataService) {

    }

    onLog(message: string){
        this._loggingService.log(message);
    }

    onAdd(num1: number, num2: number) {
        this.result = ''+this._calculatorService.add(+num1, +num2)
    }

    onMultiply(num1: number, num2: number) {
        this.result = ''+this._calculatorService.multiply(+num1, +num2)
    }

    onGetData() {
        this.data = this._dataService.getRandomString()
    }

    onInsert(value: string) {
        this._dataService.insert(value);
    }
}