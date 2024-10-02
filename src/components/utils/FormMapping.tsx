import {FormMappingType} from "../../types/Props";

const FormMapping : FormMappingType[]= [
    {
        path : 'profile/edit',
        formPosition : 'sidebar',
        // onBack : null,,
        title: 'Edit Profile'
    },
    {
        path : 'profile/logout',
        formPosition : 'sidebar',
        // onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false), clearSession()',
        title: 'Logout'
    },
    {
        path : 'mediaLib/overlay',
        formPosition : 'overlay',
        // onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)',
        title: 'Media Library'
    },
    {
        path : 'publish/overlay',
        formPosition : 'overlay',
        // onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)',
        title: 'Publish Experience'
    },
    {
        path : 'projects/view-all',
        formPosition : 'overlay',
        // onBack : null,
        title: 'Projects'
    },
    {
        path : 'route/create',
        formPosition : 'sidebar',
        // onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)',
        title: 'Create Route'
    },
    {
        path : 'route/view-all',
        formPosition : 'overlay',
        // onBack : null,
        title: 'Route'
    },
    {
        path : 'place/create',
        formPosition : 'sidebar',
        // onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)',
        title: 'Create Place'
    },
    {
        path : 'place/view-all',
        formPosition : 'overlay',
        // onBack : null,
        title: 'Places'
    },
    {
        path : 'experience/open',
        formPosition : 'overlay',
        // onBack : null,
        title: 'Open an Experience'
    },
    {
        path : 'experience/create',
        formPosition : 'overlay',
        // onBack : null,
        title: 'Create an Experience'
    },
    {
        path : 'experience/edit',
        formPosition : 'sidebar',
        // onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)',
        title: 'Edit Experience'
    },
    {
        path : 'experience/collaborator',
        formPosition : 'overlay',
        // onBack : null,
        title: 'Collaborators'
    },
    {
        path : 'experience/clone',
        formPosition : 'overlay',
        // onBack : null,
        title: 'Clone Experience'
    },
    {
        path : 'experience/export',
        formPosition : 'overlay',
        // onBack : null,
        title: 'Export Experience'
    },

];    

export default FormMapping;