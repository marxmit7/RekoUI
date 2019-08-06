import React from "react";
import { ReqRes, SnippetTab } from "./AllTabs";
function SimilarFace() {
    return (
        <div>
        <b>GET</b>
        <br />
        /simiface
            <ReqRes />
            <SnippetTab />
        </div>
    );
}

export default SimilarFace;
