import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class Updated extends Component {
    updateUser = event => {
        event.preventDefault()
        window.location.href = `/update/${this.props.linkKey}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class Deleted extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the link ${this.props.linkKey} permanently?`,
            )
        ) {
            api.deleteLink(this.props.linkKey).then(() => window.location.reload())
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class LinksList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getLinks().then(links => {
            this.setState({
                links: links.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { links, isLoading } = this.state

        const columns = [
            {
                Header: 'KEY',
                accessor: 'key',
                filterable: true,
                Cell: function (props) {
                    return (
                        <a href={`${global.API_URL}/${props.original.key}`}>
                            {props.original.key}
                        </a>
                    )
                },
            },
            {
                Header: 'Value',
                accessor: 'value',
                filterable: true,
                Cell: function (props) {
                    return (
                        <a href={props.original.value}>
                            {props.original.value}
                        </a>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <Updated linkKey={props.original.key}/>
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <Deleted linkKey={props.original.key}/>
                        </span>
                    )
                },
            },
        ]

        return (
            <Wrapper>
                <ReactTable
                    data={links}
                    columns={columns}
                    loading={isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                />
            </Wrapper>
        )
    }
}

export default LinksList
