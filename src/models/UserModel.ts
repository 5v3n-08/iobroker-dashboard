import _ from 'lodash';
import { BaseModel } from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
     
    }
 */
export default class UserModel extends BaseModel {
  public readonly id: string = '';
  public readonly username: string = '';
  public readonly name: string = '';
  public readonly email: string = '';
  public readonly avatar: string = '';

  /*
   * Client-Side properties (Not from API)
   */
  public initials: string | null = null;

  constructor(data: Partial<UserModel>) {
    super();

    this.update(data);
  }

  public update(data: Partial<UserModel>): void {
    super.update(data);

    this.initials = this._initials();
  }

  protected _initials() {
    if (this.name) {
      const words = _.split(this.name, ' ');
      if (_.isArray(words) && words.length >= 2) {
        const text = words[0][0] + words[words.length - 1][0];
        return text;
      } else {
        return words[0][0];
      }
    }
    return null;
  }
}
