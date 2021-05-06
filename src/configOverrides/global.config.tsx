// Header
export const globalConfig: IGlobalConfig = {
  header: {
    batteryIdentifier: 'fullybrowser.0.192_168_1_247.Info.batteryLevel',
    title: 'SmartHome',
    NoBrandIcon: true,
  },
};

interface IGlobalConfig {
  header?: {
    batteryIdentifier?: string;
    title?: string;
    NoBrandIcon?: boolean;
  };
}
