import { Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const TableComponent = () => {
    const [user, setUser] = useState([]);

    const userData = async ()=>{
        // eslint-disable-next-line no-unused-vars
        const allData = await axios({
            method: 'GET',
            header: 'Content-Type: application/json',
            url: `https://61d28de1da87830017e59623.mockapi.io/users/`
        }).then(response=>{
            setUser(response.data);
            console.log(user);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(() => {
       userData();
    }, ['']);

    return (
        <div>
            <Container className="mt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(result=>(
                                 <tr key={result.userid}>
                                    <td><img src={result.userimage} alt="person" style={{width: "50px"}} /></td>
                                    <td>{result.username}</td>
                                    <td>{result.useremail}</td>
                                    <td>{result.user_gender}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default TableComponent;