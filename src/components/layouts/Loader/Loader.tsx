import React, { FunctionComponent, useEffect } from 'react';
import classes from './Loader.module.scss';

export const Loader: FunctionComponent = () => {
  useEffect(() => {
    return () => {
      new Promise<void>((resolve) => setTimeout(() => resolve(), 5000));
    };
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.Spinner}>
        <div className={'spinner-border text-primary ' + classes.SpinnerEl} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};
