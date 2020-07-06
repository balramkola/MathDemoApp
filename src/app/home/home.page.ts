import { Component } from '@angular/core';
import { Calci } from '@ionic-native/calci/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  PREFIX_LOG: string = "IONIC UI: ";

  value1: string = "";
  value2: string = "";
  timerTextView: string = "";

  constructor(private calci: Calci) {
    //alert("starting");
  }

  add() {
    let data = {
      param1: this.value1,
      param2: this.value2
    }
    console.log(this.PREFIX_LOG + 'add method called');
    this.calci.add(data).then(result => {
      console.log(this.PREFIX_LOG + 'addition result:'+ result);
      alert(result);
    }).catch(err => alert('Error : ' + err));

  }

  sub() {
    let data = {
      param1: this.value1,
      param2: this.value2
    }
    console.log(this.PREFIX_LOG + 'substract method called');
    this.calci.substract(data).then(result => {
      console.log(this.PREFIX_LOG + 'substraction result:'+ result);
      alert(result);
    }).catch(err => alert('Error : ' + err));

  }

  hookOnTimerEvents() {
    // let data = {
    //   param1: this.value1
    // }
    console.log(this.PREFIX_LOG + 'hookOnTimerEvents method called');
    let onTickSubscription = this.calci.onTick().subscribe(() => {
      console.log(this.PREFIX_LOG + 'received on TICK call from native code');
      console.log(this.PREFIX_LOG + 'tick sec:' + this.calci.tickSec);
      this.timerTextView = "Tick: "+ this.calci.tickSec;
    });

    let onFinishSubscription = this.calci.onFinish().subscribe(() => {
      console.log(this.PREFIX_LOG + 'received on FINISH event from native code');
      onTickSubscription.unsubscribe();
      console.log(this.PREFIX_LOG + 'unsubscribed from onTick events');
      onFinishSubscription.unsubscribe();
      console.log(this.PREFIX_LOG + 'unsubscribed from onFinish events');
      this.timerTextView = "Timer Finished";
    });

  }

}
