import { useRouter } from 'next/router';
import { getMovie, getMovies } from "../../services/movieService";

export default ({movie}) => {
    const router = useRouter();
    if(router.isFallback){
        return <h1>Loading</h1>
    }
    return <div>
        <h1>{movie.name}——{movie.ename}</h1>
        <p>{movie.intro}</p>
    </div>;
};

export async function getStaticProps({params}){
    const resp = await getMovie(params.id);
    return {
        props:{
            movie: resp.data
        }
    }
}

// 该函数用于得到有哪些可能出现的id
export async function getStaticPaths(){
    const resp = await getMovies();
    const paths = resp.data.map( m => {
        return {params: {
          id: m._id
        }}
    })
    return {
        paths,
        fallback:true
    }
}