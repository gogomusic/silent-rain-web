export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-foreground prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-p:text-foreground prose-a:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-li:text-foreground prose-td:text-foreground [&_li::marker]:text-foreground mx-auto w-full max-w-7xl p-5">
      {children}
    </div>
  );
}
