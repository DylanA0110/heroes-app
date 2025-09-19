import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre, explora y administra super heroes y villanos"
      />
      <HeroStats />
      {/* Filter and Search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
