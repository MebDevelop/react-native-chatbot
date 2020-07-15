import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import _ from 'lodash';
import Option from './Option';
import OptionElement from './OptionElement';
import OptionText from './OptionText';
import Options from './Options';
import Loading from '../common/Loading';

class OptionsStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
    
    this.renderOption = this.renderOption.bind(this);
    this.onOptionClick = this.onOptionClick.bind(this);
  }
  
  componentDidMount() {
    const delay = 2000;
    setTimeout(() => {
      this.setState({ loading: false });
    }, delay);
  }

  onOptionClick({ value }) {
    this.props.triggerNextStep({ value });
  }

  renderOption(option) {
    const { optionStyle, optionElementStyle } = this.props;
    const { optionBubbleColor, optionFontColor, bubbleColor, fontColor } = this.props.step;
    const { value, label, type, imageUrl, width, height } = option;
    return (
      <Option
        key={value}
        className="rsc-os-option"
        style={optionStyle}
        onPress={() => this.onOptionClick({ value })}
      >
        <OptionElement
          className="rsc-os-option-element"
          style={optionElementStyle}
          bubbleColor={optionBubbleColor || bubbleColor}
        >
          {type === 'image' ? 
            <Image source={{uri:imageUrl}} style={{width, height}}/> :
            <OptionText
              class="rsc-os-option-text"
              fontColor={optionFontColor || fontColor}
            >
             {label}
            </OptionText>
          }
        </OptionElement>
      </Option>
    );
  }

  render() {
    const { options } = this.props.step;
    const { loading } = this.state;

    return (
      <Options className="rsc-os">
        {loading ? (
          <Loading
            color={'black'}
          />
          ) : _.map(options, this.renderOption)}
      </Options>
    );
  }
}

OptionsStep.propTypes = {
  step: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  optionStyle: PropTypes.object.isRequired,
  optionElementStyle: PropTypes.object.isRequired,
};

export default OptionsStep;
