import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { InteractionService } from '../interaction.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() loggedIn: boolean;

  // private _loggedIn: boolean;

  message: string;

  name = 'Ravi';

  @Output() greetEvent = new EventEmitter();
  person = 'Ravindu';

  // get loggedIn(): boolean{
  //   return this._loggedIn;
  // }

  // @Input()
  // set loggedIn(value: boolean){
  //   this._loggedIn = value;
  //   if(value == true){
  //     this.message = 'Welcome back Ravi!';
  //     console.log("User is logged in");
  //   }else{
  //     this.message = 'Please login';
  //     console.log("User logged out")
  //   }
  // }

  constructor(private _interactionService: InteractionService) {   }

   ngOnInit(){
    this._interactionService.teacherMessage$.subscribe(message =>{
      if(message =='Good Morning!'){
        alert('Good Morning Teacher');
      }else if(message =='Well Done!'){
        alert('Thank you teacher')
      }
    })
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const loggedInValue = changes['loggedIn'];
    if (loggedInValue.currentValue == true){
      this.message = "Welcome back Ravi!";
    }else{
      this.message = 'Please login';
    }
  }

  greetRavi(){
    alert('Hey Ravi!')
  }

  callParentGreet(){
    this.greetEvent.emit(this.person);
  }


}
