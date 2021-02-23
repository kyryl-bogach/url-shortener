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

class LinksUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            key: this.props.match.params.key,
            value: '',
        }
    }

    handleChangeInputValue = async event => {
        const value = event.target.value
        this.setState({ value })
    }

    handleUpdateLink = async () => {
        const { key, value } = this.state
        const payload = { value }

        await api.updateLink(key, payload).then(() => {
            window.location.href = `/`
        })
    }

    componentDidMount = async () => {
        const { key } = this.state
        const link = await api.getLink(key)

        this.setState({
            key: link.data.key,
            value: link.data.value,
        })
    }

    render() {
        const { value } = this.state
        return (
            <Wrapper>
                <Title>Update Link</Title>

                <Label>Value: </Label>
                <InputText
                    type="text"
                    value={value}
                    onChange={this.handleChangeInputValue}
                />

                <Button onClick={this.handleUpdateLink}>Update Link</Button>
                <CancelButton href={'/'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default LinksUpdate
