import React, {useState, useCallback} from "react";
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Page,
  Card,
  FormLayout,
  TextField,
  Button,
  Form
} from '@shopify/polaris';

const ADD_POST = gql`
mutation CreateMicropost($content: String!) {
  createMicropost(input: {micropostRequest: {content: $content, userId: 1}})
  {
    micropost {
      id,
      content,
      createdAt,
      user {
        name,
        id
      }
    }
  }
}`;

export default function NewPost() {
  const [content, setContent] = useState('');
  const handleContentChange = useCallback((value) => setContent(value), []);
  
  const [addMicropost, {loading: mutationLoading, error: mutationError}] = useMutation(ADD_POST);

  const handleSubmit = useCallback((_event) => {
    addMicropost({ variables: {content: content} });
    setContent('');
  }, [content, addMicropost]);

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

            {mutationLoading && <p>Loading...</p>}
            {mutationError && <p>Error :( Please try again!</p>}
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
}
