import React, {useState, useCallback} from "react";
import {Page, Card, FormLayout, TextField, Button, Form} from '@shopify/polaris';
import {useMutation} from '@apollo/client';
import NEW_POST_MUTATION from './NewPostMutation';
import POSTS_QUERY from '../ListOfPosts/ListOfPostsQuery';


export default function NewPost() {
  const [content, setContent] = useState('');
  const handleContentChange = useCallback((value) => setContent(value), []);

  const [createMicropost, { loading, data, error }] = useMutation(NEW_POST_MUTATION, {
    update (cache, { data }) {
      const newMicropostFromResponse = data?.createMicropost.micropost;
      const existingMicroposts = cache.readQuery({ query: POSTS_QUERY });

      if (existingMicroposts && newMicropostFromResponse) {
        cache.writeQuery({
          query: POSTS_QUERY,
          data: {
            microposts: [
              ...existingMicroposts?.microposts,
              newMicropostFromResponse,
            ],
          },
        });
      }
    }
  });

  const handleSubmit = useCallback((_event) => {
    createMicropost({ variables: {content: content} });
    setContent('');
  }, [content, createMicropost]);

  if (loading) return <p>Loading...</p>;
  if (error) return <div>Error, please try again!</div>;

  return (
    <Page title='New Post'>
      <Card sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              placeholder='Enter post content'
              maxLength={140}
              value={content}
              onChange={handleContentChange}
            />
            <Button primary submit>Post!</Button>
            {data && <p>Posted!</p>}
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
}
