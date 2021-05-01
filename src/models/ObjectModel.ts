import _ from 'lodash';
import { BaseModel } from 'sjs-base-model';

/*
    // Returned Api Data Sample
    hue.0.Büro_PC_rechts.on : {
        ack: true
        from: "system.adapter.hue.0"
        lc: 1619888135155
        q: 0
        ts: 1619888429459
        user: "system.user.admin"
        val: false
    }
 */
export default class ObjectModel extends BaseModel {
  public readonly identifier: string = '';
  public readonly val: any = '';
  public readonly ack: boolean = false;
  public readonly ts: number = 0;
  public readonly q: number = 0;
  public readonly from: string = '';
  public readonly user: string = '';
  public readonly lc: number = 0;

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: Partial<ObjectModel>) {
    super();

    this.update(data);
  }

  public update(data: Partial<ObjectModel>): void {
    super.update(data);
  }
}
