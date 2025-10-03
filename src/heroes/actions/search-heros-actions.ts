import { heroApi } from '../api/hero.api';
import type { Hero } from '../types/hero.interface';

interface options {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}
const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHerosAction = async (options: options = {}) => {
  const { name, team, category, universe, status, strength } = options;

  if (!name && !team && !category && !universe && !status && !strength) {
    return [];
  }
  const { data: heroes } = await heroApi.get<Hero[]>('/search', {
    params: { name, team, category, universe, status, strength },
  });

  return heroes.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));
};
