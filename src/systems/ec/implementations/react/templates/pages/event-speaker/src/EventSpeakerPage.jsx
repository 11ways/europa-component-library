import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Link from '@ecl/ec-react-component-link';
import PageBanner from '@ecl/ec-react-component-page-banner';

// Templates
import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';
import BreadcrumbStandardised, {
  BreadcrumbStandardisedItem,
} from '@ecl/ec-react-component-breadcrumb-standardised';
import PageHeaderCore from '@ecl/ec-react-component-page-header-core';
import PageHeaderHarmonised from '@ecl/ec-react-component-page-header-harmonised';
import PageHeaderStandardised from '@ecl/ec-react-component-page-header-standardised';
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';
import SiteHeaderStandardised from '@ecl/ec-react-component-site-header-standardised';
import FooterCore from '@ecl/ec-react-component-footer-core';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import FooterStandardised from '@ecl/ec-react-component-footer-standardised';

const breadcrumbContent = {
  label: 'You are here:',
};
const breadcrumbItems = [
  { label: 'Home', href: '/example' },
  { label: 'Events', href: '/example' },
  {
    label: 'Fair of European Innovators in Cultural heritage',
    href: '/example',
  },
  { label: 'Programme' },
];
const breadcrumbCore = (
  <BreadcrumbCore {...breadcrumbContent} data-ecl-auto-init="BreadcrumbCore">
    {breadcrumbItems.map(item => (
      <BreadcrumbCoreItem {...item} key={item.label} />
    ))}
  </BreadcrumbCore>
);
const breadcrumbStandardised = (
  <BreadcrumbStandardised
    {...breadcrumbContent}
    data-ecl-auto-init="BreadcrumbStandardised"
  >
    {breadcrumbItems.map(item => (
      <BreadcrumbStandardisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbStandardised>
);
const breadcrumbHarmonised1 = (
  <BreadcrumbHarmonised
    {...breadcrumbContent}
    className="ecl-breadcrumb-harmonised--group1"
    data-ecl-auto-init="BreadcrumbHarmonised"
  >
    {breadcrumbItems.map(item => (
      <BreadcrumbHarmonisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbHarmonised>
);
const breadcrumbHarmonised2 = (
  <BreadcrumbHarmonised
    {...breadcrumbContent}
    className="ecl-breadcrumb-harmonised--group2"
    data-ecl-auto-init="BreadcrumbHarmonised"
  >
    {breadcrumbItems.map(item => (
      <BreadcrumbHarmonisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbHarmonised>
);

const pageHeaderContent = {
  title: 'Conference',
  description: 'Fair of European Innovators in Cultural heritage',
};

const EventSpeakerPage = ({ siteHeader, footer, template }) => (
  <Fragment>
    {template === 'core' && (
      <SiteHeaderCore {...siteHeader} data-ecl-auto-init="SiteHeaderCore" />
    )}
    {template === 'standardised' && (
      <SiteHeaderStandardised
        {...siteHeader}
        data-ecl-auto-init="SiteHeaderStandardised"
      />
    )}
    {template === 'harmonised-g1' && (
      <SiteHeaderHarmonised
        {...siteHeader}
        data-ecl-auto-init="SiteHeaderHarmonised"
        className="ecl-site-header-harmonised--group1"
      />
    )}
    {template === 'harmonised-g2' && (
      <SiteHeaderHarmonised
        {...siteHeader}
        data-ecl-auto-init="SiteHeaderHarmonised"
        className="ecl-site-header-harmonised--group2"
      />
    )}

    {template === 'core' && (
      <PageHeaderCore {...pageHeaderContent} breadcrumb={breadcrumbCore} />
    )}
    {template === 'standardised' && (
      <PageHeaderStandardised
        {...pageHeaderContent}
        breadcrumb={breadcrumbStandardised}
      />
    )}
    {template === 'harmonised-g1' && (
      <PageHeaderHarmonised
        {...pageHeaderContent}
        breadcrumb={breadcrumbHarmonised1}
        className="ecl-page-header-harmonised--group1"
      />
    )}
    {template === 'harmonised-g2' && (
      <PageHeaderHarmonised
        {...pageHeaderContent}
        breadcrumb={breadcrumbHarmonised2}
        className="ecl-page-header-harmonised--group2"
      />
    )}

    <main className="ecl-u-pv-2xl ecl-u-pv-md-3xl">
      <div className="ecl-container ecl-u-type-m">
        <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-none ecl-u-mb-l">
          Keynote Speakers
        </h2>
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-4">
            <article className="ecl-card">
              <header className="ecl-card__header">
                <div className="ecl-u-d-flex">
                  <div
                    className="ecl-card__image ecl-u-media-a-m ecl-u-mr-s ecl-u-flex-shrink-0"
                    alt="card image"
                    style={{
                      backgroundImage:
                        'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ioannes_Claudius_Juncker_die_7_Martis_2014.jpg/1200px-Ioannes_Claudius_Juncker_die_7_Martis_2014.jpg)',
                    }}
                  />
                  <div>
                    <div className="ecl-card__meta ecl-u-type-s">
                      Special guest
                    </div>
                    <h1 className="ecl-card__title">
                      <a
                        href="/example"
                        className="ecl-link ecl-link--standalone"
                      >
                        Jean-Claude Juncker
                      </a>
                    </h1>
                    <div className="ecl-card__description ecl-u-type-s">
                      European Commission President
                    </div>
                  </div>
                </div>
              </header>
              <section className="ecl-card__body">
                <div className="ecl-card__meta ecl-u-type-s ecl-u-mt-l">
                  Session
                </div>
                <h2 className="ecl-card__title">
                  <a href="/example" className="ecl-link ecl-link--standalone">
                    Opening of the conference
                  </a>
                </h2>
                <div className="ecl-card__meta ecl-u-type-s">
                  15 Nov 2019 | 09:00 - 09:15 | Auditorium
                </div>
              </section>
            </article>
          </div>
          <div className="ecl-col-12 ecl-col-md-4 ecl-u-mt-l ecl-u-mt-md-none">
            <article className="ecl-card">
              <header className="ecl-card__header">
                <div className="ecl-u-d-flex">
                  <div
                    className="ecl-card__image ecl-u-media-a-m ecl-u-mr-s ecl-u-flex-shrink-0"
                    alt="card image"
                    style={{
                      backgroundImage:
                        'url(https://ec.europa.eu/commission/commissioners/sites/cwt/files/commissioner_portraits/hahn.jpg)',
                    }}
                  />
                  <div>
                    <div className="ecl-card__meta ecl-u-type-s">
                      Special guest
                    </div>
                    <h1 className="ecl-card__title">
                      <a
                        href="/example"
                        className="ecl-link ecl-link--standalone"
                      >
                        Johannes Hahn
                      </a>
                    </h1>
                    <div className="ecl-card__description ecl-u-type-s">
                      European Commissionner for European Neighbourhood Policy
                      and Enlargment Negociation
                    </div>
                  </div>
                </div>
              </header>
              <section className="ecl-card__body">
                <div className="ecl-card__meta ecl-u-type-s ecl-u-mt-l">
                  Session
                </div>
                <h2 className="ecl-card__title">
                  <a href="/example" className="ecl-link ecl-link--standalone">
                    Why are we innovating in and through cultural heritage?
                  </a>
                </h2>
                <div className="ecl-card__meta ecl-u-type-s">
                  15 Nov 2019 | 09:15 - 10:00 | Riverside
                </div>
              </section>
            </article>
          </div>
          <div className="ecl-col-12 ecl-col-md-4 ecl-u-mt-l ecl-u-mt-md-none">
            <article className="ecl-card">
              <header className="ecl-card__header">
                <div className="ecl-u-d-flex">
                  <div
                    className="ecl-card__image ecl-u-media-a-m ecl-u-mr-s ecl-u-flex-shrink-0"
                    alt="card image"
                    style={{
                      backgroundImage:
                        'url(https://www.euroamerica.org/wp-content/uploads/2017/10/FerreroWaldnerCV-294x300.jpg)',
                    }}
                  />
                  <div>
                    <div className="ecl-card__meta ecl-u-type-s">
                      Special guest
                    </div>
                    <h1 className="ecl-card__title">
                      <a
                        href="/example"
                        className="ecl-link ecl-link--standalone"
                      >
                        Benita Ferrero-Waldner
                      </a>
                    </h1>
                    <div className="ecl-card__description ecl-u-type-s">
                      European Commissionner for Trade and European
                      Neighbourhood Policy
                    </div>
                  </div>
                </div>
              </header>
              <section className="ecl-card__body">
                <div className="ecl-card__meta ecl-u-type-s ecl-u-mt-l">
                  Session
                </div>
                <h2 className="ecl-card__title">
                  <a href="/example" className="ecl-link ecl-link--standalone">
                    Opening of the exhibition
                  </a>
                </h2>
                <div className="ecl-card__meta ecl-u-type-s">
                  15 Nov 2019 | 12:00 - 12:30 | Auditorium
                </div>
              </section>
            </article>
          </div>
        </div>
        <Link
          variant="cta"
          label="Register"
          href="/example"
          className="ecl-u-mt-2xl"
        />
        <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-mt-2xl ecl-u-mt-md-3xl ecl-u-mb-l">
          Speakers
        </h2>
        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-6">
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Alberto Anfossi"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Secretary General of San Paolo Bank Foundation
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Moderator
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="How innovation is created and supported? Who are the innovators in cultural heritage? Panel discussion with pitches from EU R&I projects"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  15 Nov 2019 | 09:15 - 12:00 | Auditorium
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Amalia Zepou"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Vice-Mayor for Civil Society and Innovatio, City of Athens
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Speaker
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="How to innovate in cities through cutlural heritage. Athens, Capital of Innovation 2018"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  16 Nov 2019 | 12:00 - 12:15 | Auditorium
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Azra Becevic-Sarenkapa"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  National Museum of Bosnia and Herzegovina: &quot;Cultural
                  heritage for social consolidation and identity building. The
                  experience of Balkan Museum Network&quot;
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Moderator
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="Cultural heritage supporting intercultrural dialog and cultural diplomacy"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  16 Nov 2019 | 10:15 - 12:00 | Riverside
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Claudio Cimino"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Secretary General of WATCH NGO: &quot;Mobilising civil society
                  for the protection&quot;
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Speaker
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="Cultural heritage supporting intercultrural dialog and cultural diplomacy"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  16 Nov 2019 | 10:30 - 11:00 | Riverside
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Cristina Sabbioni"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Joint Programming Initiative in Cultural Heritage,
                  &apos;European National Research Network&apos;
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Moderator
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Promotion: 'Circular, sustainable and creative cities'"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  15 Nov 2019 | 14:30 - 18:00 | Riverside
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Erminia Sciacchitano"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Chief Scientific Advisor of the European Year of Cultural
                  Heritage, Directorate General for Education and Culture
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Moderator
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk'"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  16 Nov 2019 | 14:30 - 18:00 | Riverside
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Gabriela Gandel"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Director of Impact Hub Vienna
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Panel Discussant
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="How innovation is created and supported? Who are the innovators in cultural heritage? Panel discussion with pitches from EU R&I projects"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  15 Nov 2019 | 09:15 - 12:00 | Auditorium
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Jan De Maere"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Neuroscientist and art historian, University of Cluj-Naposca
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Moderator
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  16 Nov 2019 | 09:15 - 10:00 | Auditorium
                </div>
              </div>
            </article>
          </div>
          <div className="ecl-col-12 ecl-col-md-6">
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Jean David Malo"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Director of Open Innovation and Open Science, Directorate
                  General for Research and Innovation
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Moderator
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk'"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  15 Nov 2019 | 14:30 - 18:00 | Riverside
                </div>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Panelist
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="When in the future? Debate on opportunities for innovation in Cutliral Heritage"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  16 Nov 2019 | 14:30 - 15:00 | Auditorium
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Jean-Eric Paquet"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Director General, DG RTD European Commission
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Speaker
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="Opening of the exhibition"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  15 Nov 2019 | 12:30 - 13:00 | Auditorium
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="John Bell"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Director, Climate Action and Resource Efficiency, Directorate
                  General for Research and Innovatio, European Commission
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Speaker
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="Opening of the conference"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  16 Nov 2019 | 09:00 - 09:15 | Auditorium
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Julianne Schultz"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Media Deals
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Moderator
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  15 Nov 2019 | 09:15 - 10:00 | Auditorium
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Khalil Rouhana"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Deputy Director General for Cummunication Networks, Content
                  and Technology, European Commission
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Speaker
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="Opening of the exhibition"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  16 Nov 2019 | 12:30 - 13:00 | Auditorium
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Mauro Facchini"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Head of Unit &apos;Coppernicus&apos;, Directorate General for
                  Internal Market, Industry, Entrepreneurship, and SMEs
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Moderator
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="'Working on what?' Building a Community of Innovators in Cultural Heritage. Assistance: 'Heritage at risk'"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  15 Nov 2019 | 12:15 - 13:00 | Riverside
                </div>
              </div>
            </article>
            <article className="ecl-u-d-flex ecl-u-border-bottom ecl-u-border-color-grey-15 ecl-u-pa-s">
              <div
                role="img"
                aria-label="Example image"
                className="ecl-u-flex-shrink-0 ecl-u-mr-s ecl-u-media-a-s"
                style={{
                  backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Emojione_1F464.svg/1024px-Emojione_1F464.svg.png")',
                  backgroundSize: 'contain',
                }}
              />
              <div className="ecl-u-flex-grow-1">
                <h2 className="ecl-u-type-prolonged-m ecl-u-type-bold ecl-u-mv-none">
                  <Link
                    href="/example"
                    variant="standalone"
                    label="Pier Luigi Sacco"
                  />
                </h2>
                <p className="ecl-u-type-paragraph ecl-u-type-color-grey-100 ecl-u-mt-xs ecl-u-type-s">
                  Professor of Cultural Economics, IULM, University Milan
                </p>
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-m">
                  Speaker
                </div>
                <Link
                  className="ecl-u-mt-s ecl-u-d-inline-block ecl-u-type-bold ecl-u-type-prolonged-m"
                  href="/example"
                  variant="standalone"
                  label="Why are we innovating in cultural heritage? An inspirational dialog among unusual supsects"
                />
                <div className="ecl-u-type-s ecl-u-type-color-grey-75 ecl-u-mt-l">
                  16 Nov 2019 | 09:15 - 10:00 | Auditorium
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>

    <PageBanner
      variant={template === 'harmonised-g2' ? 'primary' : 'default'}
      isCentered
      title="Fair of European Innovators in Cultural Heritage"
      link={{
        label: 'Register',
        href: '/example',
      }}
    />
    {template === 'core' && <FooterCore {...footer} />}
    {template === 'standardised' && <FooterStandardised {...footer} />}
    {template === 'harmonised-g1' && (
      <FooterHarmonised {...footer} className="ecl-footer-harmonised--group1" />
    )}
    {template === 'harmonised-g2' && (
      <FooterHarmonised {...footer} className="ecl-footer-harmonised--group2" />
    )}
  </Fragment>
);

EventSpeakerPage.propTypes = {
  siteHeader: PropTypes.oneOfType([
    PropTypes.shape(SiteHeaderCore.propTypes),
    PropTypes.shape(SiteHeaderHarmonised.propTypes),
    PropTypes.shape(SiteHeaderStandardised.propTypes),
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.shape(FooterCore.propTypes),
    PropTypes.shape(FooterHarmonised.propTypes),
    PropTypes.shape(FooterStandardised.propTypes),
  ]),
  template: PropTypes.string,
};

EventSpeakerPage.defaultProps = {
  siteHeader: {},
  footer: {},
  template: '',
};

export default EventSpeakerPage;
