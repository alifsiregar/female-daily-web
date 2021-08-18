import styled from "styled-components";
import * as Ai from 'react-icons/ai';
import * as Bs from 'react-icons/bs';
import * as Vsc from 'react-icons/vsc';

export const Container = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
`;

export const HeaderContent = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-top: 0.12rem solid #d9d9d9;
    border-bottom: 0.125rem solid #d9d9d9;
    display: flex;
    align-items: center;
`;

export const HeaderMenuButton = styled(Ai.AiOutlineMenu)`
    font-size: 2rem;
    background: none;
    color: #000;
    cursor: pointer;
`;

export const HeaderLogo = styled.img`
    margin: 0 20px;
`;

export const SearchBar = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border: 0.15rem solid #e6e6e6;
    border-radius: 0.25rem;
    flex-grow: 1;
`;

export const SearchLogo = styled(Bs.BsSearch)`
    font-size: 1.5rem;
    margin-right: 20px;
    background: none;
    color: #757575;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: 0;

    &:focus {
        outline: 0;
    }
`;

export const LoginButton = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dc294f;
    color: #fff;
    cursor: pointer;

    span {
        font-weight: 200;
    }
`;

export const LoginLogo = styled(Vsc.VscAccount)`
    font-size: 1.5rem;
    margin-right: 15px;
    background: none;
`;