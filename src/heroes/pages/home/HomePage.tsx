import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { useHeroSummary } from '@/heroes/hooks/useHeroSummary';
import { usePaginatedHero } from '@/heroes/hooks/usePaginatedHero';
import { useQueryParameters } from '@/heroes/hooks/useQueryParameters';

export const HomePage = () => {
  const { page, limit, selectedTab, setSearchParams, category } =
    useQueryParameters();

  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);

  const { data: summary } = useHeroSummary();

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHeroes"
          description="Descubre, explora y administra super heroes y villanos"
        />
        <CustomBreadcrumbs currentPage="Super Heroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'all');
                  prev.set('category', 'all');
                  prev.set('page', '1');
                  return prev;
                })
              }
            >
              All Characters ({summary?.totalHeroes ?? 0})
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'favorites');
                  return prev;
                })
              }
              value="favorites"
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'heroes');
                  prev.set('category', 'hero');
                  prev.set('page', '1');
                  return prev;
                })
              }
              value="heroes"
            >
              Heroes ({summary?.heroCount ?? 0})
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'villains');
                  prev.set('category', 'villain');
                  prev.set('page', '1');
                  return prev;
                })
              }
              value="villains"
            >
              Villains ({summary?.villainCount ?? 0})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1 className="text-lg font-medium mb-4">Todos los personajes</h1>
            <HeroGrid heroes={heroesResponse?.heroes || []} />
          </TabsContent>
          <TabsContent value="favorites">
            <h1 className="text-lg font-medium mb-4">Favoritos</h1>
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="heroes">
            <h1 className="text-lg font-medium mb-4">Heroes</h1>
            <HeroGrid heroes={heroesResponse?.heroes || []} />
          </TabsContent>
          <TabsContent value="villains">
            <h1 className="text-lg font-medium mb-4">Villains</h1>
            <HeroGrid heroes={heroesResponse?.heroes || []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages || 1} />
      </>
    </>
  );
};
