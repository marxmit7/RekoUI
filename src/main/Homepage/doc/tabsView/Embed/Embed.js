import React from "react";
import {
    GETSnippetTab,
    GETReqRes,
    POSTReqRes,
    POSTSnippetTab
} from "../AllTabs";
import {
    GETResExample,
    GETReqTable,
    GETnodeValue,
    GETpythonValue,
    GETResTable,
    GETcurlValue,
    POSTResExample,
    POSTpythonValue,
    POSTcurlValue,
    POSTReqTable,
    POSTResTable,
    POSTnodeValue
} from "./AllReqValues";

function EmbedNow() {
    return (
        <div>
            <b>GET</b>
            <br />
            /embed
            <GETReqRes
                ReqVal={GETReqTable()}
                ResVal={GETResTable()}
                ResExample={GETResExample}
            />
            <GETSnippetTab
                curlValue={GETcurlValue}
                pythonValue={GETpythonValue}
                nodeValue={GETnodeValue}
            />{" "}
            <br /> <br />
            <b>POST</b>
            <br />
            /embed
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

export default EmbedNow;
