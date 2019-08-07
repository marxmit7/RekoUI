import React from "react";
import Table from "react-bootstrap/Table";

function GETReqTable() {
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

function POSTReqTable() {
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
                        <td>id</td>
                        <td>Integer</td>
                        <td>id of the object saved in the database </td>
                    </tr>
                    <tr>
                        <td>suggestedName</td>
                        <td>string</td>
                        <td>Name suggested by user </td>
                    </tr>
                    <tr>
                        <td>upvote</td>
                        <td>integer</td>
                        <td>upvote = previous upvote of the id + 1</td>
                    </tr>
                    <tr>
                        <td>downvote</td>
                        <td>upvote</td>
                        <td>downvote = previous downvote of the id + 1</td>
                    </tr>
                    <tr>
                    <td>feedback_id</td>
                    <td>String</td>
                    <td>Object id of the embed model (Django) saved in database whose newname is to be suggested or upvote/downvote</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

function GETResTable() {
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
                        <td>Array containing only 1 element</td>
                        <td>
                            Contains the detail of the particular suggestedName
                            of the embedding
                        </td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>String</td>
                        <td>ID of the request</td>
                    </tr>
                    <tr>
                        <td>suggestedName</td>
                        <td>string</td>
                        <td>Name suggested by user</td>
                    </tr>
                    <tr>
                        <td>upvote</td>
                        <td>Integer</td>
                        <td>No. of upvotes by user</td>
                    </tr>
                    <tr>
                        <td>downvote</td>
                        <td>Integer</td>
                        <td>No. of downvotes by user</td>
                    </tr>

                    <tr>
                        <td>feedback</td>
                        <td>string</td>
                        <td>
                            object id of the object saved in embed model of
                            Django
                        </td>
                    </tr>
                    <tr>
                        <td>url</td>
                        <td>string</td>
                        <td>
                            url of the image file containing the face of the
                            respective faceid
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

function POSTResTable() {
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
        </div>
    );
}
const GETResExample = JSON.stringify(
    {
        data: [
            {
                id: 75,
                suggestedName: "Barrack Obama",
                upvote: 7,
                downvote: 0,
                feedback: "a6783a3e-8ad5-4cd2-aff3-e1f4b4e55717"
            }
        ],
        fileurl: "/media/face/a6783a3e8ad54cd2aff3e1f4b4e55717.jpg"
    },
    null,
    2
);

const POSTResExample = JSON.stringify(
    ["fuqlvwwht438iydup5i7ymfcuay9u5", 2],
    null,
    2
);
const GETcurlValue = "curl  http://127.0.0.1:8000/api/feedback/ ";
const POSTcurlValue ="";
const GETpythonValue =
    'import requests \nurl =  "http://127.0.0.1:8000/api/feedback/" \nresponse = requests.get(url)\nprint(response.text)';
const POSTpythonValue =""
const GETnodeValue = "";
const POSTnodeValue = "";

export {
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
};
