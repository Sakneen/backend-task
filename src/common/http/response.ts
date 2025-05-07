export type HTTPResponse<T> = {
  data: T;
};

export type PaginatedHTTPResponse<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
};
