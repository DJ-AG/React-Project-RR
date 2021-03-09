import {
  Text,
  StoryImageOne,
  StoryImageTwo,
  StoryPicture,
  StoryContent,
  H3,
  H2,
  Story
} from "./reviews.styles";

import Button from '../button/button.component'


import image1 from "../../images/story-1.jpeg";
import image2 from "../../images/story-2.jpeg";

const Reviews = () => (
    <Story>
    <StoryPicture>
      <StoryImageOne src={image1} />
      <StoryImageTwo src={image2} />
    </StoryPicture>
    <StoryContent>
      <H3> Lorem, ipsum dolor</H3>
      <H2>
        &ldquo;Lorem, ipsum dolor sit amet consectetur&rdquo;
      </H2>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
        harum volupta!
      </Text>
      <Button primary='true'>Find your own home</Button>
    </StoryContent>
    </Story>
);

export default Reviews;
