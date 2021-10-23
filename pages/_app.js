import './_app.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet='utf8'/>
                <title>EscowGame</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}