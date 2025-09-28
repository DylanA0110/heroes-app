import { heroApi } from '../api/hero.api';
import type { Hero } from '../types/hero.interface';

const BASE_URL = import.meta.env.VITE_API_URL;
export const getHeroesAction = async (idSlug: string) => {
  const { data: heroes } = await heroApi.get<Hero>(`/${idSlug}`);

  return {
    ...heroes,
    image: `${BASE_URL}/images/${heroes.image}`,
  };
};
