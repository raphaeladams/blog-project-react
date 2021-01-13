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
import raphdp from '../../raphdp.png';
import {useQuery} from '@apollo/client';
import POLARIS_QUERY from './PolarisQuery';


export default function Polaris() {
  const [commenting, setCommenting] = useState(false);
  const [liked, setLiked] = useState(false);
  
  const {loading, error, data} = useQuery(POLARIS_QUERY);
  
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
          <Heading className='user'>{data.micropost.user.name}</Heading>
          <p className='content'>{data.micropost.content}</p>
          <p className='timestamp'>Posted {data.micropost.updatedAt}</p>
        </TextContainer>

        <Button
          name='Like'
          onClick={() => setLiked(liked ? false : true)}>
          {liked ? 'Unlike' : 'Like'}
        </Button>
        
        <Button
          name='Comment'
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
