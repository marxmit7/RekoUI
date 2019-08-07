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
                        <td>file</td>
                        <td>image file</td>
                        <td>image should contain single face  </td>
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
                        <td>Array</td>
                        <td>
                            contains dictionary of POST Request results saved in database
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
                        <td>Face id </td>
                    </tr>
                    <tr>
                        <td>fileurl</td>
                        <td>string</td>
                        <td>
                            url of the face image file stored
                        </td>
                    </tr>
                    <tr>
                        <td>created_on</td>
                        <td>Date</td>
                        <td>When the POST Request was made</td>
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
                        <td>"success"</td>
                        <td>string</td>
                        <td>Returns a string when successfully embedding is created</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
const GETResExample = JSON.stringify(
    {
        "data": [
            {
                "id": "f5a1837a-7b82-4e3b-9bc8-b5028a42117c",
                "title": "Amit Kumar",
                "fileurl": "/media/face/f5a1837a7b824e3b9bc8b5028a42117c.jpg",
                "created_on": "2019-06-23T01:45:08.696556Z"
            },
            {
                "id": "7e463eae-b832-47dd-95d1-7007a78fd734",
                "title": "Narendra Modi",
                "fileurl": "/media/face/7e463eaeb83247dd95d17007a78fd734.jpg",
                "created_on": "2019-06-23T01:45:31.072789Z"
            }
        ]
    },
    null,
    2
);

const POSTResExample = JSON.stringify(
    "success",
    null,
    2
);
const GETcurlValue = "curl  http://127.0.0.1:8000/api/embed/ ";
const POSTcurlValue = 'curl -i -X POST -H "Content-Type: multipart/form-data" -F "file=@ <path to image file (filename should be the faceid)> "  http://127.0.0.1:8000/api/embed/ ';
const GETpythonValue =
    'import requests \nurl =  "http://127.0.0.1:8000/api/simface/" \nresponse = requests.get(url)\nprint(response.text)';
const POSTpythonValue = "import requests \nImagePath = <path to image file> \nurl =  \"http://127.0.0.1:8000/api/embed/\" \nfiles = {'file': open(ImagePath, 'rb')}\nresponse = requests.post(url, files=files)\nprint(response.text)";
const GETnodeValue = "";
const POSTnodeValue ="";

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
