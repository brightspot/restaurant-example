import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type BulkUploadDraft = {
  __typename: 'BulkUploadDraft';
  containerId?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['UUID']['output']>;
};

/** Modification for objects that are part of a collection. */
export type CollectionObjectModification = {
  __typename: 'CollectionObjectModification';
  collections?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
};

export type ColorDistribution = Record & Recordable & {
  __typename: 'ColorDistribution';
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  n_0_0_0?: Maybe<Scalars['Float']['output']>;
  n_0_0_20?: Maybe<Scalars['Float']['output']>;
  n_0_0_40?: Maybe<Scalars['Float']['output']>;
  n_0_0_60?: Maybe<Scalars['Float']['output']>;
  n_0_0_80?: Maybe<Scalars['Float']['output']>;
  n_0_0_100?: Maybe<Scalars['Float']['output']>;
  n_0_40_20?: Maybe<Scalars['Float']['output']>;
  n_0_40_40?: Maybe<Scalars['Float']['output']>;
  n_0_40_60?: Maybe<Scalars['Float']['output']>;
  n_0_40_80?: Maybe<Scalars['Float']['output']>;
  n_0_60_20?: Maybe<Scalars['Float']['output']>;
  n_0_60_40?: Maybe<Scalars['Float']['output']>;
  n_0_60_60?: Maybe<Scalars['Float']['output']>;
  n_0_60_80?: Maybe<Scalars['Float']['output']>;
  n_0_80_20?: Maybe<Scalars['Float']['output']>;
  n_0_80_40?: Maybe<Scalars['Float']['output']>;
  n_0_80_60?: Maybe<Scalars['Float']['output']>;
  n_0_80_80?: Maybe<Scalars['Float']['output']>;
  n_0_100_20?: Maybe<Scalars['Float']['output']>;
  n_0_100_40?: Maybe<Scalars['Float']['output']>;
  n_0_100_60?: Maybe<Scalars['Float']['output']>;
  n_0_100_80?: Maybe<Scalars['Float']['output']>;
  n_24_40_20?: Maybe<Scalars['Float']['output']>;
  n_24_40_40?: Maybe<Scalars['Float']['output']>;
  n_24_40_60?: Maybe<Scalars['Float']['output']>;
  n_24_40_80?: Maybe<Scalars['Float']['output']>;
  n_24_60_20?: Maybe<Scalars['Float']['output']>;
  n_24_60_40?: Maybe<Scalars['Float']['output']>;
  n_24_60_60?: Maybe<Scalars['Float']['output']>;
  n_24_60_80?: Maybe<Scalars['Float']['output']>;
  n_24_80_20?: Maybe<Scalars['Float']['output']>;
  n_24_80_40?: Maybe<Scalars['Float']['output']>;
  n_24_80_60?: Maybe<Scalars['Float']['output']>;
  n_24_80_80?: Maybe<Scalars['Float']['output']>;
  n_24_100_20?: Maybe<Scalars['Float']['output']>;
  n_24_100_40?: Maybe<Scalars['Float']['output']>;
  n_24_100_60?: Maybe<Scalars['Float']['output']>;
  n_24_100_80?: Maybe<Scalars['Float']['output']>;
  n_48_40_20?: Maybe<Scalars['Float']['output']>;
  n_48_40_40?: Maybe<Scalars['Float']['output']>;
  n_48_40_60?: Maybe<Scalars['Float']['output']>;
  n_48_40_80?: Maybe<Scalars['Float']['output']>;
  n_48_60_20?: Maybe<Scalars['Float']['output']>;
  n_48_60_40?: Maybe<Scalars['Float']['output']>;
  n_48_60_60?: Maybe<Scalars['Float']['output']>;
  n_48_60_80?: Maybe<Scalars['Float']['output']>;
  n_48_80_20?: Maybe<Scalars['Float']['output']>;
  n_48_80_40?: Maybe<Scalars['Float']['output']>;
  n_48_80_60?: Maybe<Scalars['Float']['output']>;
  n_48_80_80?: Maybe<Scalars['Float']['output']>;
  n_48_100_20?: Maybe<Scalars['Float']['output']>;
  n_48_100_40?: Maybe<Scalars['Float']['output']>;
  n_48_100_60?: Maybe<Scalars['Float']['output']>;
  n_48_100_80?: Maybe<Scalars['Float']['output']>;
  n_72_40_20?: Maybe<Scalars['Float']['output']>;
  n_72_40_40?: Maybe<Scalars['Float']['output']>;
  n_72_40_60?: Maybe<Scalars['Float']['output']>;
  n_72_40_80?: Maybe<Scalars['Float']['output']>;
  n_72_60_20?: Maybe<Scalars['Float']['output']>;
  n_72_60_40?: Maybe<Scalars['Float']['output']>;
  n_72_60_60?: Maybe<Scalars['Float']['output']>;
  n_72_60_80?: Maybe<Scalars['Float']['output']>;
  n_72_80_20?: Maybe<Scalars['Float']['output']>;
  n_72_80_40?: Maybe<Scalars['Float']['output']>;
  n_72_80_60?: Maybe<Scalars['Float']['output']>;
  n_72_80_80?: Maybe<Scalars['Float']['output']>;
  n_72_100_20?: Maybe<Scalars['Float']['output']>;
  n_72_100_40?: Maybe<Scalars['Float']['output']>;
  n_72_100_60?: Maybe<Scalars['Float']['output']>;
  n_72_100_80?: Maybe<Scalars['Float']['output']>;
  n_96_40_20?: Maybe<Scalars['Float']['output']>;
  n_96_40_40?: Maybe<Scalars['Float']['output']>;
  n_96_40_60?: Maybe<Scalars['Float']['output']>;
  n_96_40_80?: Maybe<Scalars['Float']['output']>;
  n_96_60_20?: Maybe<Scalars['Float']['output']>;
  n_96_60_40?: Maybe<Scalars['Float']['output']>;
  n_96_60_60?: Maybe<Scalars['Float']['output']>;
  n_96_60_80?: Maybe<Scalars['Float']['output']>;
  n_96_80_20?: Maybe<Scalars['Float']['output']>;
  n_96_80_40?: Maybe<Scalars['Float']['output']>;
  n_96_80_60?: Maybe<Scalars['Float']['output']>;
  n_96_80_80?: Maybe<Scalars['Float']['output']>;
  n_96_100_20?: Maybe<Scalars['Float']['output']>;
  n_96_100_40?: Maybe<Scalars['Float']['output']>;
  n_96_100_60?: Maybe<Scalars['Float']['output']>;
  n_96_100_80?: Maybe<Scalars['Float']['output']>;
  n_120_40_20?: Maybe<Scalars['Float']['output']>;
  n_120_40_40?: Maybe<Scalars['Float']['output']>;
  n_120_40_60?: Maybe<Scalars['Float']['output']>;
  n_120_40_80?: Maybe<Scalars['Float']['output']>;
  n_120_60_20?: Maybe<Scalars['Float']['output']>;
  n_120_60_40?: Maybe<Scalars['Float']['output']>;
  n_120_60_60?: Maybe<Scalars['Float']['output']>;
  n_120_60_80?: Maybe<Scalars['Float']['output']>;
  n_120_80_20?: Maybe<Scalars['Float']['output']>;
  n_120_80_40?: Maybe<Scalars['Float']['output']>;
  n_120_80_60?: Maybe<Scalars['Float']['output']>;
  n_120_80_80?: Maybe<Scalars['Float']['output']>;
  n_120_100_20?: Maybe<Scalars['Float']['output']>;
  n_120_100_40?: Maybe<Scalars['Float']['output']>;
  n_120_100_60?: Maybe<Scalars['Float']['output']>;
  n_120_100_80?: Maybe<Scalars['Float']['output']>;
  n_144_40_20?: Maybe<Scalars['Float']['output']>;
  n_144_40_40?: Maybe<Scalars['Float']['output']>;
  n_144_40_60?: Maybe<Scalars['Float']['output']>;
  n_144_40_80?: Maybe<Scalars['Float']['output']>;
  n_144_60_20?: Maybe<Scalars['Float']['output']>;
  n_144_60_40?: Maybe<Scalars['Float']['output']>;
  n_144_60_60?: Maybe<Scalars['Float']['output']>;
  n_144_60_80?: Maybe<Scalars['Float']['output']>;
  n_144_80_20?: Maybe<Scalars['Float']['output']>;
  n_144_80_40?: Maybe<Scalars['Float']['output']>;
  n_144_80_60?: Maybe<Scalars['Float']['output']>;
  n_144_80_80?: Maybe<Scalars['Float']['output']>;
  n_144_100_20?: Maybe<Scalars['Float']['output']>;
  n_144_100_40?: Maybe<Scalars['Float']['output']>;
  n_144_100_60?: Maybe<Scalars['Float']['output']>;
  n_144_100_80?: Maybe<Scalars['Float']['output']>;
  n_168_40_20?: Maybe<Scalars['Float']['output']>;
  n_168_40_40?: Maybe<Scalars['Float']['output']>;
  n_168_40_60?: Maybe<Scalars['Float']['output']>;
  n_168_40_80?: Maybe<Scalars['Float']['output']>;
  n_168_60_20?: Maybe<Scalars['Float']['output']>;
  n_168_60_40?: Maybe<Scalars['Float']['output']>;
  n_168_60_60?: Maybe<Scalars['Float']['output']>;
  n_168_60_80?: Maybe<Scalars['Float']['output']>;
  n_168_80_20?: Maybe<Scalars['Float']['output']>;
  n_168_80_40?: Maybe<Scalars['Float']['output']>;
  n_168_80_60?: Maybe<Scalars['Float']['output']>;
  n_168_80_80?: Maybe<Scalars['Float']['output']>;
  n_168_100_20?: Maybe<Scalars['Float']['output']>;
  n_168_100_40?: Maybe<Scalars['Float']['output']>;
  n_168_100_60?: Maybe<Scalars['Float']['output']>;
  n_168_100_80?: Maybe<Scalars['Float']['output']>;
  n_192_40_20?: Maybe<Scalars['Float']['output']>;
  n_192_40_40?: Maybe<Scalars['Float']['output']>;
  n_192_40_60?: Maybe<Scalars['Float']['output']>;
  n_192_40_80?: Maybe<Scalars['Float']['output']>;
  n_192_60_20?: Maybe<Scalars['Float']['output']>;
  n_192_60_40?: Maybe<Scalars['Float']['output']>;
  n_192_60_60?: Maybe<Scalars['Float']['output']>;
  n_192_60_80?: Maybe<Scalars['Float']['output']>;
  n_192_80_20?: Maybe<Scalars['Float']['output']>;
  n_192_80_40?: Maybe<Scalars['Float']['output']>;
  n_192_80_60?: Maybe<Scalars['Float']['output']>;
  n_192_80_80?: Maybe<Scalars['Float']['output']>;
  n_192_100_20?: Maybe<Scalars['Float']['output']>;
  n_192_100_40?: Maybe<Scalars['Float']['output']>;
  n_192_100_60?: Maybe<Scalars['Float']['output']>;
  n_192_100_80?: Maybe<Scalars['Float']['output']>;
  n_216_40_20?: Maybe<Scalars['Float']['output']>;
  n_216_40_40?: Maybe<Scalars['Float']['output']>;
  n_216_40_60?: Maybe<Scalars['Float']['output']>;
  n_216_40_80?: Maybe<Scalars['Float']['output']>;
  n_216_60_20?: Maybe<Scalars['Float']['output']>;
  n_216_60_40?: Maybe<Scalars['Float']['output']>;
  n_216_60_60?: Maybe<Scalars['Float']['output']>;
  n_216_60_80?: Maybe<Scalars['Float']['output']>;
  n_216_80_20?: Maybe<Scalars['Float']['output']>;
  n_216_80_40?: Maybe<Scalars['Float']['output']>;
  n_216_80_60?: Maybe<Scalars['Float']['output']>;
  n_216_80_80?: Maybe<Scalars['Float']['output']>;
  n_216_100_20?: Maybe<Scalars['Float']['output']>;
  n_216_100_40?: Maybe<Scalars['Float']['output']>;
  n_216_100_60?: Maybe<Scalars['Float']['output']>;
  n_216_100_80?: Maybe<Scalars['Float']['output']>;
  n_240_40_20?: Maybe<Scalars['Float']['output']>;
  n_240_40_40?: Maybe<Scalars['Float']['output']>;
  n_240_40_60?: Maybe<Scalars['Float']['output']>;
  n_240_40_80?: Maybe<Scalars['Float']['output']>;
  n_240_60_20?: Maybe<Scalars['Float']['output']>;
  n_240_60_40?: Maybe<Scalars['Float']['output']>;
  n_240_60_60?: Maybe<Scalars['Float']['output']>;
  n_240_60_80?: Maybe<Scalars['Float']['output']>;
  n_240_80_20?: Maybe<Scalars['Float']['output']>;
  n_240_80_40?: Maybe<Scalars['Float']['output']>;
  n_240_80_60?: Maybe<Scalars['Float']['output']>;
  n_240_80_80?: Maybe<Scalars['Float']['output']>;
  n_240_100_20?: Maybe<Scalars['Float']['output']>;
  n_240_100_40?: Maybe<Scalars['Float']['output']>;
  n_240_100_60?: Maybe<Scalars['Float']['output']>;
  n_240_100_80?: Maybe<Scalars['Float']['output']>;
  n_264_40_20?: Maybe<Scalars['Float']['output']>;
  n_264_40_40?: Maybe<Scalars['Float']['output']>;
  n_264_40_60?: Maybe<Scalars['Float']['output']>;
  n_264_40_80?: Maybe<Scalars['Float']['output']>;
  n_264_60_20?: Maybe<Scalars['Float']['output']>;
  n_264_60_40?: Maybe<Scalars['Float']['output']>;
  n_264_60_60?: Maybe<Scalars['Float']['output']>;
  n_264_60_80?: Maybe<Scalars['Float']['output']>;
  n_264_80_20?: Maybe<Scalars['Float']['output']>;
  n_264_80_40?: Maybe<Scalars['Float']['output']>;
  n_264_80_60?: Maybe<Scalars['Float']['output']>;
  n_264_80_80?: Maybe<Scalars['Float']['output']>;
  n_264_100_20?: Maybe<Scalars['Float']['output']>;
  n_264_100_40?: Maybe<Scalars['Float']['output']>;
  n_264_100_60?: Maybe<Scalars['Float']['output']>;
  n_264_100_80?: Maybe<Scalars['Float']['output']>;
  n_288_40_20?: Maybe<Scalars['Float']['output']>;
  n_288_40_40?: Maybe<Scalars['Float']['output']>;
  n_288_40_60?: Maybe<Scalars['Float']['output']>;
  n_288_40_80?: Maybe<Scalars['Float']['output']>;
  n_288_60_20?: Maybe<Scalars['Float']['output']>;
  n_288_60_40?: Maybe<Scalars['Float']['output']>;
  n_288_60_60?: Maybe<Scalars['Float']['output']>;
  n_288_60_80?: Maybe<Scalars['Float']['output']>;
  n_288_80_20?: Maybe<Scalars['Float']['output']>;
  n_288_80_40?: Maybe<Scalars['Float']['output']>;
  n_288_80_60?: Maybe<Scalars['Float']['output']>;
  n_288_80_80?: Maybe<Scalars['Float']['output']>;
  n_288_100_20?: Maybe<Scalars['Float']['output']>;
  n_288_100_40?: Maybe<Scalars['Float']['output']>;
  n_288_100_60?: Maybe<Scalars['Float']['output']>;
  n_288_100_80?: Maybe<Scalars['Float']['output']>;
  n_312_40_20?: Maybe<Scalars['Float']['output']>;
  n_312_40_40?: Maybe<Scalars['Float']['output']>;
  n_312_40_60?: Maybe<Scalars['Float']['output']>;
  n_312_40_80?: Maybe<Scalars['Float']['output']>;
  n_312_60_20?: Maybe<Scalars['Float']['output']>;
  n_312_60_40?: Maybe<Scalars['Float']['output']>;
  n_312_60_60?: Maybe<Scalars['Float']['output']>;
  n_312_60_80?: Maybe<Scalars['Float']['output']>;
  n_312_80_20?: Maybe<Scalars['Float']['output']>;
  n_312_80_40?: Maybe<Scalars['Float']['output']>;
  n_312_80_60?: Maybe<Scalars['Float']['output']>;
  n_312_80_80?: Maybe<Scalars['Float']['output']>;
  n_312_100_20?: Maybe<Scalars['Float']['output']>;
  n_312_100_40?: Maybe<Scalars['Float']['output']>;
  n_312_100_60?: Maybe<Scalars['Float']['output']>;
  n_312_100_80?: Maybe<Scalars['Float']['output']>;
  n_336_40_20?: Maybe<Scalars['Float']['output']>;
  n_336_40_40?: Maybe<Scalars['Float']['output']>;
  n_336_40_60?: Maybe<Scalars['Float']['output']>;
  n_336_40_80?: Maybe<Scalars['Float']['output']>;
  n_336_60_20?: Maybe<Scalars['Float']['output']>;
  n_336_60_40?: Maybe<Scalars['Float']['output']>;
  n_336_60_60?: Maybe<Scalars['Float']['output']>;
  n_336_60_80?: Maybe<Scalars['Float']['output']>;
  n_336_80_20?: Maybe<Scalars['Float']['output']>;
  n_336_80_40?: Maybe<Scalars['Float']['output']>;
  n_336_80_60?: Maybe<Scalars['Float']['output']>;
  n_336_80_80?: Maybe<Scalars['Float']['output']>;
  n_336_100_20?: Maybe<Scalars['Float']['output']>;
  n_336_100_40?: Maybe<Scalars['Float']['output']>;
  n_336_100_60?: Maybe<Scalars['Float']['output']>;
  n_336_100_80?: Maybe<Scalars['Float']['output']>;
};

