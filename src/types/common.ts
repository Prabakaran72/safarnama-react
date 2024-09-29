import GeoJSON from './GeoJSON';

export type UserData = {
    displayName: string,
    photoURL?: string,
    createdAt: Date,
    updatedAt?: Date,
    googleId?: string,
    facebookId?: string,
    token: Token,
    roles?: string[],
    bio?: string,
    _id: any,
  }

  export type Token = {
    accessToken: string,
    refreshToken: string,
  }

  //Media
  export type MediaDocument = {
    mimetype: string,
    md5: string,
    _id: any,
    path: string,
    thumbPath: string,
    created_at?: Date,
    updated_at?: Date,
    size: number,
    ownerId?: string,
    name?: string,
    description?: string,
    acknowledgements?: string,
    associatedExperiences?: string[],
    externalLinks?: { name: string, url: string }[],
  };
  
  //project
  export type Member = {
    userId: string,
    roles: string[]
    name?: string,
  };
  
  export type ProjectData = {
    _id: any,
    name: string,
    description?: string,
    createdAt?: Date,
    updatedAt?: Date,
    members?: Member[],
    iOS?: {
      appStoreId: string
      bundleId: string,
    },
    android?: {
      package: string
    },
  };

  //routes
  export type Direction = 'None' | 'Ascending' | 'Descending';

export type RouteDocument = {
  _id: any,
  name: string,
  geo: GeoJSON.LineString,
  direction: Direction,
  colour: string,
  created_at?: Date,
  updated_at?: Date,
  ownerId?: string,
  experienceId?: string,
  description?: string,
};



//Point of intrest
export type PointOfInterestDocument = {
    _id: any,
    name: string,
    description?: string
    location: GeoJSON.Point,
    triggerZone: TriggerZone,
    createdAt?: Date,
    updatedAt?: Date,
    ownerId?: string,
    experienceId?: string,
    type: PlaceType,
    media: MediaDocument[],
  };
  
  type TriggerZoneType = 'circle' | 'polygon';
  
  export type TriggerZone = {
    type: TriggerZoneType,
    lat: number,
    lng: number,
    colour: string,
    radius: number, // Radius in metres, on the earths surface
  };
  
  export type PlaceType = {
    name: string,
    imageIconURL?: string,
    matIcon?: string,
    _id: any,
    ownerId?: string,
    created_at?: string,
    updated_at?: string
  };
  