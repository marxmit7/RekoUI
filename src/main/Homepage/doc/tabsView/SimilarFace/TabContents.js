import React from "react";
import Table from "react-bootstrap/Table";

function GETRequestContents() {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

function POSTRequestContents() {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>file</td>
                        <td>image file</td>
                        <td>Reference face whose face is to be compared </td>
                    </tr>
                    <tr>
                        <td>compareImage</td>
                        <td>image file</td>
                        <td>
                            Image containing faces with which reference face is
                            to be compared{" "}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
function GETResponseContents() {
    const ResExample = JSON.stringify(
        {
            data: [
                {
                    id: "og820jy6ptueust0w4qpis6swwdy5k",
                    title: "og820jy6ptueust0w4qpis6swwdy5k",
                    similarwith: "2",
                    created_on: "2019-07-30T11:28:18.912067Z"
                },
                {
                    id: "rwcx7frpytti65pujm9k6exnfmystq",
                    title: "rwcx7frpytti65pujm9k6exnfmystq",
                    similarwith: "2",
                    created_on: "2019-07-30T11:34:10.798031Z"
                }
            ]
        },
        null,
        2
    );
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>data</td>
                        <td>Array</td>
                        <td>
                            Contains the detail of the particular POST request
                            result
                        </td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>String</td>
                        <td>ID of the request</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>string</td>
                        <td>title of the reference image file</td>
                    </tr>
                    <tr>
                        <td>similarwith</td>
                        <td>integer</td>
                        <td>
                            face id with which it is similar in compare image
                        </td>
                    </tr>
                    <tr>
                        <td>created_on</td>
                        <td>Date</td>
                        <td>When the POST Request was made</td>
                    </tr>
                </tbody>
            </Table>
            <div>
                Response Example <br />
                {ResExample}
            </div>
        </div>
    );
}
function POSTResponseContents() {
    const ResExample = JSON.stringify(
        ["fuqlvwwht438iydup5i7ymfcuay9u5", 2],
        null,
        2
    );
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>string</td>
                        <td>ID of the POST Request</td>
                    </tr>
                    <tr>
                        <td>Integer</td>
                        <td>Integer</td>
                        <td>
                            ID of the face with which it is similar in compare
                            Image
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div>
                Response Example <br />
                {ResExample}
            </div>
        </div>
    );
}
function GETCurlContents() {
    const value = "curl  http://127.0.0.1:8000/api/simface/ ";
    return <div>{value}</div>;
}
function GETPythonContents() {
    const value =
        'import requests \nurl =  "http://127.0.0.1:8000/api/simface/" \nresponse = requests.get(url)\nprint(response.text)';
    return (
        <div>
            <pre>
                <code>{value}</code>
            </pre>
        </div>
    );
}
function GETNodeContents() {
    return (
        <div>
            Node things
            <div />
        </div>
    );
}
function POSTCurlContents() {
    const value =
        'curl -i -X POST -H "Content-Type: multipart/form-data" -F "file=@ <path to reference image>" -F "compareImage=@ <path to compare Image>"  http://127.0.0.1:8000/api/simface/ ';
    return <div>{value}</div>;
}
function POSTPythonContents() {
    const value =
        "import requests \nreferenceImagePath = <path to reference image file> \ncompareImagePath = <path to compare image file> \nurl =  \"http://127.0.0.1:8000/api/simface/\" \nfiles = {'file': open(referenceImagePath, 'rb'),'compareImage':open(compareImagePath,'rb')}\nresponse = requests.post(url, files=files)\nprint(response.text)";
    return (
        <div>
            <pre>
                <code>{value}</code>
            </pre>
        </div>
    );
}
function POSTNodeContents() {
    return (
        <div>
            Node things
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
