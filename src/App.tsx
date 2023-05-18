import { Root } from './Style';
import { UserAvatar } from './shared/ui/UserAvatar';
import React from 'react';

export const App = () => {
	return (
		<Root>
			<UserAvatar username="egormarkov1408@gmail.com" />
		</Root>
	);
};
