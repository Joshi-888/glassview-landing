import { ChevronRight } from "lucide-react";

interface MovieRowProps {
  title: string;
  movies: { title: string; image: string; year?: string }[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4 px-2">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {movies.map((movie, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-36 md:w-44 group cursor-pointer"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[2/3] mb-2">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold text-foreground truncate">{movie.title}</p>
                {movie.year && <p className="text-xs text-muted-foreground">{movie.year}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
