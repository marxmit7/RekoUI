import React from "react";
import { GETSnippetTab, GETReqRes, POSTReqRes,POSTSnippetTab} from "./AllTabs";
function SimilarFace() {
    return (
        <div>
            <b>GET</b>
            <br />
            /simface
            <GETReqRes />
            <GETSnippetTab /> <br /> <br />
            <b>POST</b>
            <br />
            /simface
            <POSTReqRes />
            <POSTSnippetTab />
        </div>
    );
}

export default SimilarFace;
