import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    padding: 0 80px;

    
    

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img{
        width: 56px;
        height: 56px;
        border-radius: 50%;

    }
    > div{
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        line-height: 1.5rem;

        span{
            font-size: 0.875rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
        strong{
            font-size: 1.125rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
        
    }
`

export const Logout = styled.button`
    border: none;
    background: none;
        will-change: filter;
    transition: filter 300ms;
    

    > svg {
        font-size: 2.25rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        
        &:hover{
        
        filter: drop-shadow(0 0 2em #646cffaa);
        }
    }

`

