import React from 'react';
import { Root } from './Style';
import Avatar from '@mui/material/Avatar';
import { UserAvatarType } from './types';

export const UserAvatar = ({ username }: UserAvatarType) => {
	return (
		<Root>
			<div className="wrapper">
				<span className="username">{username}</span>
				<Avatar className="avatar" />
			</div>
		</Root>
	);
};
