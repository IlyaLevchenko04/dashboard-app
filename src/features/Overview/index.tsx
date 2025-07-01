import { Header } from '@/components/Header';
import { MetricCard } from '@/components/MetricCard';
import { OVERVIEW_DATA } from '@/shared/constants/mock-data';

export const Overview = () => (
  <div>
    <Header className="!mb-[24px]">Overview</Header>

    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[16px]">
      {OVERVIEW_DATA.map(item => (
        <li key={item.id} className="w-full h-full">
          <MetricCard data={item} />
        </li>
      ))}
    </ul>
  </div>
);
