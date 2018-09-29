import React, { Component } from 'react'
import { Bar, Line, Pie, Bubble } from 'react-chartjs-2'

class Chart extends Component {
    state = {
        chartData : {
          labels: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Borishal', 'Natore'],
          datasets: [
              {
                  label: 'Population',
                  data:[
                    10356500,
                    3920222,
                    5342339,
                    7700133,
                    8055856,
                    1706673
                  ],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 255, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 65, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                      
                  ]
              }
          ]
        }
    }
    render() {
    return (
      <div className='chart container'>
        <Bar
            data={this.state.chartData}
            options={{
                title: {
                    display: true,
                    text: 'Leargest City in Bangldesh',
                    fontSize: 30
                },
                legend:{
                    display:true,
                    position: 'right'
                }
            }}
        />
        <Line
            data={this.state.chartData}
            options={{
                title: {
                    display: true,
                    text: 'Leargest City in Bangldesh',
                    fontSize: 30
                },
                legend:{
                    display:true,
                    position: 'right'
                }
            }}
        />
        <Pie
            data={this.state.chartData}
            options={{
                title: {
                    display: true,
                    text: 'Leargest City in Bangldesh',
                    fontSize: 30
                },
                legend:{
                    display:true,
                    position: 'right'
                }
            }}
        />
        <Bubble
            data={this.state.chartData}
            options={{
                title: {
                    display: true,
                    text: 'Leargest City in Bangldesh',
                    fontSize: 30
                },
                legend:{
                    display:true,
                    position: 'right'
                }
            }}
        />
      </div>
    )
  }
}
export default Chart