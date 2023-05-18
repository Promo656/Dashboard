import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import { device } from '../../lib/mediaQuery';

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
		@media ${device.mobileS} {
			display: none;
		}
	}

	.avatar,
	.username {
		margin-left: 5px;
	}
`;
