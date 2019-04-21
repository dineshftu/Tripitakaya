import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PitakayaService {

  constructor(private http: HttpClient) { }

  getPitakayaDetails( pitakaya:String) : Observable<FoodNode[]>{
    return this.http.get<FoodNode[]>(`../../assets/data/${pitakaya}.json`);
    // .pipe(
      // retry(4),
      // catchError(this.errorHandlerService.handleError)
    // );
  }
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
