import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon';
import Link from '@ecl/ec-react-component-link';
import Menu from '@ecl/ec-react-component-menu';
import SearchForm from '@ecl/ec-react-component-search-form';
import { LanguageListOverlay } from '@ecl/ec-react-component-language-list';

const SiteHeaderStandardised = ({
  logo,
  logged,
  loginToggle,
  loginBox,
  languageSelector,
  searchToggle,
  searchForm,
  bannerTop,
  banner, // used if there is no menu
  menu,
  className,
  ...props
}) => {
  const classNames = classnames(className, 'ecl-site-header-standardised');

  // Logo props
  const {
    className: logoClassName,
    href: logoHref,
    alt: logoAlt,
    title: logoTitle,
    language: logoLanguage,
    ...logoProps
  } = logo;

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const logoSrc = require(`@ecl/ec-resources-logo/logo--${logoLanguage}.svg`);

  const hasLanguageOverlay = !!(languageSelector && languageSelector.overlay);

  return (
    <header
      {...props}
      className={classNames}
      {...(!!(menu && Object.keys(menu).length >= 1) && {
        'data-ecl-has-menu': true,
      })}
    >
      <div className="ecl-site-header-standardised__container ecl-container">
        <div className="ecl-site-header-standardised__top">
          <a
            className="ecl-link ecl-link--standalone ecl-site-header-standardised__logo-link"
            href={logoHref}
            aria-label={logoTitle}
          >
            <img
              {...logoProps}
              alt={logoAlt}
              title={logoTitle}
              className={classnames(
                logoClassName,
                'ecl-site-header-standardised__logo-image'
              )}
              src={logoSrc}
            />
          </a>
          <div className="ecl-site-header-standardised__action">
            {!!(
              loginToggle &&
              Object.keys(loginToggle).length >= 1 &&
              loginBox
            ) && (
              <div className="ecl-site-header-standardised__login-container">
                {logged && (
                  <Fragment>
                    <a
                      className="ecl-link ecl-link--standalone ecl-site-header-standardised__login-toggle"
                      href={loginToggle.hrefLogged}
                      data-ecl-login-toggle
                      aria-controls={loginBox.id}
                      aria-expanded="false"
                    >
                      <Icon
                        shape="general--logged-in"
                        size="s"
                        className="ecl-site-header-standardised__icon"
                      />
                      {loginToggle.labelLogged}
                      <Icon
                        shape="ui--corner-arrow"
                        size="xs"
                        className="ecl-site-header-standardised__login-arrow"
                      />
                    </a>

                    <div
                      id={loginBox.id}
                      className="ecl-site-header-standardised__login-box"
                      data-ecl-login-box
                    >
                      {loginBox.description && (
                        <Fragment>
                          <p className="ecl-site-header-standardised__login-description">
                            {loginBox.description}
                          </p>
                          <hr className="ecl-site-header-standardised__login-separator" />
                        </Fragment>
                      )}
                      <Link
                        label={loginBox.label}
                        href={loginBox.href}
                        variant="standalone"
                      />
                    </div>
                  </Fragment>
                )}
                {!logged && (
                  <a
                    className="ecl-link ecl-link--standalone ecl-site-header-standardised__login-toggle"
                    href={loginToggle.hrefNotLogged}
                  >
                    <Icon
                      shape="general--log-in"
                      size="s"
                      className="ecl-site-header-standardised__icon"
                    />
                    {loginToggle.labelNotLogged}
                  </a>
                )}
              </div>
            )}
            {!!(
              languageSelector && Object.keys(languageSelector).length >= 1
            ) && (
              <a
                className="ecl-link ecl-link--standalone ecl-site-header-standardised__language-selector"
                href={languageSelector.href}
                data-ecl-language-selector
                {...(hasLanguageOverlay && {
                  'aria-controls': 'language-list-overlay',
                  'aria-expanded': 'false',
                })}
              >
                <span className="ecl-site-header-standardised__language-icon">
                  <Icon
                    shape="general--language"
                    size="s"
                    className="ecl-site-header-standardised__icon"
                  />
                  <span className="ecl-site-header-standardised__language-code">
                    {languageSelector.code}
                  </span>
                </span>
                {languageSelector.label}
              </a>
            )}
            {!!(
              searchToggle &&
              Object.keys(searchToggle).length >= 1 &&
              searchForm
            ) && (
              <div className="ecl-site-header-standardised__search-container">
                <a
                  className="ecl-link ecl-link--standalone ecl-site-header-standardised__search-toggle"
                  href={searchToggle.href}
                  data-ecl-search-toggle
                  aria-controls={searchForm.id}
                  aria-expanded="false"
                >
                  <Icon shape="general--search" size="s" />
                  {searchToggle.label}
                </a>
                <SearchForm
                  {...searchForm}
                  className="ecl-site-header-standardised__search"
                  id={searchForm.id}
                  data-ecl-search-form
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {bannerTop && (
        <div className="ecl-site-header-standardised__banner-top">
          {!!(typeof bannerTop === 'object') && (
            <div className="ecl-container">
              <Link {...bannerTop} variant="standalone" />
            </div>
          )}
          {!!(typeof bannerTop === 'string') && (
            <div className="ecl-container">Hello</div>
          )}
        </div>
      )}
      {banner && (
        <div className="ecl-site-header-standardised__banner">
          <div className="ecl-container">{banner}</div>
        </div>
      )}
      {!!(menu && Object.keys(menu).length >= 1) && <Menu {...menu} />}
      {hasLanguageOverlay && (
        <LanguageListOverlay
          {...languageSelector.overlay}
          id="language-list-overlay"
          hidden
        />
      )}
    </header>
  );
};

SiteHeaderStandardised.propTypes = {
  logo: PropTypes.shape({
    title: PropTypes.string,
    alt: PropTypes.string,
    language: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
  }),
  logged: PropTypes.bool,
  loginToggle: PropTypes.shape({
    labelNotLogged: PropTypes.string,
    hrefNotLogged: PropTypes.string,
    labelLogged: PropTypes.string,
    hrefLogged: PropTypes.string,
  }),
  loginBox: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  languageSelector: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string,
    code: PropTypes.string,
    overlay: PropTypes.object,
  }),
  searchToggle: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  searchForm: PropTypes.shape({
    id: PropTypes.string,
    textInputId: PropTypes.string,
    inputLabel: PropTypes.string,
    buttonLabel: PropTypes.string,
  }),
  bannerTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(Link.propTypes),
  ]),
  banner: PropTypes.string,
  menu: PropTypes.shape(Menu.propTypes),
  className: PropTypes.string,
};

SiteHeaderStandardised.defaultProps = {
  logo: {
    title: '',
    alt: '',
    language: 'en',
    href: '#',
  },
  logged: false,
  loginToggle: {},
  loginBox: {},
  languageSelector: {},
  searchToggle: {},
  searchForm: {},
  bannerTop: '',
  banner: '',
  menu: {},
  className: '',
};

export default SiteHeaderStandardised;
