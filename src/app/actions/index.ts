import { Action } from 'redux';
import { SessionActions } from './session.actions';

export interface IPayloadAction extends Action {
  payload?: any;
}

export const ACTION_PROVIDERS = [ SessionActions ];
export { SessionActions };