export type ColorDistribution__Data = {
  __typename: 'ColorDistribution__Data';
  distribution?: Maybe<ColorDistribution>;
};

export type CompositeImageFilter = {
  __typename: 'CompositeImageFilter';
  filters: Array<CompositeImageFilterType>;
};

export type CompositeImageFilterType = GrayscaleFilter | InvertFilter | SepiaFilter;

/** Represents a generic content. */
export type Content = {
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

export type ContentTemplateSource = {
  __typename: 'ContentTemplateSource';
  source?: Maybe<RecordRef>;
  sourceId?: Maybe<Scalars['UUID']['output']>;
};

/** Modification that adds CMS content information. */
export type Content__ObjectModification = {
  __typename: 'Content__ObjectModification';
  /** Returns the date when the given `object` was created. */
  createDate?: Maybe<Scalars['Date']['output']>;
  /** Returns the tool user that created the given `object`. */
  createUser?: Maybe<RecordRef>;
  draft?: Maybe<Scalars['Boolean']['output']>;
  overlaid?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the date when the given `object` was published. */
  publishDate?: Maybe<Scalars['Date']['output']>;
  /** Returns the tool user that published the given `object`. */
  publishUser?: Maybe<RecordRef>;
  scheduleDate?: Maybe<Scalars['Date']['output']>;
  scheduled?: Maybe<Scalars['Boolean']['output']>;
  trash?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the date when the given `object` was last updated. */
  updateDate?: Maybe<Scalars['Date']['output']>;
  /** Returns the tool user that last updated the given `object`. */
  updateUser?: Maybe<RecordRef>;
};

export type Directory__Data = {
  __typename: 'Directory__Data';
  automaticRawPaths?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Returns whether or not this object contains any paths. */
  hasPath?: Maybe<Scalars['Boolean']['output']>;
};

/** Modification that adds directory information. */
export type Directory__ObjectModification = {
  __typename: 'Directory__ObjectModification';
  /** Returns the object name. */
  objectName?: Maybe<Scalars['String']['output']>;
  /** Returns the path types. */
  pathTypes?: Maybe<MapOfDirectory__PathType>;
  paths?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Returns the paths mode. */
  pathsMode?: Maybe<Directory__PathsMode>;
};

export enum Directory__PathType {
  Alias = 'ALIAS',
  Permalink = 'PERMALINK',
  Redirect = 'REDIRECT',
  RedirectTemporary = 'REDIRECT_TEMPORARY'
}

export enum Directory__PathsMode {
  Automatic = 'AUTOMATIC',
  Manual = 'MANUAL'
}

export type Draft__NameData = {
  __typename: 'Draft__NameData';
  index?: Maybe<Scalars['Int']['output']>;
};

export type ExternalContentRichTextElement = Record & Recordable & RichTextElement & {
  __typename: 'ExternalContentRichTextElement';
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  maximumHeight?: Maybe<Scalars['Int']['output']>;
  maximumWidth?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ExternalItemImported = {
  __typename: 'ExternalItemImported';
  converterType?: Maybe<RecordRef>;
  itemId?: Maybe<Scalars['String']['output']>;
  sourceType?: Maybe<Scalars['String']['output']>;
};

export type GeoPoint = {
  __typename: 'GeoPoint';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** A type with fields providing the ability to fetch a single record. */
export type GetEntry = {
  __typename: 'GetEntry';
  /** Provides the ability to fetch a `Singleton` instance. */
  Singleton?: Maybe<GetSingleton>;
};

export type GetSingleton = {
  __typename: 'GetSingleton';
  /** Provides access to **Restaurant** `Singleton` instance data */
  Restaurant?: Maybe<RestaurantGet>;
};

/** Contains global modification data for a **Record** where each field corresponds to a java class that declares a group of global fields. */
export type Globals = {
  __typename: 'Globals';
  /** Modification fields declared by [BulkUploadDraft](#docs-link:BulkUploadDraft). */
  BulkUploadDraft: BulkUploadDraft;
  /** Modification for objects that are part of a collection. */
  CollectionObjectModification: CollectionObjectModification;
  /** Modification fields declared by [Data](#docs-link:ColorDistribution__Data). */
  ColorDistribution__Data: ColorDistribution__Data;
  /** Modification fields declared by [ContentTemplateSource](#docs-link:ContentTemplateSource). */
  ContentTemplateSource: ContentTemplateSource;
  /** Modification that adds CMS content information. */
  Content__ObjectModification: Content__ObjectModification;
  /** Modification fields declared by [Data](#docs-link:Directory__Data). */
  Directory__Data: Directory__Data;
  /** Modification that adds directory information. */
  Directory__ObjectModification: Directory__ObjectModification;
  /** Modification fields declared by [NameData](#docs-link:Draft__NameData). */
  Draft__NameData: Draft__NameData;
  /** Modification fields declared by [ExternalItemImported](#docs-link:ExternalItemImported). */
  ExternalItemImported: ExternalItemImported;
  /** Global modification that allows storage of all the contextual edits for the assets within an object. */
  ImageMetadataOverrideData: ImageMetadataOverrideData;
  /** Modification fields declared by [SiteCopierObjectModification](#docs-link:SiteCopierObjectModification). */
  SiteCopierObjectModification: SiteCopierObjectModification;
  /** Modification that adds object accessibility information per site. */
  Site__ObjectModification: Site__ObjectModification;
  /** Users that are interested in "watching" a piece of content for changes. */
  WatcherObjectModification: WatcherObjectModification;
  /** Modification fields declared by [Data](#docs-link:WorkStream__Data). */
  WorkStream__Data: WorkStream__Data;
  /** Modification fields declared by [Data](#docs-link:Workflow__Data). */
  Workflow__Data: Workflow__Data;
};

export type GrayscaleFilter = {
  __typename: 'GrayscaleFilter';
  _?: Maybe<Scalars['Void']['output']>;
};

export type GuideFieldImageRichTextElement = PreviewField & Record & Recordable & RichTextElement & {
  __typename: 'GuideFieldImageRichTextElement';
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  _preview?: Maybe<StorageItem>;
  alignment?: Maybe<GuideFieldImageRichTextElement__Alignment>;
  altText?: Maybe<Scalars['String']['output']>;
  imageFile?: Maybe<StorageItem>;
};


export type GuideFieldImageRichTextElement_PreviewArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export enum GuideFieldImageRichTextElement__Alignment {
  Center = 'CENTER',
  Right = 'RIGHT'
}

export type GuideFieldLinkRichTextElement = Record & Recordable & RichTextElement & {
  __typename: 'GuideFieldLinkRichTextElement';
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  linkText?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ImageCropBoundingBox = {
  __typename: 'ImageCropBoundingBox';
  height: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type ImageCropNamed = {
  __typename: 'ImageCropNamed';
  bounds: ImageCropBoundingBox;
  name: Scalars['String']['output'];
};

export type ImageCrops = {
  __typename: 'ImageCrops';
  box?: Maybe<ImageCropNamed>;
  boxes: Array<ImageCropNamed>;
};


export type ImageCropsBoxArgs = {
  name: Scalars['String']['input'];
};

export type ImageEdits = {
  __typename: 'ImageEdits';
  brightness: Scalars['Float']['output'];
  contrast: Scalars['Float']['output'];
  filter?: Maybe<ImageFilter>;
  flipH: Scalars['Boolean']['output'];
  flipV: Scalars['Boolean']['output'];
  rotate: Scalars['Int']['output'];
  sharpen: Scalars['Int']['output'];
};

export type ImageFilter = CompositeImageFilter | GrayscaleFilter | InvertFilter | SepiaFilter;

export type ImageFocusGroup = {
  __typename: 'ImageFocusGroup';
  coordinates: ImageFocusPoint;
  name: Scalars['String']['output'];
};

export type ImageFocusPoint = {
  __typename: 'ImageFocusPoint';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type ImageFocuses = {
  __typename: 'ImageFocuses';
  default?: Maybe<ImageFocusPoint>;
  point?: Maybe<ImageFocusGroup>;
  points: Array<ImageFocusGroup>;
};


export type ImageFocusesPointArgs = {
  name: Scalars['String']['input'];
};

/** Represents image editing data that is a result of contextual editing of an asset. */
export type ImageMetadataOverride = Record & Recordable & {
  __typename: 'ImageMetadataOverride';
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<MapOfJson>;
  path?: Maybe<Scalars['String']['output']>;
  targetField?: Maybe<Scalars['String']['output']>;
  targetId?: Maybe<Scalars['UUID']['output']>;
};

/** Global modification that allows storage of all the contextual edits for the assets within an object. */
export type ImageMetadataOverrideData = {
  __typename: 'ImageMetadataOverrideData';
  overrides?: Maybe<Array<Maybe<ImageMetadataOverride>>>;
};

/** An image's EXIF orientation. */
export enum ImageOrientation {
  /** Unknown */
  Exif_0Unknown = 'EXIF_0_UNKNOWN',
  /** Normal */
  Exif_1TopLeft = 'EXIF_1_TOP_LEFT',
  /** Mirror horizontally */
  Exif_2TopRight = 'EXIF_2_TOP_RIGHT',
  /** Rotate 180° */
  Exif_3BottomRight = 'EXIF_3_BOTTOM_RIGHT',
  /** Mirror vertically */
  Exif_4BottomLeft = 'EXIF_4_BOTTOM_LEFT',
  /** Mirror horizontally, rotate 270° clockwise */
  Exif_5LeftTop = 'EXIF_5_LEFT_TOP',
  /** Rotate 90° clockwise */
  Exif_6RightTop = 'EXIF_6_RIGHT_TOP',
  /** Mirror horizontally, rotate 90° clockwise */
  Exif_7RightBottom = 'EXIF_7_RIGHT_BOTTOM',
  /** Rotate 270° clockwise */
  Exif_8LeftBottom = 'EXIF_8_LEFT_BOTTOM'
}

export type InvertFilter = {
  __typename: 'InvertFilter';
  _?: Maybe<Scalars['Void']['output']>;
};

export type MapOfDirectory__PathType = {
  __typename: 'MapOfDirectory__PathType';
  entries: Array<MapOfDirectory__PathTypeEntry>;
  get?: Maybe<Directory__PathType>;
};


export type MapOfDirectory__PathTypeGetArgs = {
  key: Scalars['String']['input'];
};

export type MapOfDirectory__PathTypeEntry = {
  __typename: 'MapOfDirectory__PathTypeEntry';
  key: Scalars['String']['output'];
  value?: Maybe<Directory__PathType>;
};

export type MapOfJson = {
  __typename: 'MapOfJson';
  entries: Array<MapOfJsonEntry>;
  get?: Maybe<Scalars['Json']['output']>;
};


export type MapOfJsonGetArgs = {
  key: Scalars['String']['input'];
};

export type MapOfJsonEntry = {
  __typename: 'MapOfJsonEntry';
  key: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Mark = {
  __typename: 'Mark';
  data?: Maybe<MarkData>;
  descendants: Scalars['Int']['output'];
  end: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
};

export type MarkData = ExternalContentRichTextElement | GuideFieldImageRichTextElement | GuideFieldLinkRichTextElement | MarkDataHtmlElement | MentionRichTextElement | ReferenceRichTextElement;

export type MarkDataHtmlAttribute = {
  __typename: 'MarkDataHtmlAttribute';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type MarkDataHtmlElement = {
  __typename: 'MarkDataHtmlElement';
  attributes: Array<MarkDataHtmlAttribute>;
  name: Scalars['String']['output'];
};

export type MarkedText = {
  __typename: 'MarkedText';
  marks: Array<Mark>;
  text: Scalars['String']['output'];
};

export type MentionRichTextElement = Record & Recordable & RichTextElement & {
  __typename: 'MentionRichTextElement';
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  user?: Maybe<RecordRef>;
};

export type PathsField = {
  _urls: UrLs;
};

export type PreviewField = {
  _preview?: Maybe<StorageItem>;
};


export type PreviewField_PreviewArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Record = {
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

export type RecordEntry = {
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

export type RecordRef = RecordRefField & Recordable & {
  __typename: 'RecordRef';
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  _type?: Maybe<Scalars['ID']['output']>;
};

export type RecordRefField = {
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
};

/** The super interface for all types backed by data models, e.g. Java  classes that implement `Recordable`. This interface declares a single `_id` field containing the UUID of the record. A corresponding `_type` field is intentionally omitted as it can be derived programmatically from the built-in GraphQL `__typename` field. Each GraphQL `type` that implements this interface will be annotated  with the `@gca_object_type` directive which contains the backing data model's type ID. */
export type Recordable = {
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
};

export type Reference = Record & Recordable & {
  __typename: 'Reference';
  ReferenceMod: ReferenceMod;
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  object?: Maybe<RecordRefField>;
};

/** Group of modifications of the [Reference](#docs-link:Reference) type, where each field corresponds to a Java class that declares a group of fields. */
export type ReferenceMod = {
  __typename: 'ReferenceMod';
  /** Modification fields declared by [RichTextReference](#docs-link:RichTextReference). */
  RichTextReference: RichTextReference;
};

/**
 * RichTextElement implementation that represents Reference objects, also known as RTE enhancements.
 * Note that this class isn't annotated with
 * com.psddev.cms.db.RichTextElement.Tag on purpose to prevent it from being displayed in the rich text editor UI. Instances of this class are only created at runtime by RichTextViewBuilder when using any of its `build` APIs that accept ReferentialText as a parameter.
 *
 *
 */
export type ReferenceRichTextElement = Record & Recordable & RichTextElement & {
  __typename: 'ReferenceRichTextElement';
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Reference>;
};

export type Restaurant = Content & PathsField & Record & RecordEntry & RecordRefField & Recordable & Singleton & {
  __typename: 'Restaurant';
  SingletonMod: SingletonMod;
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  _urls: UrLs;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** Provides access to various fields and related data for the **Restaurant**, such as state, derivations, previews, views, overlays, and revisions. The availability of certain fields depends on schema configuration and other factors. This type supports querying detailed information, with options for filtering and retrieving specific aspects of the metadata and associated content. */
export type RestaurantGet = {
  __typename: 'RestaurantGet';
  /** Allows access to the various fields for the given **Restaurant**, including globals. Note that any configured `GCASchemaSettings#fieldFilter` settings might affect which fields appear here. */
  State?: Maybe<Restaurant>;
  /** Gets the current database time. This value can be used as input to save mutations via the lastRead argument as a safeguard against accidentally overwriting data with stale content. */
  now: Scalars['Long']['output'];
};

/** An interface indicating the type is capable of producing a revision that can be surfaced in the CMS RevisionsWidget. */
export type RevisionInterface = {
  RevisionInterfaceMod: RevisionInterfaceMod;
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

/** Group of modifications of the [Revision](#docs-link:RevisionInterface) type, where each field corresponds to a Java class that declares a group of fields. */
export type RevisionInterfaceMod = {
  __typename: 'RevisionInterfaceMod';
  /** Modification fields declared by [RevisionModification](#docs-link:RevisionModification). */
  RevisionModification: RevisionModification;
};

export type RevisionModification = {
  __typename: 'RevisionModification';
  /** true if the revision is part of a draft's workflow process. */
  isDraftWorkflowItem: Scalars['Boolean']['output'];
  revisionSortDate?: Maybe<Scalars['String']['output']>;
  revisionSortName?: Maybe<Scalars['String']['output']>;
  revisionSortObjectId?: Maybe<Scalars['UUID']['output']>;
};

export type RichText = {
  __typename: 'RichText';
  marked: MarkedText;
  raw: Scalars['String']['output'];
};

export type RichTextElement = {
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

export type RichTextReference = {
  __typename: 'RichTextReference';
  alignment?: Maybe<Scalars['String']['output']>;
  imageSize?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  preview?: Maybe<Scalars['String']['output']>;
};

/** The root `query` type, granting access to all the major GCA read operations. */
export type RootQuery = {
  __typename: 'RootQuery';
  /** Fetch a single record by a unique identifier. This field is present when there is at least 1 read (or write) content type included as an entry type. See `GCASchemaSettings#getReadEntryTypes` and `GCASchemaSettings#getReadWriteEntryTypes` for more information. */
  Get?: Maybe<GetEntry>;
};

export type SepiaFilter = {
  __typename: 'SepiaFilter';
  _?: Maybe<Scalars['Void']['output']>;
};

export type Singleton = {
  SingletonMod: SingletonMod;
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

export type SingletonData = {
  __typename: 'SingletonData';
  key?: Maybe<Scalars['String']['output']>;
};

/** Group of modifications of the [Singleton](#docs-link:Singleton) type, where each field corresponds to a Java class that declares a group of fields. */
export type SingletonMod = {
  __typename: 'SingletonMod';
  /** Modification fields declared by [SingletonData](#docs-link:SingletonData). */
  SingletonData: SingletonData;
};

export type SiteCopierObjectModification = {
  __typename: 'SiteCopierObjectModification';
  copySourceId?: Maybe<Scalars['UUID']['output']>;
  isFromSiteCopier?: Maybe<Scalars['Boolean']['output']>;
};

export type SiteRefInput = {
  /** Fetch a **Site** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** Fetch a **Site** instance by its unique **Name**. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Fetch a **Site** instance by its unique **URLs**. */
  urls?: InputMaybe<Scalars['String']['input']>;
};

/** Modification that adds object accessibility information per site. */
export type Site__ObjectModification = {
  __typename: 'Site__ObjectModification';
  /** Returns the set of blacklisted sites that aren't allowed to access this object. */
  blacklist?: Maybe<Array<Maybe<RecordRef>>>;
  /** Returns the set of consumer sites that are allowed to access the object. */
  consumers?: Maybe<Array<Maybe<RecordRef>>>;
  isGlobal?: Maybe<Scalars['Boolean']['output']>;
  /** Returns the owner that controls this object. */
  owner?: Maybe<RecordRef>;
};

/** An item in a storage system, as represented in the Dari StorageItem Java API. */
export type StorageItem = {
  __typename: 'StorageItem';
  contentType?: Maybe<Scalars['String']['output']>;
  httpHeaders: Scalars['Json']['output'];
  inStorage: Scalars['Boolean']['output'];
  media?: Maybe<StorageItemMedia>;
  metadata?: Maybe<Scalars['Json']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  private: Scalars['Boolean']['output'];
  publicUrl?: Maybe<Scalars['String']['output']>;
  securePublicUrl?: Maybe<Scalars['String']['output']>;
  storage?: Maybe<Scalars['String']['output']>;
};


/** An item in a storage system, as represented in the Dari StorageItem Java API. */
export type StorageItemHttpHeadersArgs = {
  first?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** An item in a storage system, as represented in the Dari StorageItem Java API. */
export type StorageItemMetadataArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type StorageItemMedia = StorageItemMedia__Image;

export type StorageItemMedia__Image = {
  __typename: 'StorageItemMedia__Image';
  byline?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  copyrightNotice?: Maybe<Scalars['String']['output']>;
  credit?: Maybe<Scalars['String']['output']>;
  crop?: Maybe<ImageCrops>;
  dateTaken?: Maybe<Scalars['Long']['output']>;
  edits: ImageEdits;
  focus: ImageFocuses;
  height?: Maybe<Scalars['Int']['output']>;
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  location?: Maybe<GeoPoint>;
  orientation?: Maybe<ImageOrientation>;
  source?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type UrLs = {
  __typename: 'URLs';
  paths: Array<UrLsPath>;
  permalink?: Maybe<Scalars['String']['output']>;
};


export type UrLsPermalinkArgs = {
  site?: InputMaybe<SiteRefInput>;
};

export type UrLsPath = {
  __typename: 'URLsPath';
  path?: Maybe<Scalars['String']['output']>;
  site?: Maybe<RecordRef>;
  type?: Maybe<UrLsPathType>;
};

export enum UrLsPathType {
  Alias = 'ALIAS',
  Permalink = 'PERMALINK',
  Redirect = 'REDIRECT',
  RedirectTemporary = 'REDIRECT_TEMPORARY'
}

/** Users that are interested in "watching" a piece of content for changes. */
export type WatcherObjectModification = {
  __typename: 'WatcherObjectModification';
  removedWatchers?: Maybe<Array<Maybe<RecordRef>>>;
  watchers?: Maybe<Array<Maybe<RecordRef>>>;
};

export type WorkStream__Data = {
  __typename: 'WorkStream__Data';
  completeIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type WorkflowLog = Record & Recordable & RevisionInterface & {
  __typename: 'WorkflowLog';
  RevisionInterfaceMod: RevisionInterfaceMod;
  /** Contains global `Modification` fields for this `Record` instance. */
  _globals: Globals;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<RichText>;
  date?: Maybe<Scalars['Date']['output']>;
  /** true if the revision is related to Drafts. */
  isDraftWorkflowItem: Scalars['Boolean']['output'];
  mainObjectId?: Maybe<Scalars['UUID']['output']>;
  mainObjectLabel?: Maybe<Scalars['String']['output']>;
  newWorkflowState?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['UUID']['output']>;
  objectLabel?: Maybe<Scalars['String']['output']>;
  objectTypeId?: Maybe<Scalars['UUID']['output']>;
  oldWorkflowState?: Maybe<Scalars['String']['output']>;
  siteId?: Maybe<Scalars['UUID']['output']>;
  transition?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  workflowId?: Maybe<Scalars['UUID']['output']>;
};

export type Workflow__Data = {
  __typename: 'Workflow__Data';
  currentLog?: Maybe<WorkflowLog>;
  currentState?: Maybe<Scalars['String']['output']>;
};

export type HealthCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthCheckQuery = { __typename: 'RootQuery' };

export type GetRestaurantQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRestaurantQuery = (
  { __typename: 'RootQuery' }
  & { Get?: Maybe<(
    { __typename: 'GetEntry' }
    & { Singleton?: Maybe<(
      { __typename: 'GetSingleton' }
      & { Restaurant?: Maybe<(
        { __typename: 'RestaurantGet' }
        & { State?: Maybe<(
          { __typename: 'Restaurant' }
          & Pick<
            Restaurant,
            | '_id'
            | 'name'
            | 'description'
            | 'email'
            | 'website'
          >
        )> }
      )> }
    )> }
  )> }
);


export const HealthCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HealthCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<HealthCheckQuery, HealthCheckQueryVariables>;
export const GetRestaurantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRestaurant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Get"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Singleton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Restaurant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"State"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRestaurantQuery, GetRestaurantQueryVariables>;