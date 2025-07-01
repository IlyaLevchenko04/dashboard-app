import { MetricCard } from '@/components/MetricCard';
import { OVERVIEW_DATA } from '@/shared/constants/mock-data';

export const Overview = () => (
  <div>
    <h1 className="!mb-[24px] font-bold">Overview</h1>

    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[16px]">
      {OVERVIEW_DATA.map(item => (
        <li key={item.id} className="w-full h-full">
          <MetricCard data={item} />
        </li>
      ))}
    </ul>
  </div>
);
