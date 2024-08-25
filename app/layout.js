import "@/app/ui/global.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{'${lusitana.classNamte} antialised'}">{children}</body>
    </html>
  );
}
