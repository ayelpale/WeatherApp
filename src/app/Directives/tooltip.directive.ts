import { AfterViewInit, Component, ComponentRef, Directive, HostListener, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { TooltipComponentComponent } from '../common/tooltip-component/tooltip-component.component';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input() tooltip!: string;
  private toolTipComponent!:ComponentRef<TooltipComponentComponent>;

  constructor(private viewContainerRef: ViewContainerRef) {
  }
  

  @HostListener("mouseenter")
  onMouseEnter(event: MouseEvent)
  {
    this.toolTipComponent = this.viewContainerRef.createComponent(TooltipComponentComponent);
    this.toolTipComponent.instance._toolTipText = this.tooltip;
    
  }

  @HostListener("mouseleave")
  onMouseLeave(event: MouseEvent)
  {
    window.setTimeout(this.destroyComponent.bind(this)
    ,3000)
    
  }

  destroyComponent() {
    this.toolTipComponent.destroy();
  }  

}

