import React, { Component } from 'react';
import { Doughnut  } from 'react-chartjs-2';

// import {} from '../../ducks/reducer';

import { connect } from 'react-redux';



// the data will be held in state and stored inside of a data component. 
class ChartComponent extends Component {
    // you can set default props: 
    // static defaultProps = {

    // }

    render(){
        return (
            <div>
                <Doughnut
                    data={ this.props.chartData }
                    width={400}
                    height={400}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: "Example Chart",
                            fontSize: 30
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