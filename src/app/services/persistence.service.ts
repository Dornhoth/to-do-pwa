import { Injectable } from '@angular/core';
import { openDB } from 'idb';

const TO_DO_DB_NAME = 'toDoDB';
const TO_DOS_STORE_NAME = 'ToDos';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  private peanooDB;

  async connect(): Promise<void> {
    this.peanooDB = await openDB(TO_DO_DB_NAME, 2, {
      upgrade(db) {
        db.createObjectStore(TO_DOS_STORE_NAME, { keyPath: 'id' });
      },
    });
  }
}
