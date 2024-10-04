import { SvgIconProps } from '@mui/material';

export type PopsType = {
    title : string | null,
    menu : string, 
    width : string, 
    onClose : ()=>void,
    position : PopsPosition,
    onChoose: (path:PopMenuOptionType['path'])=>void,
}

export type PopsPosition = {
    top: number,
    left: number,
    bottom: number
}

export type PopMenuWidthType = {
    experience : string,
    places: string,
    routes: string,
    projects: string,
    publish: string,
    media: string,
    user: string,
    admin: string
  }

  export type MenuNameType = keyof PopMenuWidthType; // 'experience' | 'places' | 'routes' | 'projects' | 'media' | 'user' | 'admin'

  export type PopMenuOptions = {
    experience : PopMenuOptionType[],
    places: PopMenuOptionType[],
    routes: PopMenuOptionType[],
    projects: PopMenuOptionType[],
    publish: PopMenuOptionType[],
    media: PopMenuOptionType[],
    user: PopMenuOptionType[],
    admin: PopMenuOptionType[]
  }
  export type PopMenuOptionType = {
    icon: React.ElementType<SvgIconProps>,
    title: string,
    path: string,
    style: string
  }
export type FormMappingType = {
  path : string | null,
  formPosition : string | null,
  // onBack : null | (()=> void),
  title: string 
}

export type SelectedExperienceType = {
  name: string
}

export type DropDownOptionType = {
  value: number,
  label: string
}
export type DropDownOptionWithIconType = {
  value: number,
  label: string
  icon: string,
  type: string
}

export type ModalPopupType = {
  closeModal: ()=>void;
  title: string;
  onSubmit: ()=>void;
}

export interface AddPlaceTypeInterface {
  name: string,
  file: File | null | string,
  icon: string | null,
  type: 'image' | 'icon' | '',
  isFormValid: boolean,
}

export interface AddPlaceInterface {
  name: string,
  type: string | '',
}


export interface RouteInterface {
  name: string;
  description: string;
  geo: {
      type: string;
      coordinates: number[][];
  };
  direction: string;
  color: string;
  experienceId: string;
}
