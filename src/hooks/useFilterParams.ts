import { useSearchParams } from 'react-router';

export const ALL_VALUE = '__all__';

interface UseFilterParamsResult {
  get: (param: string) => string | null;
  set: (param: string, value: string) => void;
  remove: (param: string) => void;
  setOrDelete: (param: string, value: string) => void;
  clearMany: (params: string[]) => void;
  searchParams: URLSearchParams;
}

export const useFilterParams = (): UseFilterParamsResult => {
  const [searchParams, setSearchParams] = useSearchParams();

  const commit = (mutator: (prev: URLSearchParams) => void) => {
    setSearchParams((prev) => {
      mutator(prev);
      return prev;
    });
  };

  const get = (param: string) => searchParams.get(param);

  const set = (param: string, value: string) => {
    commit((prev) => prev.set(param, value));
  };

  const remove = (param: string) => {
    commit((prev) => prev.delete(param));
  };

  const setOrDelete = (param: string, value: string) => {
    if (value === ALL_VALUE) remove(param);
    else set(param, value);
  };

  const clearMany = (params: string[]) => {
    commit((prev) => {
      params.forEach((p) => prev.delete(p));
    });
  };

  return { get, set, remove, setOrDelete, clearMany, searchParams };
};
