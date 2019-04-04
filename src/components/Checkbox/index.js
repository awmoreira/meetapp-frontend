import React from 'react';
import PropTypes from 'prop-types';

import {
  CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon,
} from './styles';

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
};

Checkbox.defaultProps = {
  className: null,
};

export default Checkbox;
