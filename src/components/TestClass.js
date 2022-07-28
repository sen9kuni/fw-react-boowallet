import React, { Component } from 'react'

export default class TestClass extends Component {
  state = {
    data: {},
    data2: {}
  }
  componentDidUpdate(){
    this.setState({
      data: {
        'success': true,
        'message': 'List all Profile search',
        'pageInfo': {
          'totalData': 3,
          'totalPage': 1,
          'currentPage': 1,
          'nextPage': null,
          'prevPage': null
        },
        'result': [
          {
            'id': 1,
            'fullname': 'ramdhan',
            'phonenumber': '089547214467',
            'balance': '650000',
            'picture': '1657600418186.jpeg',
            'user_id': 1
          },
          {
            'id': 2,
            'fullname': 'galih',
            'phonenumber': null,
            'balance': '910000',
            'picture': null,
            'user_id': 2
          },
          {
            'id': 3,
            'fullname': 'dummy budi uwb',
            'phonenumber': '089547214469',
            'balance': '1250000',
            'picture': '1658377640832.png',
            'user_id': 5
          },
          {
            'id': 4,
            'fullname': 'dummy budi uwb',
            'phonenumber': '089547214469',
            'balance': '1250000',
            'picture': '1658377640832.png',
            'user_id': 5
          }
        ]
      }
    })
    this.setState({data2: this.state.data.result})
  }
  render() {
    return (
      <>
        {this.state.data2.map(o=>
          <div>{o.fullname}</div> 
        )}
      </>
    )
  }
}
