import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPrint,
  faFilePdf,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons' // more here: https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-solid-svg-icons

const Wrapper = styled.div`
  position: fixed;
  left: 40px;
`

const BtnWrapper = styled.div`
  margin: 20px 0;
`

const print = () => window.print()

const PrintAndDownload = () => {
  return (
    <Wrapper className="no-print">
      <BtnWrapper>
        <Button
          type="primary"
          shape="round"
          icon="printer"
          size="large"
          onClick={print}
        >
          Print
        </Button>
      </BtnWrapper>
      {/* <BtnWrapper>
        <Button type="primary">Download</Button>
      </BtnWrapper> */}
    </Wrapper>
  )
}

export default PrintAndDownload
