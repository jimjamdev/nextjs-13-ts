export function searchParamsToObject(searchParams?: string) {
  if (!searchParams) return null;
  const params = Object.fromEntries(new URLSearchParams(searchParams));
  return JSON.stringify(params);
}
