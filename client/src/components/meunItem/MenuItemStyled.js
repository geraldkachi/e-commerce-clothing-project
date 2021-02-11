import styled from "styled-components"

export const MenuItemContainer = styled.div`
    height: ${({ size }) => (size ? '380px' : '240px')}
    min-width: 30%;
    overflow: hidden;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    
    &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bexier(0.25, 0.45, 0.45, 0.95)
        }

        & .content {
            opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }
    &:last-child {
        margin-left: 7.5px;
    }

    @medaia screen and (max-width: 800px) {
        height: 200px;
    }
`

export const BackgroundImageContainer = styled.div`
width: 100%;
height: 100%;
background-size: cover;
background-position:center;
background-image: ${({ imageUrl }) => `url(${imageUrl})`} ;
`

export const ContentContainer = styled.div`
height: 90px;
`
