import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    let owners = [
      { lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', id:1 },
      { lastName: 'Петрова', firstName: 'Наталья', middleName: 'Игоревна', id:2 },
      { lastName: 'Антонов', firstName: 'Алексей', middleName: 'Сергеевич', id:3 }
    ];
    return { owners };
  }
}