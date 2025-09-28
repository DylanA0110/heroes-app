import type { HeroesResponse } from '../types/get-heroe.response';
import { HeroGridCard } from './HeroGridCard';

export const HeroGrid = ({ heroes }: { heroes: HeroesResponse['heroes'] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* Hero Card 1 - Superman */}

      {heroes.map((hero) => (
        <HeroGridCard key={hero.id} heroes={hero} />
      ))}
    </div>
  );
};
