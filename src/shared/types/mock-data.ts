export interface OverviewDataEntity {
  id: string;
  title: string;
  value: number;
  changePerc: number;
  trend: 'up' | 'down';
  icon: 'users' | 'dollar-sign' | 'shopping-cart';
}
