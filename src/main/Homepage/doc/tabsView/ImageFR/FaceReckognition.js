import React from "react";
import { GETReqRes, GETSnippetTab } from "../AllTabs";
import {
    GETResExample,
    GETReqTable,
    GETnodeValue,
    GETpythonValue,
    GETResTable,
    GETcurlValue
} from "./AllReqValues";

function YouTubeProcessing() {
    return (
        <div>
            <b>POST</b>
            <br />
            /image
            <GETReqRes
                ReqVal={GETReqTable()}
                ResVal={GETResTable()}
                ResExample={GETResExample}
            />
            <GETSnippetTab
                curlValue={GETcurlValue}
                pythonValue={GETpythonValue}
                nodeValue={GETnodeValue}
            />
        </div>
    );
}

export default YouTubeProcessing;
