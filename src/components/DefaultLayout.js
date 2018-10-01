import Head from 'next/head'

export default ({children, title = "Default title"}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        </Head>
        <header>
            <h1>Header</h1>
        </header>
        {children}
        <footer>
            <h6>Footer</h6>
        </footer>
    </div>
)