import { Button } from '~ui/atoms/button';

export default function Page({ params, searchParams }: { params: string; searchParams: string }) {
  return <><h1>Home</h1>{JSON.stringify(params)} {JSON.stringify(searchParams)}<Button>Button</Button></>;
}
