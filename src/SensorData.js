import React from 'react';
import { Table } from 'react-bootstrap/';
import { getFirestore, collection, query, orderBy, limit, onSnapshot } from "firebase/firestore"

class SensorData extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
        this.db = getFirestore();
        this.collection = collection(this.db,"hardware","deviceReadings", "F4:CF:A2:D0:39:D9");
        this.q = query(this.collection, orderBy("timestamp", "desc"), orderBy("counter", "desc"), limit(50));
    }

    componentDidMount(){
        onSnapshot(this.q, (querySnapshot)=> {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push( doc.data());
                
            });
            this.setState({data}) ;
        });
          
    }
    render(){
        if (!this.state.data){
            return (<h1>Sensor Data</h1>);
        } else{
            return(
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Time Stamp</th>
                            <th>Force Sensor Resistance</th>
                            <th>Longitute</th>
                            <th>Latitute</th>
                            <th>Altitude</th>
                            <th>X Acceleration</th>
                            <th>Y Acceleration</th>
                            <th>Z Acceleration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((value, index) => (
                                <tr key={index}>
                                    <td>{new Date(value.timestamp.seconds * 1000).toLocaleString()}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            );
        }
    }
    
    
}
export default SensorData;