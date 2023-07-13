import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tooltip-component',
  templateUrl: './tooltip-component.component.html',
  styleUrls: ['./tooltip-component.component.css']
})
export class TooltipComponentComponent implements OnInit {

  @Input("toolTipText") _toolTipText!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
