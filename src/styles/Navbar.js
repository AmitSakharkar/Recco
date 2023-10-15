import styled from 'styled-components';

export const NavWrapper = styled.section`
    background: #097969;
    height: 9%;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0 6rem;
    position: fixed;
    width: 100%;
`;

export const NavbarTitle = styled.a`
    color: inherit;
    text-decoration-line: none;
    font-family: 'Lobster Two', sans-serif;
    font-size: 2.5rem;
`;

export const RouteOptions = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
`;

export const RouteLinks = styled.a`
    color: inherit;
    ${(props) => {
        if (props.$currentPath === props.$activePath) {
            return 'text-decoration-line: underline;'
        } else {
            return 'text-decoration-line: none;'
        }
    }}
`;

export const MainWrapper = styled.section`
    height: 100vh;
    width: 100vw;
    background: whitesmoke;
`;

export const CommingSoonImg = styled.img`
    height: 91%;
    width: 100%;
    position: relative;
    top: 9%;
`;

export const OrderNumberDetails = styled.section`
    top: 9%;
    height: 15%;
    position: relative;
    background: white;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.3);
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
`;

export const OrderBreadcrumb = styled.label`
    font-size: 0.8rem;
`;

export const OrderActionArea = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const OrderNumberHeader = styled.label`
    font-size: 1.3rem;
    font-weight: 700;
`;

export const OrderConfirmationAction  = styled.section`
    width: 20%;
    display: flex;
    justify-content: space-between;
`;

export const OrderDetailsContainer = styled.section`
    top: 24%;
    position: absolute;
    padding: 2% 10%;
`;

export const OrderItemListContainer = styled.section`
    border-radius: 10px;
    background: #ffffff;
    padding: 20px;
`;

export const OutlinedButton = styled.button`
    padding: 7px;
    border-radius: 35px;
    border: 2px solid #097969;
    color: #097969;
    font-weight: 900;
    background: #ffffff;
`;

export const FilledButton = styled(OutlinedButton)`
    background: #097969;
    color: #ffffff;
`;

export const PlainButton = styled.button`
    font-size: 10px;
    background: transparent;
    border: none;
`;

export const FilterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`;

export const FilterActionContainer = styled.section`
    width: 18%;
    display: flex;
    justify-content: space-between;
`;

export const SearchableInputContainer = styled.section`
    border-radius: 35px;
    padding: 0px 5px 0px 10px;
    border: 2px solid;
    width: 30%;
    display: flex;
    justify-content: sapce-between;
    align-items: center;
`;

export const InputField = styled.input`
    border: 0px;
    width: 90%;
`;

export const TableTitleRow = styled.tr`
    height: 30px;
`;

export const ProductImage = styled.img`
    height: 30px;
    width: 30px;
`;

export const TableTitle = styled.th`
    font-size: 0.8rem;
`;