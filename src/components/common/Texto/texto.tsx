import * as React from 'react';

export class Texto extends React.Component <any,any> {

    constructor (props) {
        super(props);
        this.state = {
            valortext: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.valortext;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    };

    render() {
      return (
              <form>
                  <label>
                    Introduce un texto:
                    <br/>
                    <input className='text'
                           type="text"
                           name={"name"}
                           placeholder={"Introduce un texto"}
                           value={this.state.name}
                           onChange={this.handleChange}
                    />
                  </label>
              </form>

        );
    }
}