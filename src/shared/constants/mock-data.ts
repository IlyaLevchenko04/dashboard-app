import {
  CardTypeEnum,
  TrendEnum,
  type OverviewDataEntity,
  type User,
} from '../types/mock-data';

export const OVERVIEW_DATA: OverviewDataEntity[] = [
  {
    id: '23902374',
    title: 'Total Users',
    value: 12584,
    changePerc: 4.8,
    trend: TrendEnum.TREND_UP,
    icon: CardTypeEnum.USERS,
  },
  {
    id: '90837503',
    title: 'Monthly Revenue',
    value: 58240,
    changePerc: 2.1,
    trend: TrendEnum.TREND_DOWN,
    icon: CardTypeEnum.DOLLAR_SIGN,
  },
  {
    id: '902475',
    title: 'New Orders',
    value: 1372,
    changePerc: 7.3,
    trend: TrendEnum.TREND_UP,
    icon: CardTypeEnum.SHOPPING_CART,
  },
];

export const USERS_DATA: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Manager' },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'User' },
  { id: 6, name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'Admin' },
  { id: 7, name: 'George Miller', email: 'george@example.com', role: 'User' },
  { id: 8, name: 'Hannah Lee', email: 'hannah@example.com', role: 'User' },
];
