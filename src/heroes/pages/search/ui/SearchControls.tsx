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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
  const handleClearAll = () => {
    setSearchParams((prev) => {
      // Lista de filtros que querés limpiar
      prev.delete('team');
      prev.delete('category');
      prev.delete('universe');
      prev.delete('status');
      prev.delete('strength');
      prev.delete('name');
      prev.delete('active-accordion'); // opcional, si querés cerrar el accordion
      return prev;
    });
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
                <Button variant="ghost" onClick={handleClearAll}>
                  Clear All
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Team</label>
                  {/* Team */}
                  <Select
                    value={searchParams.get('team') ?? '__all__'}
                    onValueChange={(value) => {
                      if (value === '__all__') {
                        setSearchParams((prev) => {
                          prev.delete('team');
                          return prev;
                        });
                      } else {
                        setQueryParams('team', value);
                      }
                    }}
                  >
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All teams" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__all__">All teams</SelectItem>
                      <SelectItem value="Vengadores">Vengadores</SelectItem>
                      <SelectItem value="Liga de la Justicia">
                        Liga de la Justicia
                      </SelectItem>
                      <SelectItem value="Solo">Solo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  {/* Category */}
                  <Select
                    value={searchParams.get('category') ?? '__all__'}
                    onValueChange={(value) => {
                      if (value === '__all__') {
                        setSearchParams((prev) => {
                          prev.delete('category');
                          return prev;
                        });
                      } else {
                        setQueryParams('category', value);
                      }
                    }}
                  >
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__all__">All categories</SelectItem>
                      <SelectItem value="Hero">Heroes</SelectItem>
                      <SelectItem value="Villain">Villanos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Universe</label>
                  {/* Universe */}
                  <Select
                    value={searchParams.get('universe') ?? '__all__'}
                    onValueChange={(value) => {
                      if (value === '__all__') {
                        setSearchParams((prev) => {
                          prev.delete('universe');
                          return prev;
                        });
                      } else {
                        setQueryParams('universe', value);
                      }
                    }}
                  >
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All universes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__all__">All universes</SelectItem>
                      <SelectItem value="Marvel">Marvel</SelectItem>
                      <SelectItem value="DC">DC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  {/* Status */}
                  <Select
                    value={searchParams.get('status') ?? '__all__'}
                    onValueChange={(value) => {
                      if (value === '__all__') {
                        setSearchParams((prev) => {
                          prev.delete('status');
                          return prev;
                        });
                      } else {
                        setQueryParams('status', value);
                      }
                    }}
                  >
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="All statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__all__">All statuses</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
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
