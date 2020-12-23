import React, {useState} from "react";
import {
  Page,
  Card,
  TextField,
  Button,
  TextContainer,
  Heading,
  Layout,
  Avatar
} from '@shopify/polaris';
import raphdp from './raphdp.png';

export default function Polaris() {
  const [commenting, setCommenting] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Page title='TITLE'>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Avatar
              source={raphdp}
              size='large'
            />

            <TextContainer>
              <Heading className="user">JOHN DOE</Heading>
              <p className="content">Some test post text, nothing to see here</p>
              <p className="timestamp">Posted 2 hours ago.</p>
            </TextContainer>

            <Button
              onClick={() => setLiked(liked ? false : true)}>
              {liked ? "Unlike" : "Like"}
            </Button>
            
            <Button
              onClick={() => setCommenting(commenting ? false : true)}>
              {commenting ? "Post" : "Comment"}
            </Button>
            
            {commenting && <TextField
                placeholder='Enter comment'
                //value={}
                //onChange={}
              />}
          </Card>
        </Layout.Section>
      </Layout>      
    </Page>
  );
}
