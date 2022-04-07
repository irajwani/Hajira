import Head from 'next/head'
import Nav from "../nav"

const Main = ({children, router}) => {
    return (
        <main className="flex flex-col max-w-full min-h-screen p-8 mx-auto font-serif bg-paper md:flex-row">
            <Head>
                <title>Hajira Maryam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav path={router.asPath}/>
            <div className="w-full pt-8 md:pt-0 md:w-4/5 md:mx-4">
                {children}
            </div>
            {/* Footer */}
        </main>
    )
}

export default Main;