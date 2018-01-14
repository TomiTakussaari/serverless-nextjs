import React from "react";
import { Style } from "radium";
import { inject, observer } from 'mobx-react'

import DefaultLayout from '../src/components/DefaultLayout'

const styleRules = {
    "p": {
        color: "red"
    }
};

const HelloMessage = inject("DataStore")(observer(({DataStore}) => {
    return <p>Welcome to next.js: {DataStore.getData()}!</p>
}));

export default () =>
    <DefaultLayout>
        <Style rules={styleRules} />
        <div>
            <HelloMessage/>
        </div>
    </DefaultLayout>
