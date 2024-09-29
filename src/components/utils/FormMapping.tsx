const FormMapping = [
    {
        path : 'edit-profile',
        formPosition : 'sidebar',
        onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)'
    },
    {
        path : 'logout',
        formPosition : 'sidebar',
        onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false), clearSession()'
    },
    {
        path : 'mediaLibrary',
        formPosition : 'overlay',
        onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)'
    },
    {
        path : 'publish',
        formPosition : 'overlay',
        onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)'
    },
    {
        path : 'projects/view-all',
        formPosition : 'overlay',
        onBack : null
    },
    {
        path : 'route/create',
        formPosition : 'sidebar',
        onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)'
    },
    {
        path : 'route/view-all',
        formPosition : 'overlay',
        onBack : null
    },
    {
        path : 'place/create',
        formPosition : 'sidebar',
        onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)'
    },
    {
        path : 'place/view-all',
        formPosition : 'overlay',
        onBack : null
    },
    {
        path : 'experience/open',
        formPosition : 'overlay',
        onBack : null
    },
    {
        path : 'experience/create',
        formPosition : 'overlay',
        onBack : null
    },
    {
        path : 'experience/edit',
        formPosition : 'sidebar',
        onBack : 'IsSidebarOpen(true) ,setShowMenuForm(false)'
    },
    {
        path : 'experience/collaborator',
        formPosition : 'overlay',
        onBack : null
    },
    {
        path : 'experience/clone',
        formPosition : 'overlay',
        onBack : null
    },
    {
        path : 'experience/export',
        formPosition : 'overlay',
        onBack : null
    },

];    

export default FormMapping;