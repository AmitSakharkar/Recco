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
    width: 30%;
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
    padding: 10px;
    border-radius: 35px;
    border: 1px solid #097969;
    color: #097969;
`;

export const FilledButton = styled(OutlinedButton)`
    background: #097969;
    color: #ffffff;
`;