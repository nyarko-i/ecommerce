interface CategoryHeaderProps {
  title: string;
}

export function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
