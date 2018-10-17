/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import siteHeaderContent from '@ecl/eu-specs-site-header/demo/data';
import heroBannerContent from '@ecl/eu-specs-hero-banner/demo/data--image';
import mediaContainerContent from '@ecl/ec-specs-media-container/demo/data--video';
import cardContent from '@ecl/eu-specs-card/demo/data--card';
import blockquoteContent from '@ecl/eu-specs-blockquote/demo/data';
import footerContent from '@ecl/eu-specs-footer/demo/data';

import CampaignPage from '../CampaignPage';

storiesOf('Campaign page', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <CampaignPage
      siteHeader={siteHeaderContent}
      heroBanner={heroBannerContent}
      card={cardContent}
      footer={footerContent}
      mediaContainer={mediaContainerContent}
      blockquote={blockquoteContent}
    />
  ));