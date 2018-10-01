import React from "react";

import DefaultLayout from '../src/components/DefaultLayout'

const mediaStyle = {
    color: "blue",
};

const Hello = () => {
    return <div style={mediaStyle}>Hello</div>
};

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
        <div>
            <Hello/>
            <HelloFromInitialProps message={messageFromInitialProps}/>
        </div>
    </DefaultLayout>;


Index.getInitialProps = InitialProps;

export default Index;
