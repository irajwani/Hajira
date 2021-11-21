import Head from 'next/head'
import Nav from "../nav"

const Main = ({children, router}) => {
    return (
        <main className="flex flex-col md:flex-row mx-auto max-w-full min-h-screen pt-12 px-4 bg-gray-200">
            <Head>
                <title>Hajira Maryam Mirza's personal page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav path={router.asPath}/>
            <div className="w-full md:w-4/5 mx-4">
                {children}
            </div>
            {/* Footer */}
        </main>
    )
}

export default Main;