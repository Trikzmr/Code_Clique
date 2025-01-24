const express = require('express');
const router = express.Router();

router.get('/', baseapi);

async function baseapi(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mentor Connect - API Guide</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                }
                h1 {
                    text-align: center;
                    color: #4CAF50;
                }
                table {
                    width: 80%;
                    margin: 20px auto;
                    border-collapse: collapse;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    background: #fff;
                }
                th, td {
                    text-align: left;
                    padding: 12px;
                    border: 1px solid #ddd;
                }
                th {
                    background-color: #4CAF50;
                    color: white;
                }
                tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                tr:hover {
                    background-color: #f1f1f1;
                }
                p {
                    text-align: center;
                    margin: 10px 0;
                }
            </style>
        </head>
        <body>
            <h1>Mentor Connect</h1>
            <p><b>Base API Page</b></p>
            <p><b>Backend Guide</b></p>
            <table>
                <tr>
                    <th>API Name</th>
                    <th>API Address</th>
                    <th>API Description</th>
                </tr>
                <tr>
                    <td>RegisterUser</td>
                    <td>/RegisterUser</td>
                    <td>To register new users</td>
                </tr>
                <tr>
                    <td>Login</td>
                    <td>/LoginUser</td>
                    <td>To Login the users</td>
                </tr>
                <tr>
                    <td>AllUser</td>
                    <td>/AllUsers</td>
                    <td>To show the details of all users</td>
                </tr>
                 <tr>
                    <td>postData</td>
                    <td>/postdata</td>
                    <td>create a new project post</td>
                </tr>
                 <tr>
                    <td>getdata</td>
                    <td>/getdata</td>
                    <td>get all project detail </td>
                </tr>
            </table>
        </body>
        </html>
    `);
}

module.exports = router;
