import {
  CardTypeEnum,
  TrendEnum,
  type OverviewDataEntity,
} from '@/shared/types/mock-data';
import {
  ArrowDown,
  ArrowUp,
  DollarSign,
  ShoppingCart,
  Users,
} from 'lucide-react';

interface Props {
  data: OverviewDataEntity;
}

const iconMap = {
  [CardTypeEnum.USERS]: <Users className="w-5 h-5 text-gray-500" />,
  [CardTypeEnum.DOLLAR_SIGN]: <DollarSign className="w-5 h-5 text-gray-500" />,
  [CardTypeEnum.SHOPPING_CART]: (
    <ShoppingCart className="w-5 h-5 text-gray-500" />
  ),
};

export const MetricCard: React.FC<Props> = ({ data }) => {
  const isPositive = data.trend === TrendEnum.TREND_UP;

  return (
    <div className="bg-white shadow-sm rounded-2xl px-[20px] py-[16px] w-full">
      <div className="flex items-center justify-between mb-[12px]">
        <span className="text-sm text-gray-500 font-medium">{data.title}</span>
        {iconMap[data.icon]}
      </div>

      <div className="text-[24px] font-semibold text-gray-800 leading-tight">
        {data.icon === 'dollar-sign'
          ? `$${data.value.toLocaleString()}`
          : data.value.toLocaleString()}
      </div>

      <div className="flex items-center mt-[8px]">
        {isPositive ? (
          <ArrowUp className="w-4 h-4 text-green-500 mr-[4px]" />
        ) : (
          <ArrowDown className="w-4 h-4 text-red-500 mr-[4px]" />
        )}
        <span
          className={`text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {data.changePerc}%
        </span>
      </div>
    </div>
  );
};
