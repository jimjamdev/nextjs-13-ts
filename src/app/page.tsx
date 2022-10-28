import { Button } from '../ui/atoms/button';

export default function Page({ params, searchParams }: { params: any; searchParams: any }) {
  console.log('params', params, 'searchParams', searchParams);
  return <><h1>Home</h1><Button>Button</Button></>;
}
