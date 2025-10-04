import { ALL_VALUE, useFilterParams } from '@/hooks/useFilterParams';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { ReactNode } from 'react';

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  param: string;
  label: string;
  allLabel: string;
  options: FilterOption[];
  className?: string;
  beforeAllOption?: ReactNode; // optional slot
}

export const FilterSelect = ({
  param,
  label,
  allLabel,
  options,
  className,
}: FilterSelectProps) => {
  const { get, setOrDelete } = useFilterParams();
  const current = get(param) ?? ALL_VALUE;

  return (
    <div className={`space-y-2 ${className ?? ''}`}>
      <label className="text-sm font-medium">{label}</label>
      <Select
        value={current}
        onValueChange={(value) => setOrDelete(param, value)}
      >
        <SelectTrigger className="h-10 w-full">
          <SelectValue placeholder={allLabel} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL_VALUE}>{allLabel}</SelectItem>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
