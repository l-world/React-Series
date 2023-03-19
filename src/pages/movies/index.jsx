import Head from "next/head";
import { getMovies } from "../../services/movieService";

export default () => {
    console.log(' movies render')
    getMovies().then(resp => {
        console.log(resp);
    });
    return (
        <div>
            <Head>
                <title>电影</title>
            </Head>
            <h1>电影首页</h1>
        </div>
    )
}