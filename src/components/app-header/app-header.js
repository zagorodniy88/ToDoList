import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-top: 50px;
	h1{
		font-size: 26px;
		:hover{
			color:#17a2b8;
		}
	}
	h2{
		font-size: 1.2rem;
		color: grey;
	}
`

const AppHeader = ({liked, allPosts}) => {
	return (
		<Header>
			<h1>Oleksandr Zagorodnii</h1>
			<h2>{allPosts}  note, of them liked {liked}</h2>
		</Header>
	)
}


export default AppHeader;