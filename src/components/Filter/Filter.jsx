import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterStyled>
      <label htmlFor="filter">Find contacts by name</label>
      <input name="filter" type="text" value={value} onChange={onChange} />
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
