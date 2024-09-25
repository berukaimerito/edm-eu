// app/video/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import VideoSection from '../components/VideoSection';

const VideoPage: React.FC = () => {
  const { t } = useTranslation('common');
  const videoData = t('video_section', { returnObjects: true }) as any;

  return (
    <div>
      <VideoSection
        videoUrl={videoData.video_url}
        title={videoData.title}
        description={videoData.description}
        buttonText={videoData.button_text}
        buttonLink={videoData.button_link}
        additionalInfo={videoData.additional_info}
        corporateLinkText={videoData.corporate_link_text}
        corporateLink={videoData.corporate_link}
      />
    </div>
  );
};

export default VideoPage;
