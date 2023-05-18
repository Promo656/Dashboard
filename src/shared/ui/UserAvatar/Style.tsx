import styled from 'styled-components';

export const Root = styled.div`
	display: inline-block;
	border-radius: 20px;
	padding: 3px;
	transition: background-color 150ms ease-in;

	&:hover {
		cursor: pointer;
		background-color: #eaeaea;
		transition: background-color 150ms ease-in;
	}

	.wrapper {
		display: flex;
		align-items: center;
	}

	.avatar,
	.username {
		margin-left: 5px;
	}
`;
