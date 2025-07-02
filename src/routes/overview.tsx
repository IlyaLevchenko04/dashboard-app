import { Overview } from '@/features/Overview';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/overview')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Overview />;
}
