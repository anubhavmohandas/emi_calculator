import { Component } from '@angular/core';

@Component({
  selector: 'app-emii',
  standalone: true,
  imports: [],
  templateUrl: './emii.component.html',
  styleUrl: './emii.component.css'
})
export class EmiiComponent {
  // userName: string = "any";
  gst = 18;
  p:number = 0;
  roi:number = 0;
  t:number = 0;
  emi:number = 0;
  interest:number = 0;
  emiColor:string = "red";
  interestColor:string = "maroon";
  
  calculateEMI(p:number, roi:number, t:number) {
    this.p = p;
    this.roi = roi;
    this.t = t;

    const total = (this.p * this.roi * this.t) / 100;
    this.interest = total;
    const totalAmount = this.p + total;
    const totalGST = (totalAmount * this.gst) / 100;
    this.emi = parseFloat(((totalAmount + totalGST) / (this.t * 12)).toFixed(2));
    // this.emi = ((totalAmount + totalGST) / (this.t * 12))
  }
}
