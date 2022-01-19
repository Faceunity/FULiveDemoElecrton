export const digitizer = (
  scope: number,
  realityScope: number,
  value: number
) => {
  return Math.floor((scope * value) / realityScope);
};
export const reserveDigitizer = (
  scope: number,
  realityScope: number,
  value: number
) => {
  // 显示值转换实际值
  return (realityScope * value) / scope;
};
export const bothDigitizer = (
  scope: number, // 50
  realityScope: number, // 实际对应的最大值1
  origin: number, // 0
  realityOrigin: number, // 实际是0.5
  value: number //
) => {
  return Math.floor(
    ((scope - origin) * (value - realityScope)) / (realityScope - realityOrigin)
  );
};
export const bothReserveDigitizer = (
  scope: number, // 50
  realityScope: number, // 实际对应的最大值1
  origin: number, // 0
  realityOrigin: number, // 实际是0.5
  value: number //
) => {
  return (
    Math.floor(
      (((realityScope - realityOrigin) * (value - origin)) / (scope - origin) +
        realityOrigin) *
        100
    ) / 100
  );
};
