import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { SearchableInputContainer, InputField } from '../styles/Navbar';

const SearchableInput = () => {
    const handleSearch = () => {
        console.log('search icon clicked');
    }
    const handleInput = (e) => {
        console.log('input chage cliked');
        const { value } = e.target;
        console.log('value => ', value)
    }
    return (
        <>
            <SearchableInputContainer>
                <InputField
                    type="text"
                    placeholder="Search product name"
                    onChange={handleInput}
                    onBlur={handleSearch}
                />
                <SearchOutlinedIcon onClick={handleSearch}/>   
            </SearchableInputContainer>
        </>
    );
};

export default SearchableInput;