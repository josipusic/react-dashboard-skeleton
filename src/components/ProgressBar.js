import React from 'react'
import styled from 'styled-components'

const BarLine = styled.div`
    height: 4px;
    border-radius: 1em;
    background-image: linear-gradient(90deg,
                                      ${({fillColor}) => fillColor} ${({progress}) => progress}%,
                                      #dce0fd ${({progress}) => progress}%
                                      );
`

const BarInfo = styled.div`
    text-align: right;
    font-size: 0.75rem;
    color: #5066E0;
    margin-top: 0.5em;
`

function ProgressBar(props) {
    const {progress, fillColor} = props

    return (
        <>
            <BarLine
                fillColor={fillColor}
                progress={progress}
            />
            <BarInfo>{progress}%</BarInfo>
        </>
    )
}

export default ProgressBar