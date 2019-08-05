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

                        <td>test1</td>
                        <td>test2</td>
                        <td>test3</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
}

function ResponseContents() {
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

                        <td>restest1</td>
                        <td>restest2</td>
                        <td>restest3</td>
                    </tr>

                </tbody>
            </Table>
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
