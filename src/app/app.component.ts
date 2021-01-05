import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'template-demo';
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name :string = '';

  userName :string = '';
  private _customerName: string = '';

  userLoggedIn = true;

  @ViewChild('nameRef', {static: false})
  nameElementRef:ElementRef;

  @ViewChild(ChildComponent, {static:false})
  childComponentRef: ChildComponent;


  constructor(private _interactionService: InteractionService){

  }

  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
    this.childComponentRef.message = 'Message from Parent Component';
  }

  get customerName(): string{
    return this._customerName;
  }

  set customerName(value: string){
    this._customerName = value;
    if(value =='Ravi'){
      alert("Hello Ravi!");
    }
  }

  incrementCount(){
    this.count += 1;
  }

  greetRavi(updatedValue){
    this.userName = updatedValue;
    if(updatedValue =='Ravi'){
      alert("Welcome back Ravi!");
    }
  }

  NewGreet(dude: string){
    alert('Yo '+ dude)
  }

  greetStudent(){
    this._interactionService.sendMessage('Good Morning!')
  }

  appreciateStudent(){
    this._interactionService.sendMessage('Well Done!')
  }
}
