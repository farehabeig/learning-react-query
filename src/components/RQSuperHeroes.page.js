import { useQuery } from "react-query";
import axios from "axios";
export const RQSuperHeroesPage = () => {
    const fetchSuperHeroes = () => {
        return axios.get("http://localhost:4000/superheroes");
    };
    // Requires two arguments , one a unique key, second a function that returns a promise

    const { isLoading, isFetching, data, isError, error, refetch } = useQuery("super-heroes", fetchSuperHeroes, {
        enabled: false
    });

    if (isLoading || isFetching) {
        return <h2>Loading ...</h2>;
    }
    if (isError) {
        return <p>{error.message}</p>;
    }
    return (
        <>
            <h2>React Query Super Heroes Page</h2>
            <button onClick={refetch}> Fetch heroes</button>
            {data?.data.map((hero) => {
                return <div key={hero.name}> {hero.name}</div>;
            })}
        </>
    );
};
