import React, {useState} from "react";
import {
  Page,
  Card,
  TextField,
  Button,
  TextContainer,
  Heading,
  Avatar
} from '@shopify/polaris';
import raphdp from './raphdp.png';

import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const POST_QUERY = gql`
  query {
    micropost (id: 1) {
      content
      updatedAt
      user {
        name
      }
    }
  }
`;

export default function Polaris() {
  const [commenting, setCommenting] = useState(false);
  const [liked, setLiked] = useState(false);

  const {loading, error, data} = useQuery(POST_QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <div>Error</div>;

  return (
    <Page title='POLARIS'>
      <Card sectioned>
        <Avatar
          source={raphdp}
          size='large'
        />

        <TextContainer>
          <Heading className="user">{data.micropost.user.name}</Heading>
          <p className="content">{data.micropost.content}</p>
          <p className="timestamp">{data.micropost.updatedAt}</p>
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
        />}
      </Card>
    </Page>
  );
}
