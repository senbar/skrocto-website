import { Component } from '@angular/core';
import { SummarizeService } from './summarize/summarize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skrocto-website';
  outputText= "";
  inputText="";

  constructor(private summarizeService : SummarizeService)  {
  }

  onClickSend(){
    this.outputText
    this.summarizeService.getSummarized(this.inputText).subscribe((val)=> 
      this.outputText=val as string)
  }
}
