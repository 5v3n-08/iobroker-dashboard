import ToastStatusEnum from '../../../constants/ToastStatusEnum';

export default interface IToast {
  readonly type: ToastStatusEnum;
  readonly title: string;
  readonly message: string;
  readonly id: string;
}
