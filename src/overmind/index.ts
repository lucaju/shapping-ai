import { IContext } from 'overmind';
import {
  createActionsHook, createStateHook
} from 'overmind-react';
import * as actions from './actions';
import { state } from './state';
// import * as effects from './effects';

export const config = {
  state,
  actions,
  // effects,
};

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
// export const useEffects = createEffectsHook<Context>();
// export const useReaction = createReactionHook<Context>();
