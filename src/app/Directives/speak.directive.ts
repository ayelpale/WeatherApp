import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpeak]'
})
export class SpeakDirective {

  constructor(private host:ElementRef) { }

  private speech = window.speechSynthesis;


  @HostListener("mouseenter")
  onMouseEnter(event: MouseEvent)
  {
    const text = this.host.nativeElement.innerHTML || "";
    const utterence = new SpeechSynthesisUtterance(text);
    this.speech.speak(utterence);
  }

}
