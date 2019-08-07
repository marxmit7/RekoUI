import React from "react";
import { POSTReqRes, POSTSnippetTab } from "../AllTabs";
import {
    POSTResExample,
    POSTReqTable,
    POSTnodeValue,
    POSTpythonValue,
    POSTResTable,
    POSTcurlValue
} from "./AllReqValues";
function NSFWAPIs() {
    return (
        <div>
        <b>POST</b>
        <br />
        /nsfw
        <POSTReqRes
        ReqVal={POSTReqTable()}
        ResVal={POSTResTable()}
        ResExample={POSTResExample}
    />
    <POSTSnippetTab
        curlValue={POSTcurlValue}
        pythonValue={POSTpythonValue}
        nodeValue={POSTnodeValue}
    />
        </div>
    );
}

export default NSFWAPIs;
