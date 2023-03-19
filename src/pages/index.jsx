import Head from 'next/head';
import Image from 'next/image'
import profilePic from '../public/8.jpg'
export default () => {
    console.log(' index render');
    return (
        <div>
            <Head>
                <title>首页</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>首页</h1>
            {/* <img src="../public/8.jpg" alt="" /> */}
            <Image
                src={profilePic}
                alt="Picture of the author"
            />
        </div>
    )
}