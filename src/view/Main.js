import React, { Component } from 'react'
import axios from 'axios'

class Main extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            page:1,
            pageSize:5
        }
    }
    render() {
        let { list } = this.state
        return (
            <div className='main'>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <div key={index} className='big'>
                                <div><img src={item.pic} alt=''/></div><div><li>{item.id}</li><li>{item.name}</li><li> {item.title}</li></div>
                               
                            </div>
                        )
                    })
                }
                <div className='xia'>

                    <button onClick={() => {
                        this.setState({
                            page: --this.state.page
                            
                        })
                        this.axiosFn(this.state.page,5)
                    }}>
                        上一页
                    </button>
                    <button onClick={() => {
                        this.setState({
                            page: ++this.state.page
                        })
                        this.axiosFn(this.state.page,5)
                    }}>下一页</button>
                </div>

            </div>
        )
    }
    componentDidMount() {
        this.axiosFn(this.state.page, this.state.pageSize)
    }
    axiosFn(page, pageSize) {
        axios.post('/list', { page: page, pageSize: pageSize }).then(res => {
            console.log(res.data.list)
            this.setState({
                list: res.data.list
            })
        })
    }
}

export default Main
