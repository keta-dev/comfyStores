import React from 'react';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <div className="section section-center text-center">
        <h2>Oooopsss error... <span className='emoji'>😟</span></h2>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
.emoji {
  font-size: 52px;
}
`

export default Error
