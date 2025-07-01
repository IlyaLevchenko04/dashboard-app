import { Link } from '@tanstack/react-router';

const LINKS = [
  {
    path: '/overview',
    text: 'Overview',
  },
  {
    path: '/settings',
    text: 'Settings',
  },
  {
    path: '/users',
    text: 'Users',
  },
];

export const Sidebar = () => (
  <nav className="h-full border-r-[1px] border-r-gray-300 flex flex-col gap-[16px] px-[24px] py-[36px]">
    {LINKS.map(item => (
      <Link
        key={item.path}
        to={item.path}
        className="h-fit hover:opacity-[0.5] transition-all [&.active]:opacity-[0.5]"
      >
        {item.text}
      </Link>
    ))}
  </nav>
);
