import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_snackbar';
import LoadingBar from 'components/utils/LoadingBar'
const cx = classNames.bind(styles);

const Snackbar = ({isWaiting}) => {
    return(
        <div className={cx("snackbar-wrapper")}>
            <LoadingBar/>
        </div>
        )

    
};
Snackbar.propTypes = {
  isWaiting: PropTypes.bool.isRequired
};

export default Snackbar;

/*
return !isWaiting ? (
    <div className={cx("snackbar-wrapper")}>
            {LoadingBar}
    </div>
    ) : (
    <div>
    </div>
    
    );
*/