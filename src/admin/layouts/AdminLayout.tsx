import { Outlet } from 'react-router';

export const AdminLayout = () => {
  return (
    <div className="bg-indigo-500">
      <Outlet />
    </div>
  );
};
