/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import icons from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import styles from './Link.scss';

const StyledLink = ({ className, standalone, to, children, ...props }) => {
  const cls = classnames(className, styles.link, {
    [styles.standalone]: standalone,
  });

  if (!to) {
    return null;
  }

  if (to.indexOf('http') === 0) {
    return (
      <a
        {...props}
        href={to}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}&nbsp;
        <svg focusable="false" aria-hidden="true" className={styles.icon}>
          <use xlinkHref={`${icons}#ui--external`} />
        </svg>
      </a>
    );
  }

  return (
    <Link {...props} to={to} className={cls}>
      {children}
    </Link>
  );
};

StyledLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  standalone: PropTypes.bool,
  to: PropTypes.string,
};

StyledLink.defaultProps = {
  className: '',
  standalone: false,
  to: '',
};

export default StyledLink;
