import type { Hero } from "./hero.interface";

export interface HeroesResponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}


