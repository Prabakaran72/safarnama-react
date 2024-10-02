import { PopMenuOptions } from '../../types/Props';
import Icons from './IconLists';

const cardMenuOptions: PopMenuOptions = {
    experience: [
        { icon: Icons.FolderOpenIcon, title: 'Open', path: 'experience/open', style: '' }, 
        { icon: Icons.CreateNewFolderIcon, title: 'Create', path: 'experience/create', style: '' }, 
        { icon: Icons.FolderSharedIcon, title: 'Collaborators', path: 'experience/collaborator', style: '' }, 
        { icon: Icons.EditIcon, title: 'Edit', path: 'experience/edit', style: '' }, 
        { icon: Icons.ContentCopyIcon, title: 'Clone', path: 'experience/clone', style: '' }, 
        { icon: Icons.DownloadIcon, title: 'Export', path: 'experience/export', style: '' }
    ],
    places: [
        { icon: Icons.AddLocationIcon, title: 'Create', path: 'place/create', style: '' },
        { icon: Icons.ViewListIcon, title: 'View all', path: 'place/view-all', style: '' }
    ],
    routes: [
        { icon: Icons.NavigationIcon, title: 'Create', path: 'route/create', style: '' }, 
        { icon: Icons.ViewListIcon, title: 'View all', path: 'route/view-all', style: '' }
    ],
    projects: [
        { icon: Icons.ViewListIcon, title: 'View all', path: 'projects/view-all', style: '' }
    ],
    publish: [
        { icon: Icons.ExitToAppIcon, title: '', path: 'publish/overlay', style: '' }
    ],
    media: [
        { icon: Icons.ExitToAppIcon, title: '', path: 'mediaLib/overlay', style: '' }
    ],
    user: [
        { icon: Icons.ExitToAppIcon, title: 'Logout', path: 'profile/logout', style: 'mb-4' },
        { icon: Icons.PersonIcon, title: 'Edit profile', path: 'profile/edit', style: 'mb-4' }
    ],
    admin: [
        { icon: Icons.ExitToAppIcon, title: '', path: '', style: '' }
    ]
}
export default cardMenuOptions;