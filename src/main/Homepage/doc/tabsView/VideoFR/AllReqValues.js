import React from "react";
import Table from "react-bootstrap/Table";

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
                        <td>file</td>
                        <td>Video</td>
                        <td>Any video file</td>
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
                        <td>Faceid</td>
                        <td>Array</td>
                        <td>
                            Time interval of the occurence of the corresponding
                            faceid
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

const POSTResExample = JSON.stringify(
    {
        face_id_1: [[0.3, 2.0], [0.8, 8.51], [22.22, 25.53], [28.63, 31.43]],
        face_id_2: [
            [0.1, 0.7],
            [8.61, 10.41],
            [11.31, 12.51],
            [12.81, 22.12],
            [25.63, 28.53],
            [35.84, 36.24]
        ]
    },
    null,
    2
);

const POSTcurlValue =
    'curl -i -X POST -H "Content-Type: multipart/form-data " -F "file=@<path to video file> " http://127.0.0.1:8000/api/video/';
const POSTpythonValue =
    "import requests \nvideoPath = <path to video file> \nurl =  \"http://127.0.0.1:8000/api/video/\" \nfiles = {'file': open(videoPath, 'rb') }\nresponse = requests.post(url, files=files)\nprint(response.text)";
const POSTnodeValue = "";

export {
    POSTResExample,
    POSTReqTable,
    POSTnodeValue,
    POSTpythonValue,
    POSTResTable,
    POSTcurlValue
};
