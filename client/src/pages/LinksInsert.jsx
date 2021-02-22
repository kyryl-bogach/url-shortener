import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class LinksInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            key: '',
            rating: '',
            value: '',
        }
    }

    handleChangeInputName = async event => {
        const key = event.target.value
        this.setState({ key })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputTime = async event => {
        const value = event.target.value
        this.setState({ value })
    }

    handleIncludeLink = async () => {
        const { key, value } = this.state
        const payload = { key, value }

        await api.insertLink(payload).then(res => {
            window.alert(`Link inserted successfully`)
            this.setState({
                key: '',
                value: '',
            })
        })
    }

    render() {
        const { key, value } = this.state
        return (
            <Wrapper>
                <Title>Create Link</Title>

                <Label>Key: </Label>
                <InputText
                    type="text"
                    value={key}
                    onChange={this.handleChangeInputName}
                />

                <Label>Value: </Label>
                <InputText
                    type="text"
                    value={value}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleIncludeLink}>Add Link</Button>
                <CancelButton href={'/links/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default LinksInsert
