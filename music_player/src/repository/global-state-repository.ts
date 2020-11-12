import React from 'reactn';
import {DMSGlobalState} from '../config/global';

export class GlobalStateRepository {
  public async initialize() {
    await React.setGlobal<DMSGlobalState>({
      user: null,
    });
  }

  public async setState(globalState: Partial<DMSGlobalState>) {
    await React.setGlobal<DMSGlobalState>(globalState);
  }

  public async setUser(user: any) {
    await React.setGlobal<DMSGlobalState>({
      user: user,
    });
  }
}

export const globalStateRepository: GlobalStateRepository = new GlobalStateRepository();
