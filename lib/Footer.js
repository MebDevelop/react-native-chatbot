import styled from 'styled-components/native';

const Footer = styled.View`
  border-top-width: 1;
  border-color: ${(props) => {
    if (props.disabled && !props.invalid) {
      return '#ddd';
    }
    return props.invalid ? '#E53935' : props.color;
  }};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default Footer;
