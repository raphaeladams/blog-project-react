import React, {useState, useCallback} from "react";
import {
  Page,
  Card,
  FormLayout,
  TextField,
  Button
} from '@shopify/polaris';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleTitleChange = useCallback((value) => setTitle(value), []);
  const handleContentChange = useCallback((value) => setContent(value), []);
  const handleTagsChange = useCallback((value) => setTags(value), []);

  return (
    <Page title='New Post'>
      <Card sectioned>
        <FormLayout>
          <TextField
            label='Title'
            placeholder='Enter title'
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            label='Content'
            placeholder='Enter post content'
            value={content}
            onChange={handleContentChange}
          />
          <TextField
            label='Tags'
            placeholder='Add tags'
            value={tags}
            onChange={handleTagsChange}
          />

          <Button primary submit={true}>Submit!</Button>
        </FormLayout>
      </Card>
    </Page>
  );
}
