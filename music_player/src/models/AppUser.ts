import {Moment} from 'moment';

export class AppUser {
  public id?: number;

  public username?: string;

  public displayName?: string;

  public address?: string;

  public email?: string;

  public phone?: string;

  public sexId?: number;

  public birthday?: Moment;

  public avatar?: string;

  public positionId?: number;

  public department?: string;

  public organizationId?: number;

  public provinceId?: number;

  public longitude?: number;

  public latitude?: number;

  public statusId?: number;

  public token?: string;
}
