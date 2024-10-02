import React, { useEffect } from 'react'
import { FormMappingType } from '../../types/Props';
import IconLists from '../utils/IconLists';
import Edit from './Experience/Edit';
import Create from './Route/Create';

const SidebarForm: React.FC<FormMappingType & { onBack: () => void, showMenuForm: boolean }> = ({ path, formPosition, title, onBack, showMenuForm }) => {

    useEffect(() => {
        console.log(`Sidebar form path - ${path} ### formPosition - ${formPosition} ### onBack - ${onBack}`);
    }, [path, formPosition, showMenuForm]);

    return (
        <>
            <div className='text-left text-xl p-4 font-semibold'>
                <IconLists.ArrowBackIcon onClick={onBack} className='mr-4' />
                {title}
            </div>
            {/* <Edit /> */}
            <Create />
        </>
    )
}

export default SidebarForm