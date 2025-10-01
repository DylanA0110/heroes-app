import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import type { Hero } from '../types/hero.interface';
import { z } from 'zod';

interface FavoriteHeroContext {
  //State
  favorites: Hero[];
  favoriteCount: number;

  ///Methods
  toggleFavorite: (hero: Hero) => void;
  isFavorite: (hero: Hero) => boolean;
}

const fullHeroSchema = z.object({
  id: z.string(),
  name: z.string().default(''),
  slug: z.string().default(''),
  alias: z.string().default(''),
  powers: z.array(z.string()).default([]),
  description: z.string().default(''),
  image: z.string().default(''),
  universe: z.string().default(''),
  firstAppearance: z.string().default(''),
  occupation: z.string().default(''),
  base: z.string().default(''),
  height: z.string().default(''),
  weight: z.string().default(''),
  gender: z.string().default(''),
  race: z.string().default(''),
  strength: z.number().default(0),
  intelligence: z.number().default(0),
  speed: z.number().default(0),
  durability: z.number().default(0),
  power: z.number().default(0),
  combat: z.number().default(0),
  team: z.string().default(''),
  status: z.string().default(''),
  category: z.string().default(''),
});
const fullHeroArraySchema = z.array(fullHeroSchema);

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem('favorites');

  if (!favorites) return [];

  try {
    const parsed = fullHeroArraySchema.safeParse(JSON.parse(favorites));

    return parsed.success ? parsed.data : JSON.parse(favorites);
  } catch {
    return [];
  }
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage()
  );

  const toggleFavorite = (hero: Hero) => {
    const heroExists = favorites.find((fav) => fav.id === hero.id);

    if (heroExists) {
      const newFavorites = favorites.filter((fav) => fav.id !== hero.id);
      setFavorites(newFavorites);
      return;
    }
    setFavorites([...favorites, hero]);
  };

  const isFavorite = (hero: Hero) => {
    return favorites.some((fav) => fav.id === hero.id);
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        //State
        favorites: favorites,
        favoriteCount: favorites.length,
        //Methods
        toggleFavorite: toggleFavorite,
        isFavorite: isFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
