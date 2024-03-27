import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {

  principal: number = 0;
  roi: number = 0;
  t: number = 0;
  emi: number = 0;
  interest: number = 0;
  gst: number = 18; 
  emiColor:string = "red";
  interstColor:string = "maroon";
  calculateEMI(principal: number, roi: number, t: number) {
    this.principal = principal;
    this.roi = roi;
    this.t = t;
    
    // EMI Calculation
    const totalInterest = (this.principal * this.roi * this.t) / 100;
    this.interest = totalInterest;
    const totalAmount = this.principal + totalInterest;
    const totalGST = (totalAmount * this.gst) / 100;
    this.emi = (totalAmount + totalGST) / (this.t * 12);
  }
}
