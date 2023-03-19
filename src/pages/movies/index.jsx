import Head from "next/head";
import { getMovies } from "../../services/movieService";

export default ({movies}) => {
    console.log(' movies render');
    return (
        <div>
            <Head>
                <title>电影</title>
            </Head>
            <h1>电影列表</h1>
            <ul>
                {movies.map( (m,i) => (
                    <li key={m._id}>
                        <a href={`/movies/${m._id}`}>
                            <span>{i+1}、{m.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// 开启SSG
//该函数只可能在服务端运行
//该函数运行在组件渲染之前
//该函数只能在build期间运行
//返回的对象中的props属性，将被混合到整个组件属性
export async function getStaticProps() {
    const resp = await getMovies(1, 20);
    return {
        props: {
            movies: resp.data
        }
    };
}