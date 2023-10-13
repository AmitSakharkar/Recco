import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
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
            <SearchableInputContainer class="form-group has-search">
                <InputField
                    type="text"
                    placeholder="Search"
                    onChange={handleInput}
                    onBlur={handleSearch}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleSearch}
                                edge="end"
                            >
                                <SearchOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </SearchableInputContainer>
        </>
    );
};

export default SearchableInput;