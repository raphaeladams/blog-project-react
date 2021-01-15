import React, {useState, useCallback} from "react";
import {
  Page,
  Card,
  FormLayout,
  TextField,
  Button,
  Form
} from '@shopify/polaris';
import {useMutation} from '@apollo/client';
import NEW_POST_MUTATION from './NewPostMutation';


export default function NewPost() {
  const [content, setContent] = useState('');
  const handleContentChange = useCallback((value) => setContent(value), []);
  
  const [addMicropost, {loading, error, data}] = useMutation(NEW_POST_MUTATION);

  const handleSubmit = useCallback((_event) => {
    addMicropost({ variables: {content: content} });
    setContent('');
  }, [content, addMicropost]);

  if (loading) return <p>Loading...</p>;
  if (error) return <div>Error :( Please try again!</div>;

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
