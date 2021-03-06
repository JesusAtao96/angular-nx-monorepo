import { EntityState } from '@ngrx/entity';

/**
 * Interface for the 'Auth' data
 */
 export interface AuthEntity {
  id: string | number; // Primary ID
  name: string;
}

export interface State extends EntityState<AuthEntity> {
  selectedId?: string | number; // which Auth record has been selected
  loaded: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
}
