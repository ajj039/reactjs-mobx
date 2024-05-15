import React, { Component } from 'react';
import { observer } from 'mobx-react';
import userStore from '../userStore';
import { Card, Col, Row, Button, Space, Flex , Modal, Input} from 'antd';
import AddUserForm from './AddUserForm';
// import SearchInput from './SearchInput';

@observer
export default class Users extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchvalue:""
    }
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    userStore.fetchUsers(this.state.searchvalue); 
  }

  componentDidUpdate(prevprops, prevstate){
    if(prevstate.searchvalue !== this.state.searchvalue){
      userStore.fetchUsers(this.state.searchvalue);
    }
    
  }

   onSearch = (value, _e, info) => this.setState({searchvalue:value});


  render() {
    return (
      <>
        <Flex justify='center' align='center'>
          <AddUserForm/>
        </Flex>
        <div>
        <Input.Search
      placeholder="Search users by name"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={this.onSearch}
      style={{
        margin:"10px 3px",
        width:"50%"
      }}
    />
        </div>
        <Row gutter={16}>
          {userStore?.users?.map((item) => {
            return (
              <Col span={8} key={item.id}>
                <HoverableCard title={item.name} email={item.email} id={item.id}/>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

class HoverableCard extends Component {
  state = {
    isHovered: false,
    modalOpen:false,
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { title, email, id} = this.props;
    const { isHovered } = this.state;

    return (
     <>
      <Card
        title={title}
        bordered={true}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {email}
        {isHovered && (
          <div style={{ marginTop: '16px' }}>
            <Space>
            <Button type="primary" danger onClick={()=>this.setState({modalOpen:true})}>
      delete
    </Button>
            </Space>
          </div>
        )}
      </Card>

      {/* delete user modal */}

     
      <Modal
        title="Are you sure want to delete user"
        style={{
          top: 20,
        }}
        open={this.state.modalOpen}
        onOk={() => {
          this.setState({modalOpen:false});
          userStore.DeleteUser(id);
        }}
        onCancel={() => this.setState({modalOpen:false})}
      >
       
      </Modal>
     

     </>
    );
  }
}

