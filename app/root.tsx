import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { db } from "./lib/db.server";
import { json } from "@remix-run/node";

import globalStyles from '~/global.css';

export const links = () => [
    { rel: 'stylesheet', href: globalStyles }
]

export async function loader() {
    try {
        await db.initialize();
        console.log('Database connection was initialized');
        return json({}, { status: 200 });
    } catch(err) {
        const error = (err as Error).message;
        console.error('[ERROR]', error);
        return json({ error }, { status: 500 })
    }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
