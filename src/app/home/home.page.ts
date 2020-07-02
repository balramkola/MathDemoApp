import { Component } from '@angular/core';
import {Calci} from '@ionic-native/calci/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value1: string="";
  value2: string="";

  constructor(private calci: Calci) {
    //alert("starting");
  }

  add(){
    let data = {
      param1: this.value1,
      param2: this.value2
  }
  this.calci.add(data).then(result => {
    alert(result);
  }).catch(err => alert('Error : ' + err));

  }

  sub(){
    let data = {
      param1: this.value1,
      param2: this.value2
  }
  this.calci.substract(data).then(result => {
    alert(result);
  }).catch(err => alert('Error : ' + err));

  }

}
