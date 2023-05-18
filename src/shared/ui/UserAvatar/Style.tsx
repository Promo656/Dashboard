import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const Root = styled(IconButton)`
	display: inline-block;
	border-radius: 20px;
	padding: 3px;
	transition: background-color 150ms ease-in;

	&:hover {
		cursor: pointer;
		background-color: #f3f3f3;
		transition: background-color 150ms ease-in;
	}

	.wrapper {
		display: flex;
		align-items: center;
	}

	.username {
		font-size: 12px;
		font-weight: bold;
	}

	.avatar,
	.username {
		margin-left: 5px;
	}
`;
