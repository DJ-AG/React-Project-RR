import React from 'react'
import FooterData from '../../data/footerData'
import {FooterWrapper,FooterContent,FooterButton,CopyRight} from './footer.styles'
import Button from '../button/button.component'
const Footer = () => (
    <FooterWrapper>
        <FooterContent>
            {
                FooterData.map((data, index) => {
                    return(
                        <FooterButton key={index}>
                        <Button primary='true'>{data.linkname}</Button>
                        </FooterButton>
                    )
                })
            }
        </FooterContent>
    </FooterWrapper>
)

export default Footer