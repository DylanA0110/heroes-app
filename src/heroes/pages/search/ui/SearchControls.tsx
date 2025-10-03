import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Grid, Plus, Search, SortAsc } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { Slider } from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

export const SearchControls = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const input = useRef<HTMLInputElement>(null);
  const activeAccordion = searchParams.get('active-accordion') ?? '';
  const strength = Number(searchParams.get('strength')) ?? 0;
  const setQueryParams = (name: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(name, value);
      return prev;
    });
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = input.current?.value ?? '';
      setQueryParams('name', value);
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            ref={input}
            placeholder="Search heroes, villains, powers, teams..."
            className="bg-white pl-12 h-12 text-lg"
            onKeyDown={handleKeyDown}
            defaultValue={searchParams.get('name') ?? ''}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            variant={
              activeAccordion === 'advanced-filters' ? 'default' : 'outline'
            }
            className="h-12"
            onClick={() => {
              if (activeAccordion === 'advanced-filters') {
                setQueryParams('active-accordion', '');
                // setSearchParams((prev) => {
                //   prev.delete('active-accordion');
                //   return prev;
                // });
                return;
              }
              setQueryParams('active-accordion', 'advanced-filters');
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Button variant="outline" className="h-12">
            <SortAsc className="h-4 w-4 mr-2" />
            Sort by Name
          </Button>

          <Button variant="outline" className="h-12">
            <Grid className="h-4 w-4" />
          </Button>

          <Button className="h-12">
            <Plus className="h-4 w-4 mr-2" />
            Add Character
          </Button>
        </div>
      </div>
      <Accordion type="single" collapsible value={activeAccordion}>
        <AccordionItem value="advanced-filters">
          {/* <AccordionTrigger>Is it accessible?</AccordionTrigger> */}
          <AccordionContent>
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Advanced Filters</h3>
                <Button variant="ghost">Clear All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Team</label>
                  <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    All teams
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    All categories
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Universe</label>
                  <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    All universes
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    All statuses
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">
                  Minimum Strength: {strength}/10
                </label>
                <Slider
                  defaultValue={[strength]}
                  onValueChange={(value) =>
                    setQueryParams('strength', value[0].toString())
                  }
                  max={10}
                  step={1}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
