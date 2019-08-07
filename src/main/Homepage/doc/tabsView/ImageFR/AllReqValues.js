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
                        <td>image</td>
                        <td>Image containing faces</td>
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
                        <td>Faces</td>
                        <td>Dictionary</td>
                        <td>contains all the faces of found in the image</td>
                    </tr>
                    <tr>
                        <td>FaceID</td>
                        <td>String</td>
                        <td>contains the name of the face</td>
                    </tr>
                    <tr>
                        <td>Bounding Boxes</td>
                        <td>Dictionary</td>
                        <td>contains bounding box pixel values</td>
                    </tr>
                    <tr>
                        <td>Facial Expression</td>
                        <td>Dictionary</td>
                        <td>
                            Probability of the facial expression of the detected
                            face
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

const POSTResExample = JSON.stringify(
    {
        Faces: {
            "Amit Kumar": {
                "Bounding Boxes": {
                    top: 72,
                    bottom: 255,
                    left: 72,
                    right: 233
                },
                "Facial Expression": {
                    Angry: 0.0339513682,
                    Fear: 5.4036489e-5,
                    Happy: 0.949313819,
                    Sad: 0.000926567533,
                    Surprise: 0.0151739847,
                    Neutral: 0.0005800933
                }
            }
        }
    },
    null,
    2
);

const POSTcurlValue =
    'curl -i -X POST -H "Content-Type: multipart/form-data " -F "file=@<path to image file> " http://127.0.0.1:8000/api/image/';
const POSTpythonValue =
    "import requests \nimagePath = <path to image file> \nurl =  \"http://127.0.0.1:8000/api/image/\" \nfiles = {'file': open(imagePath, 'rb') }\nresponse = requests.post(url, files=files)\nprint(response.text)";
const POSTnodeValue = "";

export {
    POSTResExample,
    POSTReqTable,
    POSTnodeValue,
    POSTpythonValue,
    POSTResTable,
    POSTcurlValue
};
