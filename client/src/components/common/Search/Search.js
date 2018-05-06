import React,{Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './Search.css';

class Search extends Component {

    state = {
      input:''
    }
    onClick = () => {
      this.props.onClick(this.state.input)
      this.setState({input:''})
    }
    render() {
        return (
            <div className="Search">
              <Form>
                <Form.Field>
                  <input
                    placeholder={this.props.placeholder}
                    value={this.state.input}
                    onChange={(e) => this.setState({input:e.target.value})}
                   />
                </Form.Field>
                <Button type='submit'
                  onClick={this.onClick}
                  >{this.props.buttonName}</Button>
              </Form>
            </div>
        );
    }
}

export {Search};
