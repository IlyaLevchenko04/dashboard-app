import { Users } from '@/features/Users';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Users />;
}
