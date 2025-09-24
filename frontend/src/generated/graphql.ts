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
  Long: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Represents a generic content. */
export type Content = {
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the `Record` instance. Corresponds to the Java methods `Record#getLabel` and `State#getLabel`. */
  _label?: Maybe<Scalars['String']['output']>;
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

export type PathsField = {
  _urls: UrLs;
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

export type RecordRef = Recordable & {
  __typename: 'RecordRef';
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
  _type?: Maybe<Scalars['ID']['output']>;
};

/** The super interface for all types backed by data models, e.g. Java  classes that implement `Recordable`. This interface declares a single `_id` field containing the UUID of the record. A corresponding `_type` field is intentionally omitted as it can be derived programmatically from the built-in GraphQL `__typename` field. Each GraphQL `type` that implements this interface will be annotated  with the `@gca_object_type` directive which contains the backing data model's type ID. */
export type Recordable = {
  /** The unique ID of the `Record`. Corresponds to the Java method `Record#getId` and `State#getId`. */
  _id?: Maybe<Scalars['ID']['output']>;
};

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

/** The root `query` type, granting access to all the major GCA read operations. */
export type RootQuery = {
  __typename: 'RootQuery';
  /** Fetch a single record by a unique identifier. This field is present when there is at least 1 read (or write) content type included as an entry type. See `GCASchemaSettings#getReadEntryTypes` and `GCASchemaSettings#getReadWriteEntryTypes` for more information. */
  Get?: Maybe<GetEntry>;
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