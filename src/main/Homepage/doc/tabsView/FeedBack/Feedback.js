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

function FeedbackNow() {
    return (
        <div>
            <b>GET</b>
            <br />
            /feedback
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
            /feedback
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

export default FeedbackNow;
