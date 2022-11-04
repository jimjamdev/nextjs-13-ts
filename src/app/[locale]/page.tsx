import { Button } from '~ui/atoms/button';
import { useRef } from "react";

export default function Page({ params, searchParams }: { params: string; searchParams: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return <div ref={ref}><h1>Home</h1>{JSON.stringify(params)} {JSON.stringify(searchParams)}<Button>Button</Button></div>;
}
