import React, { Component } from 'react';
import { Doughnut  } from 'react-chartjs-2';
import axios from 'axios';

// import {} from '../../ducks/reducer';

import { connect } from 'react-redux';



// the data will be held in state and stored inside of a data component. 
class ChartComponent extends Component {

    constructor(){
        super();
        this.state = {
            chartData: {}
        }
    }
    
    componentDidMount(){
        axios.get('/api/getcategories')
            .then(response => {
              this.setState({
                  chartData: response.data
              })
            })
            .catch( err => console.log(err))
    }

    render(){
        return (
            <div>
                <Doughnut
                    data={ this.state.chartData }
                    width={300}
                    height={300}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: "Tortuga Analytics",
                            fontSize: 30,
                        }
                    }}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { chartData } = state;
    return {
        chartData
    }
}
export default connect(mapStateToProps)(ChartComponent);