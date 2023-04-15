import MovieCard from "@/components/MovieCard";
import isEmpty from "lodash/isEmpty";

const MovieList = ({ data, title }: { data: Record<string, any>; title: string }) => {
  if (isEmpty(data)) return null;

  const movies = () => data.map((movie) => <MovieCard key={movie.id} data={movie} />);

  return (
    <div className={"px-4 md:px-12 mt-4 space-y-8"}>
      <div>
        <p className={"text-white text-md md:text-xl lg:text-2xl font-semibold"}>{title}</p>
        <div className="grid grid-cols-4 gap-2">{movies()}</div>
      </div>
    </div>
  );
};

export default MovieList;
