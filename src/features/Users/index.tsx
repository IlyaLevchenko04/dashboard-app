import { useState } from 'react';
import { Header } from '@/components/Header';
import { USERS_DATA } from '@/shared/constants/mock-data';
import type { User } from '@/shared/types/mock-data';

export const Users = () => {
  const [users, setUsers] = useState<User[]>(USERS_DATA);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSortByName = () => {
    const sorted = [...users].sort((a, b) => {
      if (a.name < b.name) return sortAsc ? -1 : 1;
      if (a.name > b.name) return sortAsc ? 1 : -1;
      return 0;
    });
    setUsers(sorted);
    setSortAsc(!sortAsc);
  };

  return (
    <div className="p-6">
      <Header>Users</Header>
      <div className="overflow-x-auto w-full">
        <table className="min-w-[900px] w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">ID</th>
              <th
                className="px-4 py-2 border-b text-left cursor-pointer select-none"
                onClick={handleSortByName}
              >
                Name
                <span className="ml-1 text-xs">{sortAsc ? '▲' : '▼'}</span>
              </th>
              <th className="px-4 py-2 border-b text-left">Email</th>
              <th className="px-4 py-2 border-b text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{user.id}</td>
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
