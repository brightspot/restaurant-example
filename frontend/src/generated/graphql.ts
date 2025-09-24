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
  Instant: { input: any; output: any; }
  Json: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  Long: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export enum AngularUnit {
  /** tk tk tk */
  Degrees = 'DEGREES',
  /** tk tk tk */
  Meters = 'METERS',
  /** tk tk tk */
  Radians = 'RADIANS'
}

export type ClearUrlsInput = {
  _?: InputMaybe<Scalars['Void']['input']>;
};

export type CompositeImageFilter = {
  __typename: 'CompositeImageFilter';
  filters: Array<CompositeImageFilterType>;
};

export type CompositeImageFilterType = GrayscaleFilter | InvertFilter | SepiaFilter;

/** Represents a generic content. */
export type Content = {
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

export type ContentActionContextInput = {
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  lastRead?: InputMaybe<Scalars['Long']['input']>;
  site?: InputMaybe<SiteRefInput>;
};

export type ContentActionTypes = {
  __typename: 'ContentActionTypes';
  Save?: Maybe<SaveAction>;
};

export type ContentActions = {
  __typename: 'ContentActions';
  Action?: Maybe<ContentActionTypes>;
  Transaction?: Maybe<TransactionResult>;
};


export type ContentActionsTransactionArgs = {
  context?: InputMaybe<ContentActionContextInput>;
  writes: Array<TransactionInput>;
};

export type FromAllInput = {
  _?: InputMaybe<Scalars['Void']['input']>;
};

export type FromInput = {
  /** Corresponds to the Java method `Query#fromAll`. */
  all?: InputMaybe<FromAllInput>;
  /** Corresponds to the Java method `Query#from`. */
  class?: InputMaybe<Scalars['ID']['input']>;
  /** Corresponds to the Java method `Query#fromGroup`. */
  group?: InputMaybe<Scalars['ID']['input']>;
  /** Corresponds to the Java method `Query#fromType`. */
  type?: InputMaybe<QueryFromType>;
  /** Corresponds to the Java method `Query#fromType`. */
  typeId?: InputMaybe<Scalars['UUID']['input']>;
};

export type GenerateUrlsInput = {
  _?: InputMaybe<Scalars['Void']['input']>;
};

/** tk tk tk */
export type GeoAreaInput = {
  geometry?: InputMaybe<GeoMultiPolygonInput>;
};

export type GeoCircleInput = {
  center: GeoPointInput;
  radiusUnit: AngularUnit;
  radiusValue: Scalars['Float']['input'];
};

export type GeoLinearPolygonInput = {
  holes?: InputMaybe<Array<GeoLinearRingInput>>;
  ring: GeoLinearRingInput;
};

export type GeoLinearRingInput = {
  points: Array<GeoPointInput>;
};

export type GeoMultiPolygonInput = {
  polygons: Array<GeoPolygonInput>;
};

export type GeoPoint = {
  __typename: 'GeoPoint';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type GeoPointInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type GeoPolygonInput = {
  circle?: InputMaybe<GeoCircleInput>;
  polygon?: InputMaybe<GeoLinearPolygonInput>;
};

/** A type with fields providing the ability to fetch a single record. */
export type GetEntry = {
  __typename: 'GetEntry';
  /** Provides the ability to fetch a `Recordable` by a unique identifier. */
  Record?: Maybe<RecordGet>;
  /** Provides the ability to fetch a `Singleton` instance. */
  Singleton?: Maybe<GetSingleton>;
};


/** A type with fields providing the ability to fetch a single record. */
export type GetEntryRecordArgs = {
  with: RecordGetInput;
};

export type GetSingleton = {
  __typename: 'GetSingleton';
  /** Provides access to **Menu** `Singleton` instance data */
  Menu?: Maybe<MenuGet>;
  /** Provides access to **Restaurant** `Singleton` instance data */
  Restaurant?: Maybe<RestaurantGet>;
};

export type GrayscaleFilter = {
  __typename: 'GrayscaleFilter';
  _?: Maybe<Scalars['Void']['output']>;
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

export type Menu = Content & PathsField & Record & RecordEntry & Recordable & Singleton & {
  __typename: 'Menu';
  SingletonMod: SingletonMod;
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  _urls: UrLs;
  categories?: Maybe<Array<Maybe<MenuCategory>>>;
};

export type MenuCategory = Content & PathsField & Record & RecordEntry & Recordable & {
  __typename: 'MenuCategory';
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  _urls: UrLs;
  description?: Maybe<Scalars['String']['output']>;
  menuItems?: Maybe<Array<Maybe<MenuItem>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MenuCategoryGetInput = {
  /** Fetch a **Menu Category** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** Fetch a **Menu Category** instance by its unique URL. */
  _url?: InputMaybe<Scalars['String']['input']>;
};

/** Provides access to various fields and related data for the **Menu**, such as state, derivations, previews, views, overlays, and revisions. The availability of certain fields depends on schema configuration and other factors. This type supports querying detailed information, with options for filtering and retrieving specific aspects of the metadata and associated content. */
export type MenuGet = {
  __typename: 'MenuGet';
  /** Allows access to the various fields for the given **Menu**, including globals. Note that any configured `GCASchemaSettings#fieldFilter` settings might affect which fields appear here. */
  State?: Maybe<Menu>;
  /** Gets the current database time. This value can be used as input to save mutations via the lastRead argument as a safeguard against accidentally overwriting data with stale content. */
  now: Scalars['Long']['output'];
};

export type MenuGetInput = {
  /** Fetch a **Menu** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** Fetch a **Menu** instance by its unique URL. */
  _url?: InputMaybe<Scalars['String']['input']>;
  /** Fetch a **Menu** instance by its unique **Key**. */
  key?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItem = Content & PathsField & PreviewField & Record & RecordEntry & Recordable & {
  __typename: 'MenuItem';
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  _preview?: Maybe<StorageItem>;
  _urls: UrLs;
  category?: Maybe<MenuCategory>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<StorageItem>;
  isGlutenFree: Scalars['Boolean']['output'];
  isSpecial: Scalars['Boolean']['output'];
  isUnavailable: Scalars['Boolean']['output'];
  isVegan: Scalars['Boolean']['output'];
  isVegetarian: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};


export type MenuItem_PreviewArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type MenuItemGetInput = {
  /** Fetch a **Menu Item** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** Fetch a **Menu Item** instance by its unique URL. */
  _url?: InputMaybe<Scalars['String']['input']>;
};

/** Metadata about a page of query results that can help to inform how to fetch subsequent pages as well as present the data to an end user. */
export type PageInfo = {
  __typename: 'PageInfo';
  /** The total number of results available in the query. */
  count: Scalars['Long']['output'];
  /** The 1-based offset of the first item on the current page. */
  firstItemIndex: Scalars['Long']['output'];
  /** The offset for the first page of results. This is always zero. */
  firstOffset: Scalars['Long']['output'];
  /** True if there is a next page of results, false otherwise. */
  hasNext: Scalars['Boolean']['output'];
  /** True if there are any pages with results, false otherwise. */
  hasPages: Scalars['Boolean']['output'];
  /** True if there is a previous page of results, false otherwise. */
  hasPrevious: Scalars['Boolean']['output'];
  /** The 1-based offset of the last item on the current page. */
  lastItemIndex: Scalars['Long']['output'];
  /** The offset for the last page of results. */
  lastOffset: Scalars['Long']['output'];
  /** The maximum number of results to fetch in a single query. */
  limit: Scalars['Int']['output'];
  /** The offset for the next page of results. */
  nextOffset: Scalars['Long']['output'];
  /** Gets the current database time. This value can be used as input to save mutations via the lastRead argument as a safeguard against accidentally overwriting data with stale content. */
  now: Scalars['Long']['output'];
  /** The offset of the current page in the overall query results. */
  offset: Scalars['Long']['output'];
  /** The total number of pages available in the query. */
  pageCount: Scalars['Long']['output'];
  /** The current page number within this result set. */
  pageIndex: Scalars['Long']['output'];
  /** The offset for the previous page of results. If there is no previous page, then zero is returned. */
  previousOffset: Scalars['Long']['output'];
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

export type QueryEntry = {
  __typename: 'QueryEntry';
  /** Provides fields for accessing the Dari `Query` API. */
  Records?: Maybe<QuerySelect>;
};


export type QueryEntryRecordsArgs = {
  from: FromInput;
  having?: InputMaybe<QueryPredicateInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Long']['input']>;
  options?: InputMaybe<QueryOptionsInput>;
  sortBy?: InputMaybe<Array<QuerySortInput>>;
  where?: InputMaybe<QueryPredicateInput>;
};

export enum QueryFromType {
  MenuCategory = 'MenuCategory',
  MenuItem = 'MenuItem',
  Reservation = 'Reservation',
  RestaurantLocation = 'RestaurantLocation'
}

export type QueryMissingPredicateValueInput = {
  _?: InputMaybe<Scalars['Void']['input']>;
};

export type QueryOptionsCustomInput = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type QueryOptionsInput = {
  custom?: InputMaybe<Array<QueryOptionsCustomInput>>;
  master?: InputMaybe<Scalars['Boolean']['input']>;
  noCache?: InputMaybe<Scalars['Boolean']['input']>;
  noLatentCache?: InputMaybe<Scalars['Boolean']['input']>;
  referenceOnly?: InputMaybe<Scalars['Boolean']['input']>;
  resolveInvisible?: InputMaybe<Scalars['Boolean']['input']>;
  resolveToReferenceOnly?: InputMaybe<Scalars['Boolean']['input']>;
  timeout?: InputMaybe<Scalars['Float']['input']>;
};

export type QueryPhrasePredicateValueInput = {
  phrase?: InputMaybe<Scalars['String']['input']>;
  proximity?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type QueryPredicateInput = {
  /** Specifies the values for argument placeholders in the `Query` predicate. */
  arguments?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>>>;
  /** Specifies particular named argument values. */
  namedValues?: InputMaybe<Array<InputMaybe<QueryPredicateNamedValueInput>>>;
  /** Specifies the predicate for the `Query`. */
  predicate?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPredicateNamedValueInput = {
  name: Scalars['String']['input'];
  value: QueryPredicateValueInput;
};

export type QueryPredicateValueInput = {
  Missing?: InputMaybe<QueryMissingPredicateValueInput>;
  QueryPhrase?: InputMaybe<QueryPhrasePredicateValueInput>;
  QueryWildcardPhrase?: InputMaybe<QueryWildcardPhrasePredicateValueInput>;
  Region?: InputMaybe<GeoAreaInput>;
};

/** Represents the result of a Dari `Query#select`. */
export type QuerySelect = {
  __typename: 'QuerySelect';
  /** The `Record` items in a page of `Query` results. */
  items: Array<RecordEntry>;
  /** Metadata about a page of `Query` results. */
  pageInfo: PageInfo;
};

export type QuerySortByAgeInput = {
  field: Scalars['String']['input'];
  order: SortByAge;
  weight: Scalars['Float']['input'];
};

export type QuerySortByDistanceInput = {
  field: Scalars['String']['input'];
  order: SortByDistance;
  point: GeoPointInput;
};

export type QuerySortByFieldInput = {
  name: Scalars['String']['input'];
  order: SortByField;
};

export type QuerySortByRelevanceInput = {
  predicate: QueryPredicateInput;
  weight: Scalars['Float']['input'];
};

export type QuerySortInput = {
  age?: InputMaybe<QuerySortByAgeInput>;
  distance?: InputMaybe<QuerySortByDistanceInput>;
  field?: InputMaybe<QuerySortByFieldInput>;
  relevance?: InputMaybe<QuerySortByRelevanceInput>;
};

export type QueryWildcardPhrasePredicateValueInput = {
  query: Scalars['String']['input'];
};

export type Record = {
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

export type RecordEntry = {
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

/** Provides access to various fields and related data for the **Record**, such as state, derivations, previews, views, overlays, and revisions. The availability of certain fields depends on schema configuration and other factors. This type supports querying detailed information, with options for filtering and retrieving specific aspects of the metadata and associated content. */
export type RecordGet = {
  __typename: 'RecordGet';
  /** Allows access to the various fields for the given **Record**, including globals. Note that any configured `GCASchemaSettings#fieldFilter` settings might affect which fields appear here. */
  State?: Maybe<RecordEntry>;
  /** Gets the current database time. This value can be used as input to save mutations via the lastRead argument as a safeguard against accidentally overwriting data with stale content. */
  now: Scalars['Long']['output'];
};

export type RecordGetByTypeInput = {
  /** Fetch a **Menu** instance by a unique identifier. */
  Menu?: InputMaybe<MenuGetInput>;
  /** Fetch a **Menu Category** instance by a unique identifier. */
  MenuCategory?: InputMaybe<MenuCategoryGetInput>;
  /** Fetch a **Menu Item** instance by a unique identifier. */
  MenuItem?: InputMaybe<MenuItemGetInput>;
  /** Fetch a **Reservation** instance by a unique identifier. */
  Reservation?: InputMaybe<ReservationGetInput>;
  /** Fetch a **Restaurant** instance by a unique identifier. */
  Restaurant?: InputMaybe<RestaurantGetInput>;
  /** Fetch a **Restaurant Location** instance by a unique identifier. */
  RestaurantLocation?: InputMaybe<RestaurantLocationGetInput>;
};

export type RecordGetInput = {
  /** Fetch a **Record** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** Fetch a specific **Record** type. */
  _type?: InputMaybe<RecordGetByTypeInput>;
  /** Fetch a **Record** instance by its unique URL. */
  _url?: InputMaybe<Scalars['String']['input']>;
};

/** `@oneOf` input type for saving a **Record** instance. */
export type RecordMainDiffInput = {
  /** Input type for saving a **Reservation** instance */
  ReservationDiff?: InputMaybe<ReservationInput>;
};

export type RecordMutationEntry = {
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
};

export type RecordMutationGetInput = {
  /** Fetch a **Record** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  _ref?: InputMaybe<Scalars['ID']['input']>;
  /** Fetch a specific **Record** type. */
  _type?: InputMaybe<RecordGetByTypeInput>;
  /** Fetch a **Record** instance by its unique URL. */
  _url?: InputMaybe<Scalars['String']['input']>;
};

export type RecordRef = Recordable & {
  __typename: 'RecordRef';
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  _type?: Maybe<Scalars['ID']['output']>;
};

export type RecordSaveActionInput = {
  main?: InputMaybe<RecordMainDiffInput>;
  urls?: InputMaybe<Array<InputMaybe<UrLsInput>>>;
  with?: InputMaybe<RecordMutationGetInput>;
};

/** The super interface for all types backed by data models, e.g. Java  classes that implement `Recordable`. This interface declares a single `_id` field containing the UUID of the record. A corresponding `_type` field is intentionally omitted as it can be derived programmatically from the built-in GraphQL `__typename` field. Each GraphQL `type` that implements this interface will be annotated  with the `@gca_object_type` directive which contains the backing data model's type ID. */
export type Recordable = {
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
};

export type Reservation = Content & PathsField & Record & RecordEntry & RecordMutationEntry & Recordable & {
  __typename: 'Reservation';
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  _urls: UrLs;
  confirmationNumber?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['Instant']['output']>;
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  customerPhone?: Maybe<Scalars['String']['output']>;
  location?: Maybe<RestaurantLocation>;
  partySize?: Maybe<Scalars['Int']['output']>;
  reservationDate?: Maybe<Scalars['LocalDate']['output']>;
  reservationTime?: Maybe<Scalars['LocalTime']['output']>;
  specialRequests?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ReservationStatus>;
};

export type ReservationGetInput = {
  /** Fetch a **Reservation** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** Fetch a **Reservation** instance by its unique URL. */
  _url?: InputMaybe<Scalars['String']['input']>;
};

/** An input type for writing a **Reservation** instance. */
export type ReservationInput = {
  /** The unique ID for an existing embedded `Record`. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** A name for a new `Record` that can be used as a reference when the unique system-assigned ID is not yet available. */
  _name?: InputMaybe<Scalars['ID']['input']>;
  confirmationNumber?: InputMaybe<Scalars['String']['input']>;
  createdDate?: InputMaybe<Scalars['Instant']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<RestaurantLocationDiffRefInput>;
  partySize?: InputMaybe<Scalars['Int']['input']>;
  reservationDate?: InputMaybe<Scalars['LocalDate']['input']>;
  reservationTime?: InputMaybe<Scalars['LocalTime']['input']>;
  specialRequests?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ReservationStatus>;
};

export enum ReservationStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  NoShow = 'NO_SHOW',
  Pending = 'PENDING'
}

export type Restaurant = Content & PathsField & Record & RecordEntry & Recordable & Singleton & {
  __typename: 'Restaurant';
  SingletonMod: SingletonMod;
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

export type RestaurantGetInput = {
  /** Fetch a **Restaurant** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** Fetch a **Restaurant** instance by its unique URL. */
  _url?: InputMaybe<Scalars['String']['input']>;
  /** Fetch a **Restaurant** instance by its unique **Key**. */
  key?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantLocation = Content & PathsField & Record & RecordEntry & Recordable & {
  __typename: 'RestaurantLocation';
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
  _urls: UrLs;
  accessibilityInfo?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  image?: Maybe<StorageItem>;
  isMainLocation: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  openHours?: Maybe<Scalars['String']['output']>;
  parkingInfo?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type RestaurantLocationDiffRefInput = {
  /** Fetch a **Restaurant Location** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  _ref?: InputMaybe<Scalars['ID']['input']>;
  /** Fetch a **Restaurant Location** instance by its unique URL. */
  _url?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantLocationGetInput = {
  /** Fetch a **Restaurant Location** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** Fetch a **Restaurant Location** instance by its unique URL. */
  _url?: InputMaybe<Scalars['String']['input']>;
};

export type RootMutation = {
  __typename: 'RootMutation';
  Content?: Maybe<ContentActions>;
};

/** The root `query` type, granting access to all the major GCA read operations. */
export type RootQuery = {
  __typename: 'RootQuery';
  /** Fetch a single record by a unique identifier. This field is present when there is at least 1 read (or write) content type included as an entry type. See `GCASchemaSettings#getReadEntryTypes` and `GCASchemaSettings#getReadWriteEntryTypes` for more information. */
  Get?: Maybe<GetEntry>;
  /** Select multiple records at once. This is a bridge to the Dari Query API in Java. This field's inclusion rules are similar to that of `Get` but it can be omitted if either `GCASchemaSettings#isOnlyAllowUniqueIndexLookups` or `GCASchemaSettings#isExcludeQueryFromAllWhenOnlySingletonEntryFields` returns true. */
  Query?: Maybe<QueryEntry>;
};

export type SaveAction = {
  __typename: 'SaveAction';
  Record?: Maybe<SaveActionResult>;
};


export type SaveActionRecordArgs = {
  args: RecordSaveActionInput;
  context?: InputMaybe<ContentActionContextInput>;
};

export type SaveActionResult = {
  __typename: 'SaveActionResult';
  saveInfo?: Maybe<SaveActionResultInfo>;
  state?: Maybe<RecordMutationEntry>;
};

export type SaveActionResultInfo = {
  __typename: 'SaveActionResultInfo';
  appliedDiffs?: Maybe<Scalars['Json']['output']>;
  submittedDiffs?: Maybe<Scalars['Json']['output']>;
};

export type SaveActionTransactionInput = {
  Record?: InputMaybe<RecordSaveActionInput>;
};

export type SepiaFilter = {
  __typename: 'SepiaFilter';
  _?: Maybe<Scalars['Void']['output']>;
};

export type Singleton = {
  SingletonMod: SingletonMod;
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

export type SiteRefInput = {
  /** Fetch a **Site** instance by its unique Record ID. */
  _id?: InputMaybe<Scalars['UUID']['input']>;
  /** Fetch a **Site** instance by its unique **Name**. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Fetch a **Site** instance by its unique **URLs**. */
  urls?: InputMaybe<Scalars['String']['input']>;
};

export enum SortByAge {
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export enum SortByDistance {
  Closest = 'CLOSEST',
  Farthest = 'FARTHEST'
}

export enum SortByField {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

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

export type TransactionContentActionResult = SaveActionResult;

export type TransactionInput = {
  Save?: InputMaybe<SaveActionTransactionInput>;
};

export type TransactionResult = {
  __typename: 'TransactionResult';
  results: Array<TransactionContentActionResult>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UrLs = {
  __typename: 'URLs';
  paths: Array<UrLsPath>;
  permalink?: Maybe<Scalars['String']['output']>;
};


export type UrLsPermalinkArgs = {
  site?: InputMaybe<SiteRefInput>;
};

export type UrLsInput = {
  add?: InputMaybe<UrLsPathInput>;
  clear?: InputMaybe<ClearUrlsInput>;
  generate?: InputMaybe<GenerateUrlsInput>;
  remove?: InputMaybe<Scalars['String']['input']>;
};

export type UrLsPath = {
  __typename: 'URLsPath';
  path?: Maybe<Scalars['String']['output']>;
  site?: Maybe<RecordRef>;
  type?: Maybe<UrLsPathType>;
};

export type UrLsPathInput = {
  path: Scalars['String']['input'];
  type: UrLsPathType;
};

export enum UrLsPathType {
  Alias = 'ALIAS',
  Permalink = 'PERMALINK',
  Redirect = 'REDIRECT',
  RedirectTemporary = 'REDIRECT_TEMPORARY'
}

export type HealthCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthCheckQuery = { __typename: 'RootQuery' };

export type GetLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = (
  { __typename: 'RootQuery' }
  & { Query?: Maybe<(
    { __typename: 'QueryEntry' }
    & { Records?: Maybe<(
      { __typename: 'QuerySelect' }
      & { items: Array<
        | (
          { __typename: 'Menu' }
          & Pick<Menu, '_id'>
        )
        | (
          { __typename: 'MenuCategory' }
          & Pick<MenuCategory, '_id'>
        )
        | (
          { __typename: 'MenuItem' }
          & Pick<MenuItem, '_id'>
        )
        | (
          { __typename: 'Reservation' }
          & Pick<Reservation, '_id'>
        )
        | (
          { __typename: 'Restaurant' }
          & Pick<Restaurant, '_id'>
        )
        | (
          { __typename: 'RestaurantLocation' }
          & Pick<
            RestaurantLocation,
            | 'name'
            | 'address'
            | 'phoneNumber'
            | 'openHours'
            | 'parkingInfo'
            | 'accessibilityInfo'
            | 'isMainLocation'
            | '_id'
          >
          & { image?: Maybe<(
            { __typename: 'StorageItem' }
            & Pick<StorageItem, 'publicUrl'>
          )> }
        )
      > }
    )> }
  )> }
);

export type MakeReservationMutationVariables = Exact<{
  args: RecordSaveActionInput;
}>;


export type MakeReservationMutation = (
  { __typename: 'RootMutation' }
  & { Content?: Maybe<(
    { __typename: 'ContentActions' }
    & { Action?: Maybe<(
      { __typename: 'ContentActionTypes' }
      & { Save?: Maybe<(
        { __typename: 'SaveAction' }
        & { Record?: Maybe<(
          { __typename: 'SaveActionResult' }
          & { state?: Maybe<(
            { __typename: 'Reservation' }
            & Pick<
              Reservation,
              | 'customerName'
              | 'customerEmail'
              | 'customerPhone'
              | 'reservationDate'
              | 'reservationTime'
              | 'partySize'
              | 'specialRequests'
              | 'status'
              | 'createdDate'
              | 'confirmationNumber'
              | '_id'
            >
            & { location?: Maybe<(
              { __typename: 'RestaurantLocation' }
              & Pick<RestaurantLocation, '_id'>
            )> }
          )> }
        )> }
      )> }
    )> }
  )> }
);

export type GetMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuQuery = (
  { __typename: 'RootQuery' }
  & { Get?: Maybe<(
    { __typename: 'GetEntry' }
    & { Singleton?: Maybe<(
      { __typename: 'GetSingleton' }
      & { Menu?: Maybe<(
        { __typename: 'MenuGet' }
        & { State?: Maybe<(
          { __typename: 'Menu' }
          & Pick<Menu, '_id'>
          & { categories?: Maybe<Array<Maybe<(
            { __typename: 'MenuCategory' }
            & Pick<MenuCategory, '_id' | 'name' | 'description'>
            & { menuItems?: Maybe<Array<Maybe<(
              { __typename: 'MenuItem' }
              & Pick<
                MenuItem,
                | '_id'
                | 'name'
                | 'description'
                | 'price'
                | 'isSpecial'
                | 'isVegetarian'
                | 'isVegan'
                | 'isGlutenFree'
                | 'isUnavailable'
              >
              & { image?: Maybe<(
                { __typename: 'StorageItem' }
                & Pick<StorageItem, 'publicUrl'>
              )> }
            )>>> }
          )>>> }
        )> }
      )> }
    )> }
  )> }
);

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

export type SearchMenuQueryVariables = Exact<{
  query?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>> | InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>>;
}>;


export type SearchMenuQuery = (
  { __typename: 'RootQuery' }
  & { Query?: Maybe<(
    { __typename: 'QueryEntry' }
    & { Records?: Maybe<(
      { __typename: 'QuerySelect' }
      & { items: Array<
        | (
          { __typename: 'Menu' }
          & Pick<Menu, '_id'>
        )
        | (
          { __typename: 'MenuCategory' }
          & Pick<MenuCategory, '_id'>
        )
        | (
          { __typename: 'MenuItem' }
          & Pick<
            MenuItem,
            | 'name'
            | 'description'
            | 'price'
            | 'isSpecial'
            | 'isVegetarian'
            | 'isVegan'
            | 'isGlutenFree'
            | 'isUnavailable'
            | '_id'
          >
          & { image?: Maybe<(
            { __typename: 'StorageItem' }
            & Pick<StorageItem, 'publicUrl'>
          )> }
        )
        | (
          { __typename: 'Reservation' }
          & Pick<Reservation, '_id'>
        )
        | (
          { __typename: 'Restaurant' }
          & Pick<Restaurant, '_id'>
        )
        | (
          { __typename: 'RestaurantLocation' }
          & Pick<RestaurantLocation, '_id'>
        )
      > }
    )> }
  )> }
);


export const HealthCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HealthCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<HealthCheckQuery, HealthCheckQueryVariables>;
export const GetLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"RestaurantLocation"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RestaurantLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"openHours"}},{"kind":"Field","name":{"kind":"Name","value":"parkingInfo"}},{"kind":"Field","name":{"kind":"Name","value":"accessibilityInfo"}},{"kind":"Field","name":{"kind":"Name","value":"isMainLocation"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrl"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>;
export const MakeReservationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MakeReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"args"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecordSaveActionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Save"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Record"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"args"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerEmail"}},{"kind":"Field","name":{"kind":"Name","value":"customerPhone"}},{"kind":"Field","name":{"kind":"Name","value":"reservationDate"}},{"kind":"Field","name":{"kind":"Name","value":"reservationTime"}},{"kind":"Field","name":{"kind":"Name","value":"partySize"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"specialRequests"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"confirmationNumber"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MakeReservationMutation, MakeReservationMutationVariables>;
export const GetMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Get"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Singleton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"State"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"menuItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isSpecial"}},{"kind":"Field","name":{"kind":"Name","value":"isVegetarian"}},{"kind":"Field","name":{"kind":"Name","value":"isVegan"}},{"kind":"Field","name":{"kind":"Name","value":"isGlutenFree"}},{"kind":"Field","name":{"kind":"Name","value":"isUnavailable"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMenuQuery, GetMenuQueryVariables>;
export const GetRestaurantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRestaurant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Get"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Singleton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Restaurant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"State"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRestaurantQuery, GetRestaurantQueryVariables>;
export const SearchMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"ListType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"MenuItem"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"StringValue","value":"* matches ?","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"arguments"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isSpecial"}},{"kind":"Field","name":{"kind":"Name","value":"isVegetarian"}},{"kind":"Field","name":{"kind":"Name","value":"isVegan"}},{"kind":"Field","name":{"kind":"Name","value":"isGlutenFree"}},{"kind":"Field","name":{"kind":"Name","value":"isUnavailable"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicUrl"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchMenuQuery, SearchMenuQueryVariables>;