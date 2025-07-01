import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Sidebar } from '../components/Sidebar';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="flex w-[100vw] h-[100vh]">
        <aside className="grow-1 max-w-[180px]">
          <Sidebar />
        </aside>
        <main className="grow-6 p-[32px]">
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
}
