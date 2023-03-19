import { useRouter } from 'next/router';

export default () => {
    const router = useRouter();
    const { query: { name,age,params} } = router
    console.log(name,age,params);
    return <h1>多段动态路由:{params}</h1>;
};