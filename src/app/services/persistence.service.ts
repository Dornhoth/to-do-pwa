import { Injectable } from '@angular/core';
import { openDB } from 'idb';
import { Observable, from } from 'rxjs';

const TO_DO_DB_NAME = 'toDoDB';
export const TO_DOS_STORE_NAME = 'ToDos';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  private toDoDB;

  async connect(): Promise<void> {
    this.toDoDB = await openDB(TO_DO_DB_NAME, 2, {
      upgrade(db) {
        db.createObjectStore(TO_DOS_STORE_NAME, { keyPath: 'id', autoIncrement: true });
      },
    });
  }

  getAll(storeName: string): Observable<any> {
    return from(this.toDoDB.getAll(storeName));
  }

  save(storeName: string, item: any): Observable<any> {
    return from(this.toDoDB.put(storeName, item));
  }
}
