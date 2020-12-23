import React, {useState, useCallback} from "react";
import {
  Page,
  Card,
  FormLayout,
  TextField,
  Button
} from '@shopify/polaris';

export default function NewPost() {
  const [content, setContent] = useState('');
  const handleContentChange = useCallback((value) => setContent(value), []);

  return (
    <Page title='New Post'>
      <Card sectioned>
        <FormLayout>
          <TextField
            placeholder='Enter post content'
            maxLength={140}
            value={content}
            onChange={handleContentChange}
          />

          <Button primary submit={true}>Post!</Button>
        </FormLayout>
      </Card>
    </Page>
  );
}
