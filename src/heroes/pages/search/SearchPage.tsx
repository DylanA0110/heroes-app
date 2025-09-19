import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre, explora y administra super heroes y villanos"
      />
      <CustomBreadcrumbs
        currentPage="Buscador de Heroes"
        breadCrumbs={[
          { label: 'home', to: '/' },
          { label: 'home1', to: '/' },
        ]}
      />
      <HeroStats />
      {/* Filter and Search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
