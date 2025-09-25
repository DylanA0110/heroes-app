import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useState } from 'react';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page.action';
import { useQuery } from '@tanstack/react-query';

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'favorites' | 'heroes' | 'villains'
  >('all');

  const { data } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab('favorites')}
              value="favorites"
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab('heroes')} value="heroes">
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab('villains')}
              value="villains"
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1 className="text-lg font-medium mb-4">Todos los personajes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            <h1 className="text-lg font-medium mb-4">Favoritos</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            <h1 className="text-lg font-medium mb-4">Heroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            <h1 className="text-lg font-medium mb-4">Villains</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
