import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getAllData(): Observable<any[]> { //เรียกข้อมูลมาแสดง
    // return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?offset=0&amp;limit=151`);
    const pokemonList$ = this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?offset=0&amp;limit=151`);
    const pokemonDetails$ = this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/1/`);
    return forkJoin([pokemonList$, pokemonDetails$]);
  }

  // insertData(data:any) {//สร้างข้อมูลใหม่
  //   return this.http.post(`https://api-generator.retool.com/0z2kdb/data`,data);
  // }
  // editData(id:number,data:any) {//อัปเดตข้อมูล
  //   return this.http.put(`https://api-generator.retool.com/0z2kdb/data/${id}`,data);
  // }
  // deleteData(id: number) {//ลบข้อมูล
  //   return this.http.delete(`https://api-generator.retool.com/0z2kdb/data/${id}`);
  // }
}
