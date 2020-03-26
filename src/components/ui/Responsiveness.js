import React from 'react';
import Responsive from 'react-responsive';
import { DESKTOP_WIDTH, MOBILE_WIDTH } from '../../config';

export const DesktopContainer = (props) => <Responsive {...props} minWidth={DESKTOP_WIDTH} />;

export const MobileContainer = props => <Responsive {...props} maxWidth={MOBILE_WIDTH} />;
