import { Provider } from "mobx-react";
import { StyleRoot } from "radium";
import Head from 'next/head'

import DataStore from "../stores/DataStore";

//TODO: add analytics like this: https://github.com/zeit/next.js/issues/160#issuecomment-330204336

export default ({ children, title = "Default title" }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Provider DataStore={DataStore}>
            <StyleRoot>
                <header>
                    <h1>Header</h1>
                </header>
                    { children }
                <footer>
                    <h6>Footer</h6>
                </footer>
            </StyleRoot>
        </Provider>
    </div>
)