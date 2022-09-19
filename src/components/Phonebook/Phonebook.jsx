import propTypes from 'prop-types';
import { Section } from './Phonebook.styled';

const Phonebook = ({ children }) => {
  return <Section>{children}</Section>;
}

Section.propTypes = {
  children: propTypes.node,
};

export default Phonebook;