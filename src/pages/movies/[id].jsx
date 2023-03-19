import { useRouter } from 'next/router';

export default () => {
    const router = useRouter();
    const { id } = router.query
    return <div>
        <h1>电影详情页, id:{id}</h1>
        <h2>{ Math.random() }</h2>
    </div>;
};