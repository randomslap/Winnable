import React, { Component } from "react";
import { List, Card } from 'antd';
import "antd/dist/antd.css";
import "./index.css"

class Features extends Component {
render() {
    return (
        <List id="spacing"
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
    )
}
}
const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
  
  export default Features