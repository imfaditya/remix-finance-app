import type { LoaderArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

export default function NotFoundPage() {
  const data = useLoaderData();
  return (
    <>
      <p>Not Found Page on Routes : <b>{ data }</b></p>
    </>
  )
}

export function loader({ params } : LoaderArgs) {
  return params["*"];
}