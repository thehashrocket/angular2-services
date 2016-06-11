import {Component} from '@angular/core';
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <h3>Component 1</h3>
       <component-1></component-1><br/>
       <h3>Component 2</h3>
       <component-2></component-2>
    `,
    directives: [Component1Component, Component2Component]
})
export class AppComponent {

}