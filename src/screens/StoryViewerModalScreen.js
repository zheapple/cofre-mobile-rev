import React from 'react';
import StoryViewer from '../components/Story/StoryViewer';
import { consumeNavigationCallback } from '../utils/navigationCallbacks';

const StoryViewerModalScreen = ({ route, navigation }) => {
  const stories = route?.params?.stories || [];
  const initialIndex = route?.params?.initialIndex || 0;
  const callbackId = route?.params?.callbackId;
  const onViewed = consumeNavigationCallback(callbackId);

  return (
    <StoryViewer
      visible={true}
      stories={stories}
      initialIndex={initialIndex}
      onClose={(viewedStoryIds) => {
        if (typeof onViewed === 'function') {
          onViewed(viewedStoryIds);
        }
        navigation.goBack();
      }}
      onStoryChange={() => {}}
    />
  );
};

export default StoryViewerModalScreen;
