import { FeatureContainer, Text, FeatureBox, H4 } from './features.styles'
import featureData from '../../data/feature.data'

const Feature = () => (
  <FeatureContainer>
    {
      featureData.map((data,index) => {
        return(
          <FeatureBox key={index}>
          <H4>{data.header}</H4>
          <Text>{data.text}</Text>
          </FeatureBox>
        )
      })
    }
  </FeatureContainer>
);

export default Feature

