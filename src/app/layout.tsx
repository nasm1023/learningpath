import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <header></header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
