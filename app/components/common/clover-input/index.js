import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { styles } from './styles';

class CloverInput extends Component {
  render() {
    const {
      classes,
      helperText,
      error,
      InputProps,
      inputStyles,
      withWhiteColor,
      ...otherProps
    } = this.props;
    return (
      <OutlinedInput
        labelWidth={0}
        {...otherProps}
        inputProps={{
          style: {
            fontSize: '14px',
          },
        }}
      />
    );
  }
}

export default withStyles(styles)(CloverInput);
