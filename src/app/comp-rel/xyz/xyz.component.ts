import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.uTable);
  }
  

  @Input() uTable:any;

 
}
