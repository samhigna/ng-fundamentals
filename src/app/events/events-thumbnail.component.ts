import { Component, EventEmitter, Input, Output } from "@angular/core";
 
@Component({
    selector:'events-thumbnail',
    templateUrl: './events-thumbnail.component.html'
})
export class EventsThumbnailComponent{
    @Input() event:any
    @Output() eventClicked=new EventEmitter();

   

        handleClickMe(){

            this.eventClicked.emit(" Angular training At Value Momemtum");
   
          }
          logFoo(){  

            console.log("Log Foo method in EventThumnail executed");    }



            address:string = "pandi edava"
}
