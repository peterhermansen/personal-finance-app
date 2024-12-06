export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
        <title>Personl Finance</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
