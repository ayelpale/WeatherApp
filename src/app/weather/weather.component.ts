import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'weather',
  template: `
    <div id="container">
      <h1 appSpeak tooltip="Weather is good">{{_city}} Weather</h1>
      <div>
        <img src={{imageSrcUrl}} alt="condition">
        <h3 tooltip="Temperature is cool" >Low {{low}} C  - High {{high}} C</h3>
      </div>
    </div>
  `,
  styles: [
    `
    div#container {
      border : 2px solid gray;
      display:inline-block;
      border-radius : 5px;
      padding:10px;
      margin:8px;
      text-align:center;
      box-shadow : 5px 5px 5px lightgray;
    }
    `
  ]
})
export class WeatherComponent implements
  OnChanges, OnInit, DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input("city") _city!: string;
  @Input("low") low!: number;
  @Input("high") high!: number;
  @Input("condition") condition!: string;

  conditionMap: Map<string, string> = new Map();
  
  imageSrcUrl: string = "../assets/images/" + this.condition + ".jpg";
  
  @Input()
  set city(value: string)
  {
    this._city = value.trim()==="" ? "Unknown" : value;
  }
  get city(): string
  {
    return this._city;
  }

  constructor()
  {
    this.conditionMap.set("sunny", "sunny.jpg");
    this.conditionMap.set("hail", "hail.jpg");
    this.conditionMap.set("rain", "rain.jpg");
    this.conditionMap.set("snow", "snow.jpg");
    this.conditionMap.set("windy", "windy.jpg");
    this.conditionMap.set("d-sunny", "drizzle-sunny.jpg");
    this.conditionMap.set("thunderstorm", "thunderstorm.jpg");
    console.log("1. constructor ")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("2. ngOnChanges")
    this.imageSrcUrl = "../assets/images/"+ (this.conditionMap.get(this.condition) ?? "cloudy.jpg");
  }

  ngOnInit(): void {
    console.log("3. onInit "+this.condition)
  }


  ngDoCheck(): void {
   console.log("4. Do check")
  }

  ngAfterContentInit(): void {
    console.log("5. After Content Initialize")
  }

   ngAfterContentChecked(): void {
    console.log("6. After Content Checked")
  }


  ngAfterViewInit(): void {
      console.log("7. After View Init")
  }

  ngAfterViewChecked(): void {
      console.log("8. After view checked")
  }

  ngOnDestroy(): void {
    console.log("9. Destroy")
  }
  
}
