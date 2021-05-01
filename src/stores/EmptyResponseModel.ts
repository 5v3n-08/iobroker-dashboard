import { BaseModel } from 'sjs-base-model';

export default class EmptyResponseModel extends BaseModel {
  constructor(data: Partial<EmptyResponseModel>) {
    super();
    this.update(data);
  }

  public update(data: Partial<EmptyResponseModel>): void {
    super.update(data);
  }
}
