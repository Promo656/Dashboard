import { Root } from './Style';
import { UserAvatar } from '../UserAvatar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const AppBar = () => {
	return (
		<Root>
			<IconButton>
				<SearchIcon />
			</IconButton>
			<IconButton>
				<NotificationsIcon />
			</IconButton>
			<UserAvatar username="egormarkov1408@gmail.com" />
		</Root>
	);
};
