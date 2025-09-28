import { heroApi } from '../api/hero.api';
import type { HeroesResponse } from '../types/get-heroe.response';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (
  page: number,
  limit: number = 6,
  category: string = 'all'
): Promise<HeroesResponse> => {
  if (isNaN(page)) page = 1;

  if (isNaN(limit)) limit = 6;

  const { data } = await heroApi.get<HeroesResponse>('/', {
    params: {
      limit: limit,
      offset: (page - 1) * limit,
      category: category,
    },
  });
  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));
  return {
    ...data,
    heroes: heroes,
  };
};
