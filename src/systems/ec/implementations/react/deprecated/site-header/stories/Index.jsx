/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentEn from '@ecl/ec-specs-site-header/demo/data--en';
import demoContentFr from '@ecl/ec-specs-site-header/demo/data--fr';

import SiteHeader from '../src/SiteHeader';

storiesOf('Deprecated|Site Header (ECL<2-12-0)', module)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        if (!window.ECL) return {};

        const components = window.ECL.autoInit();
        return { components };
      }}
      beforeUnmount={context => {
        if (context.components) {
          context.components.forEach(c => c.destroy());
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add('default', () => (
    <SiteHeader {...demoContentEn} data-ecl-auto-init="SiteHeader" />
  ))
  .add('translated', () => (
    <SiteHeader {...demoContentFr} data-ecl-auto-init="SiteHeader" />
  ));
