/* eslint "import/no-extraneous-dependencies": ["error", { "devDependencies": true } ] */
const siteHeaderCoreContent = require('@ecl/ec-specs-site-header-core/demo/data--en');
const siteHeaderHarmonisedGroup1Content = require('@ecl/ec-specs-site-header-harmonised/demo/data--group1');
const siteHeaderHarmonisedGroup2Content = require('@ecl/ec-specs-site-header-harmonised/demo/data--group2');
const siteHeaderStandardisedContent = require('@ecl/ec-specs-site-header-standardised/demo/data--en');
const footerCoreContent = require('@ecl/ec-specs-footer-core/demo/data');
const footerHarmonisedGroup1Content = require('@ecl/ec-specs-footer-harmonised/demo/data--group1');
const footerHarmonisedGroup2Content = require('@ecl/ec-specs-footer-harmonised/demo/data--group2');
const footerStandardisedContent = require('@ecl/ec-specs-footer-standardised/demo/data');

const breadcrumbContent = {
  label: 'You are here:',
};
const breadcrumbItems = [
  { label: 'Home', href: '/example' },
  { label: 'Policies', href: '/example' },
  { label: 'Environment', href: '/example' },
  { label: 'Clean air', href: '/example' },
  { label: 'Legislation' },
];

const pageHeaderContent = {
  title: 'Legislation',
};

module.exports = template => {
  const data = {
    breadcrumbContent,
    breadcrumbItems,
    pageHeader: pageHeaderContent,
  };

  if (template === 'core') {
    data.siteHeader = siteHeaderCoreContent;
    data.footer = footerCoreContent;
  } else if (template === 'standardised') {
    data.siteHeader = siteHeaderStandardisedContent;
    data.footer = footerStandardisedContent;
  } else if (template === 'harmonised-g1') {
    data.siteHeader = siteHeaderHarmonisedGroup1Content;
    data.footer = footerHarmonisedGroup1Content;
  } else if (template === 'harmonised-g2') {
    data.siteHeader = siteHeaderHarmonisedGroup2Content;
    data.footer = footerHarmonisedGroup2Content;
  }

  return data;
};
