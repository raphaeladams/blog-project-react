import React, {useState} from 'react';
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
import POLARIS_QUERY from './PolarisQuery';


export default function Polaris() {
  const [commenting, setCommenting] = useState(false);
  const [liked, setLiked] = useState(false);

  const {loading, error, data} = useQuery(POLARIS_QUERY);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Page title='POLARIS'>
      <Card sectioned>
        <Avatar
          source={raphdp}
          size='large'
        />

        <TextContainer>
          <Heading className='user'>{data.micropost.user.name}</Heading>
          <p className='content'>{data.micropost.content}</p>
          <p className='timestamp'>{data.micropost.updatedAt}</p>
        </TextContainer>

        <Button
          onClick={() => setLiked(liked ? false : true)}>
          {liked ? 'Unlike' : 'Like'}
        </Button>
        
        <Button
          onClick={() => setCommenting(commenting ? false : true)}>
          {commenting ? 'Post' : 'Comment'}
        </Button>
        
        {commenting && <TextField
          placeholder='Enter comment'
        />}
      </Card>
    </Page>
  );
}
