import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SummarizeService } from "./summarize.service";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { doesNotThrow } from 'assert';

describe('SummarizeService', () => {
  let service : SummarizeService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        SummarizeService
      ]
    });
  }));

  it('should get test response from postman', async(() => {
    service = TestBed.get(SummarizeService)
    var res= service.getSummarized("")
    res.subscribe(result =>
    expect(result as string).toBe("test1res"))
  }));
});
