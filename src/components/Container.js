import React from 'react';
import {Layout, Row, Col} from 'antd';

const {Content} = Layout;

class Container extends React.Component {
  render() {
    return (
      <Layout style={{height: "100vh"}}>
        <Content style={{padding: '10px 0'}}>
          {this.props.children.length ?
            this.props.children.map((child, idx) => (
              <Row key={idx} justify={'center'}>
                <Col span={16}>
                  {child}
                </Col>
              </Row>
            )) :
            <Row justify={'center'}>
              <Col span={16}>
                {this.props.children}
              </Col>
            </Row>
          }
        </Content>
      </Layout>
    )
  }
}

export default Container;
