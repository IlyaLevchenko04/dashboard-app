export enum TrendEnum {
  TREND_UP = 'up',
  TREND_DOWN = 'down',
}

export enum CardTypeEnum {
  USERS = 'users',
  DOLLAR_SIGN = 'dollar-sign',
  SHOPPING_CART = 'shopping-cart',
}

export interface OverviewDataEntity {
  id: string;
  title: string;
  value: number;
  changePerc: number;
  trend: TrendEnum;
  icon: CardTypeEnum;
}
