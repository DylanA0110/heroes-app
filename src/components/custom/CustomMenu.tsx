import { Link, useLocation } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { cn } from '@/lib/utils';

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string): boolean => {
    return path === pathname;
  };
  return (
    <NavigationMenu className='py-5'>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive('/') && 'bg-slate-200', 'p-2 rounded-md')}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive('/search') && 'bg-slate-200',
              'p-2 rounded-md'
            )}
          >
            <Link to="/search">Buscar SuperHeores</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
