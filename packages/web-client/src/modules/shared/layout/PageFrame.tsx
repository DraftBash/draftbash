import React from 'react';
import PropTypes from 'prop-types';

export const PageFrame = ({ children }) => {
    return <div style={styles as React.CSSProperties}>{children}</div>;
};

const styles = {
    backgroundColor: 'var(--silver)',
    marginTop: '50px',
    width: '60%',
    border: '1px solid var(--darkGrey)',
    borderRadius: '15px',
    marginLeft: '20%',
    height: 'calc(100% - 150px)',
    minHeight: '500px',
    minWidth: '750px',
    position: 'relative',
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)'
};

PageFrame.propTypes = {
    children: PropTypes.node.isRequired,
};