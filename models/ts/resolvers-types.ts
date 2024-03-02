import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
};

export type AdvertisingInfo = {
  details?: Maybe<Scalars['String']['output']>;
};

export type Article = GraphNode & {
  __typename?: 'Article';
  abstract?: Maybe<Scalars['String']['output']>;
  author: Array<Person>;
  comments: Array<Comment>;
  distribution: Array<MediaChannel>;
  id: Scalars['ID']['output'];
  mentions: Array<Entity>;
  retrieved_url: Scalars['String']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Asset = MediaChannel | Organization;

export type AssociationInfo = {
  details?: Maybe<Scalars['String']['output']>;
};

export type Belief = GraphNode & {
  __typename?: 'Belief';
  associated_positions: Array<PoliticalPosition>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  similar_beliefs: Array<Belief>;
  summary: Scalars['String']['output'];
  wiki_tag?: Maybe<Scalars['String']['output']>;
};

export type Comment = GraphNode & {
  __typename?: 'Comment';
  article: Article;
  id: Scalars['ID']['output'];
  platform: MediaChannel;
  text: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type DistributionInfo = {
  date: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type EducationInfo = {
  degree?: Maybe<Scalars['String']['output']>;
  end_dt?: Maybe<Scalars['Int']['output']>;
  start_dt?: Maybe<Scalars['Int']['output']>;
};

export type EmploymentInfo = {
  end_dt?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  start_dt?: Maybe<Scalars['Int']['output']>;
};

export type Entity = Organization | Person;

export type GraphNode = {
  id: Scalars['ID']['output'];
};

export type InvestmentInfo = {
  amount?: Maybe<Scalars['Float']['output']>;
  end_dt?: Maybe<Scalars['Int']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  start_dt?: Maybe<Scalars['Int']['output']>;
};

export type MediaChannel = GraphNode & {
  __typename?: 'MediaChannel';
  advertisers: Array<Organization>;
  category?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owners: Array<Entity>;
  users: Array<User>;
  wiki_tag?: Maybe<Scalars['String']['output']>;
};

export type MentionInfo = {
  sentiment?: Maybe<Scalars['String']['output']>;
  snippets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Organization = GraphNode & {
  __typename?: 'Organization';
  category: Scalars['String']['output'];
  employees: Array<Person>;
  id: Scalars['ID']['output'];
  investments: Array<Asset>;
  investors: Array<Person>;
  name: Scalars['String']['output'];
  subsidiaries: Array<Organization>;
  subsidiary_of: Array<Organization>;
  wiki_tag?: Maybe<Scalars['String']['output']>;
};

export type OwnershipInfo = {
  details?: Maybe<Scalars['String']['output']>;
  end_dt?: Maybe<Scalars['DateTime']['output']>;
  start_dt?: Maybe<Scalars['DateTime']['output']>;
};

export type Person = GraphNode & {
  __typename?: 'Person';
  affiliations: Array<Organization>;
  aka?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  bio?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['Date']['output']>;
  education: Array<Organization>;
  emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  employment: Array<Organization>;
  id: Scalars['ID']['output'];
  investments: Array<Asset>;
  name: Scalars['String']['output'];
  user_accounts: Array<User>;
  wiki_tag?: Maybe<Scalars['String']['output']>;
};

export type PoliticalPosition = GraphNode & {
  __typename?: 'PoliticalPosition';
  associated_beliefs: Array<Belief>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  similar_positions: Array<PoliticalPosition>;
  summary: Scalars['String']['output'];
  wiki_tag?: Maybe<Scalars['String']['output']>;
};

export type SimilarityInfo = {
  details?: Maybe<Scalars['String']['output']>;
};

export type User = GraphNode & {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  owner: Array<Entity>;
  platform: Array<MediaChannel>;
  username: Scalars['String']['output'];
};

export type UserInfo = {
  details?: Maybe<Scalars['String']['output']>;
  user_since?: Maybe<Scalars['DateTime']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Asset: ( Omit<MediaChannel, 'owners'> & { owners: Array<RefType['Entity']> } ) | ( Omit<Organization, 'investments'> & { investments: Array<RefType['Asset']> } );
  Entity: ( Omit<Organization, 'investments'> & { investments: Array<RefType['Asset']> } ) | ( Omit<Person, 'investments'> & { investments: Array<RefType['Asset']> } );
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  AdvertisingInfo: never;
  AssociationInfo: never;
  DistributionInfo: never;
  EducationInfo: never;
  EmploymentInfo: never;
  GraphNode: ( Omit<Article, 'mentions'> & { mentions: Array<RefType['Entity']> } ) | ( Belief ) | ( Comment ) | ( Omit<MediaChannel, 'owners'> & { owners: Array<RefType['Entity']> } ) | ( Omit<Organization, 'investments'> & { investments: Array<RefType['Asset']> } ) | ( Omit<Person, 'investments'> & { investments: Array<RefType['Asset']> } ) | ( PoliticalPosition ) | ( Omit<User, 'owner'> & { owner: Array<RefType['Entity']> } );
  InvestmentInfo: never;
  MentionInfo: never;
  OwnershipInfo: never;
  SimilarityInfo: never;
  UserInfo: never;
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AdvertisingInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['AdvertisingInfo']>;
  Article: ResolverTypeWrapper<Omit<Article, 'mentions'> & { mentions: Array<ResolversTypes['Entity']> }>;
  Asset: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Asset']>;
  AssociationInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['AssociationInfo']>;
  Belief: ResolverTypeWrapper<Belief>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DistributionInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['DistributionInfo']>;
  EducationInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['EducationInfo']>;
  EmploymentInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['EmploymentInfo']>;
  Entity: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Entity']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GraphNode: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['GraphNode']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  InvestmentInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['InvestmentInfo']>;
  MediaChannel: ResolverTypeWrapper<Omit<MediaChannel, 'owners'> & { owners: Array<ResolversTypes['Entity']> }>;
  MentionInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['MentionInfo']>;
  Organization: ResolverTypeWrapper<Omit<Organization, 'investments'> & { investments: Array<ResolversTypes['Asset']> }>;
  OwnershipInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['OwnershipInfo']>;
  Person: ResolverTypeWrapper<Omit<Person, 'investments'> & { investments: Array<ResolversTypes['Asset']> }>;
  PoliticalPosition: ResolverTypeWrapper<PoliticalPosition>;
  SimilarityInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['SimilarityInfo']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<Omit<User, 'owner'> & { owner: Array<ResolversTypes['Entity']> }>;
  UserInfo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['UserInfo']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AdvertisingInfo: ResolversInterfaceTypes<ResolversParentTypes>['AdvertisingInfo'];
  Article: Omit<Article, 'mentions'> & { mentions: Array<ResolversParentTypes['Entity']> };
  Asset: ResolversUnionTypes<ResolversParentTypes>['Asset'];
  AssociationInfo: ResolversInterfaceTypes<ResolversParentTypes>['AssociationInfo'];
  Belief: Belief;
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  DistributionInfo: ResolversInterfaceTypes<ResolversParentTypes>['DistributionInfo'];
  EducationInfo: ResolversInterfaceTypes<ResolversParentTypes>['EducationInfo'];
  EmploymentInfo: ResolversInterfaceTypes<ResolversParentTypes>['EmploymentInfo'];
  Entity: ResolversUnionTypes<ResolversParentTypes>['Entity'];
  Float: Scalars['Float']['output'];
  GraphNode: ResolversInterfaceTypes<ResolversParentTypes>['GraphNode'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  InvestmentInfo: ResolversInterfaceTypes<ResolversParentTypes>['InvestmentInfo'];
  MediaChannel: Omit<MediaChannel, 'owners'> & { owners: Array<ResolversParentTypes['Entity']> };
  MentionInfo: ResolversInterfaceTypes<ResolversParentTypes>['MentionInfo'];
  Organization: Omit<Organization, 'investments'> & { investments: Array<ResolversParentTypes['Asset']> };
  OwnershipInfo: ResolversInterfaceTypes<ResolversParentTypes>['OwnershipInfo'];
  Person: Omit<Person, 'investments'> & { investments: Array<ResolversParentTypes['Asset']> };
  PoliticalPosition: PoliticalPosition;
  SimilarityInfo: ResolversInterfaceTypes<ResolversParentTypes>['SimilarityInfo'];
  String: Scalars['String']['output'];
  User: Omit<User, 'owner'> & { owner: Array<ResolversParentTypes['Entity']> };
  UserInfo: ResolversInterfaceTypes<ResolversParentTypes>['UserInfo'];
}>;

export type AdvertisingInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdvertisingInfo'] = ResolversParentTypes['AdvertisingInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = ResolversObject<{
  abstract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  distribution?: Resolver<Array<ResolversTypes['MediaChannel']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mentions?: Resolver<Array<ResolversTypes['Entity']>, ParentType, ContextType>;
  retrieved_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = ResolversObject<{
  __resolveType: TypeResolveFn<'MediaChannel' | 'Organization', ParentType, ContextType>;
}>;

export type AssociationInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssociationInfo'] = ResolversParentTypes['AssociationInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type BeliefResolvers<ContextType = any, ParentType extends ResolversParentTypes['Belief'] = ResolversParentTypes['Belief']> = ResolversObject<{
  associated_positions?: Resolver<Array<ResolversTypes['PoliticalPosition']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  similar_beliefs?: Resolver<Array<ResolversTypes['Belief']>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wiki_tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['MediaChannel'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DistributionInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['DistributionInfo'] = ResolversParentTypes['DistributionInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type EducationInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EducationInfo'] = ResolversParentTypes['EducationInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  degree?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_dt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_dt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type EmploymentInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmploymentInfo'] = ResolversParentTypes['EmploymentInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  end_dt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_dt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Organization' | 'Person', ParentType, ContextType>;
}>;

export type GraphNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GraphNode'] = ResolversParentTypes['GraphNode']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Article' | 'Belief' | 'Comment' | 'MediaChannel' | 'Organization' | 'Person' | 'PoliticalPosition' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type InvestmentInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvestmentInfo'] = ResolversParentTypes['InvestmentInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  end_dt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_dt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type MediaChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaChannel'] = ResolversParentTypes['MediaChannel']> = ResolversObject<{
  advertisers?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owners?: Resolver<Array<ResolversTypes['Entity']>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  wiki_tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MentionInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MentionInfo'] = ResolversParentTypes['MentionInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snippets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
}>;

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = ResolversObject<{
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  employees?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  investments?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  investors?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subsidiaries?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  subsidiary_of?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  wiki_tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnershipInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['OwnershipInfo'] = ResolversParentTypes['OwnershipInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_dt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  start_dt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
}>;

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  affiliations?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  aka?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  education?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  emails?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  employment?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  investments?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_accounts?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  wiki_tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoliticalPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoliticalPosition'] = ResolversParentTypes['PoliticalPosition']> = ResolversObject<{
  associated_beliefs?: Resolver<Array<ResolversTypes['Belief']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  similar_positions?: Resolver<Array<ResolversTypes['PoliticalPosition']>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wiki_tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SimilarityInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimilarityInfo'] = ResolversParentTypes['SimilarityInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<Array<ResolversTypes['Entity']>, ParentType, ContextType>;
  platform?: Resolver<Array<ResolversTypes['MediaChannel']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInfo'] = ResolversParentTypes['UserInfo']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_since?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AdvertisingInfo?: AdvertisingInfoResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssociationInfo?: AssociationInfoResolvers<ContextType>;
  Belief?: BeliefResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DistributionInfo?: DistributionInfoResolvers<ContextType>;
  EducationInfo?: EducationInfoResolvers<ContextType>;
  EmploymentInfo?: EmploymentInfoResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  GraphNode?: GraphNodeResolvers<ContextType>;
  InvestmentInfo?: InvestmentInfoResolvers<ContextType>;
  MediaChannel?: MediaChannelResolvers<ContextType>;
  MentionInfo?: MentionInfoResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OwnershipInfo?: OwnershipInfoResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PoliticalPosition?: PoliticalPositionResolvers<ContextType>;
  SimilarityInfo?: SimilarityInfoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserInfo?: UserInfoResolvers<ContextType>;
}>;

