import React from "react";
import Table from "react-bootstrap/Table";

function RequestContents() {
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

function ResponseContents() {
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
            ],
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
            <div>{ResExample}</div>
        </div>
    );
}
function CurlContents() {
    return (
        <div>
            curl things
            <div />
        </div>
    );
}
function PythonContents() {
    return (
        <div>
            python things
            <div />
        </div>
    );
}
function NodeContents() {
    return (
        <div>
            Node things
            <div />
        </div>
    );
}
export {
    RequestContents,
    ResponseContents,
    CurlContents,
    PythonContents,
    NodeContents
};
