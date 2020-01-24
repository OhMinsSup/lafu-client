import React from 'react';
import { connect } from 'react-redux';
import { RootStore } from '../../store/modules';
import { setDarkMode } from '../../store/modules/core';

interface OwnProps {}

interface StateProps {
  isDark: boolean;
}

interface DispatchProps {
  setDarkMode: typeof setDarkMode;
}

type CoreProps = StateProps & OwnProps & DispatchProps;

class Core extends React.Component<CoreProps> {
  render() {
    return null;
  }
}

export default connect<StateProps, DispatchProps, OwnProps, RootStore>(
  ({ core }) => ({
    isDark: core.isDark,
  }),
  {
    setDarkMode,
  },
)(Core);
