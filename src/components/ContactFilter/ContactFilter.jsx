import { FilterContainer, FilterText, FilterInput } from './ContactFilter.styled';
import propTypes from 'prop-types';

const ContactFilter = ({ value, onChange }) => {
  return (
      <FilterContainer>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </FilterContainer>
  );
};

ContactFilter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default ContactFilter;