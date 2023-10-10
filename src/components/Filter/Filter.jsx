import { FilterTitle, Input } from "./Filter.styled";

export const Filter = ({ findContact }) => {
  return (
    <label>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Input>
        <input
        type="text"
        name="filter"
        onChange={evt => findContact(evt.target.value)}
      />
      </Input>
      
    </label>
  );
};
