import React from "react";

function GETRequestContents(props) {
    return (
        <div>
            {props.value}
        </div>
    );
}

function POSTRequestContents(props) {
    return (
        <div>
        {props.value}
        </div>
    );
}
function GETResponseContents(props) {

    return (
        <div>
        {props.value}
            <div>
                Response Example <br />
              <pre> {(props.ResExample)}</pre>
            </div>
        </div>
    );
}
function POSTResponseContents(props) {

    return (
        <div>
        {props.value}
            <div>
                Response Example <br />
                <pre> {(props.ResExample)}</pre>
            </div>
        </div>
    );
}
function GETCurlContents(props) {
    return <div>{props.value}</div>;
}
function GETPythonContents(props) {
        return (
        <div>
            <pre>
                <code>{props.value}</code>
            </pre>
        </div>
    );
}
function GETNodeContents(props) {
    return (
        <div>
            {props.value}
            <div />
        </div>
    );
}
function POSTCurlContents(props) {
    const value =props.value
    return <div>{value}</div>;
}
function POSTPythonContents(props) {
    const value =props.value
    return (
        <div>
            <pre>
                <code>{value}</code>
            </pre>
        </div>
    );
}
function POSTNodeContents(props) {
    return (
        <div>
            {props.value}
            <div />
        </div>
    );
}
export {
    GETRequestContents,
    POSTRequestContents,
    POSTResponseContents,
    GETResponseContents,
    POSTCurlContents,
    POSTPythonContents,
    POSTNodeContents,
    GETCurlContents,
    GETPythonContents,
    GETNodeContents
};
