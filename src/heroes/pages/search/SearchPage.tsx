import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { useQuery } from '@tanstack/react-query';
import { searchHerosAction } from '@/heroes/actions/search-heros-actions';
import { useSearchParams } from 'react-router';
import { HeroGrid } from '@/heroes/components/HeroGrid';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const filters = Object.fromEntries(searchParams.entries());

  const { data: heroes = [] } = useQuery({
    queryKey: ['heroes', 'search', filters],
    queryFn: () => searchHerosAction(filters),
    staleTime: 1000 * 60 * 5,
  });

  if (!heroes) return <div>Cargando...</div>;

  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre, explora y administra super heroes y villanos"
      />
      <CustomBreadcrumbs
        currentPage="Buscador de Heroes"
        breadcrumbs={[
          { label: 'home', to: '/' },
          { label: 'home1', to: '/' },
        ]}
      />
      <HeroStats />
      {/* Filter and Search */}
      <SearchControls />
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
