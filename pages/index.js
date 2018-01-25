import React from "react";
import Radium, { Style } from "radium";
import { inject, observer } from 'mobx-react'

import DefaultLayout from '../src/components/DefaultLayout'

const styleRules = {
    "p": {
        color: "red"
    }
};

const mediaStyle = {
    color: "blue",
    "@media (max-width: 1000px)": {
        color: "red"
    }
};

const HelloFromMobx = inject("DataStore")(observer(({DataStore}) => {
    return <p>Hello from MobX: {DataStore.getData()}!</p>
}));

const HelloFromRadium = Radium(() => {
    return <div style={mediaStyle}>Hello from Radium</div>
});

const HelloFromInitialProps = ({message}) => {
    return <div>{message}</div>
};

const InitialProps = async () => {
    return {
        messageFromInitialProps: "hello-from-initial-props"
    }
};

const Index = ({messageFromInitialProps}) =>
    <DefaultLayout>
        <Style rules={styleRules} />
        <div>
            <HelloFromMobx/>
            <HelloFromRadium/>
            <HelloFromInitialProps message={messageFromInitialProps}/>
        </div>
    </DefaultLayout>;



Index.getInitialProps = InitialProps;

export default Index;
