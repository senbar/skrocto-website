import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import * as Config from "../../assets/summarize.json"

@Injectable()
export class SummarizeService {
    private testUrl = Config.postmanTestUrl
    
    constructor (private http: HttpClient) {}

    getSummarized(text : string){
        return this.http.post(this.testUrl, "")
    }

}