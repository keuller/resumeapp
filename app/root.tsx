import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from '~/global.css';

export const links = () => [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;300;400;500;600;700;800&display=swap' },
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'icon', href: '/icons/logo.svg', type: 'image/svg+xml' }
]

// export async function loader() {
//     try {
//         await db.select().from()
//         console.log('Database connection was initialized');
//         return json({}, { status: 200 });
//     } catch(err) {
//         const error = (err as Error).message;
//         console.error('[ERROR]', error);
//         return json({ error }, { status: 500 })
//     }
// }

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
