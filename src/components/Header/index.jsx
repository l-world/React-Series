import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.css";
export default () => {
    const router = useRouter();
    const { id } = router.query; 
    return (
        <ul className={styles.header}>
            <li>
                <Link href="/">首页</Link>
            </li>
            <li>
                <Link href="/movies">电影页</Link>
            </li>
            {/* <li>
                <Link href="/movies/[id]" as={`/movies/${id}`}>电影详情页</Link>
            </li> */}
            <li>关于</li>
        </ul>
    )
}