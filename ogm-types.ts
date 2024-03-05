import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
  /** A date, represented as a 'yyyy-mm-dd' string */
  Date: { input: any; output: any };
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  entities: Array<Entity>;
  assets: Array<Asset>;
  graphNodes: Array<GraphNode>;
  graphNodesAggregate: GraphNodeAggregateSelection;
  articles: Array<Article>;
  articlesConnection: ArticlesConnection;
  articlesAggregate: ArticleAggregateSelection;
  beliefs: Array<Belief>;
  beliefsConnection: BeliefsConnection;
  beliefsAggregate: BeliefAggregateSelection;
  comments: Array<Comment>;
  commentsConnection: CommentsConnection;
  commentsAggregate: CommentAggregateSelection;
  mediaChannels: Array<MediaChannel>;
  mediaChannelsConnection: MediaChannelsConnection;
  mediaChannelsAggregate: MediaChannelAggregateSelection;
  organizations: Array<Organization>;
  organizationsConnection: OrganizationsConnection;
  organizationsAggregate: OrganizationAggregateSelection;
  people: Array<Person>;
  peopleConnection: PeopleConnection;
  peopleAggregate: PersonAggregateSelection;
  politicalPositions: Array<PoliticalPosition>;
  politicalPositionsConnection: PoliticalPositionsConnection;
  politicalPositionsAggregate: PoliticalPositionAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
};

export type QueryEntitiesArgs = {
  where?: InputMaybe<EntityWhere>;
  options?: InputMaybe<QueryOptions>;
};

export type QueryAssetsArgs = {
  where?: InputMaybe<AssetWhere>;
  options?: InputMaybe<QueryOptions>;
};

export type QueryGraphNodesArgs = {
  where?: InputMaybe<GraphNodeWhere>;
  options?: InputMaybe<GraphNodeOptions>;
};

export type QueryGraphNodesAggregateArgs = {
  where?: InputMaybe<GraphNodeWhere>;
};

export type QueryArticlesArgs = {
  where?: InputMaybe<ArticleWhere>;
  options?: InputMaybe<ArticleOptions>;
};

export type QueryArticlesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ArticleWhere>;
  sort?: InputMaybe<Array<InputMaybe<ArticleSort>>>;
};

export type QueryArticlesAggregateArgs = {
  where?: InputMaybe<ArticleWhere>;
};

export type QueryBeliefsArgs = {
  where?: InputMaybe<BeliefWhere>;
  options?: InputMaybe<BeliefOptions>;
};

export type QueryBeliefsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<BeliefWhere>;
  sort?: InputMaybe<Array<InputMaybe<BeliefSort>>>;
};

export type QueryBeliefsAggregateArgs = {
  where?: InputMaybe<BeliefWhere>;
};

export type QueryCommentsArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
};

export type QueryCommentsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<CommentWhere>;
  sort?: InputMaybe<Array<InputMaybe<CommentSort>>>;
};

export type QueryCommentsAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
};

export type QueryMediaChannelsArgs = {
  where?: InputMaybe<MediaChannelWhere>;
  options?: InputMaybe<MediaChannelOptions>;
};

export type QueryMediaChannelsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<MediaChannelWhere>;
  sort?: InputMaybe<Array<InputMaybe<MediaChannelSort>>>;
};

export type QueryMediaChannelsAggregateArgs = {
  where?: InputMaybe<MediaChannelWhere>;
};

export type QueryOrganizationsArgs = {
  where?: InputMaybe<OrganizationWhere>;
  options?: InputMaybe<OrganizationOptions>;
};

export type QueryOrganizationsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<OrganizationWhere>;
  sort?: InputMaybe<Array<InputMaybe<OrganizationSort>>>;
};

export type QueryOrganizationsAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
};

export type QueryPeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
};

export type QueryPeopleConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PersonWhere>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
};

export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};

export type QueryPoliticalPositionsArgs = {
  where?: InputMaybe<PoliticalPositionWhere>;
  options?: InputMaybe<PoliticalPositionOptions>;
};

export type QueryPoliticalPositionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PoliticalPositionWhere>;
  sort?: InputMaybe<Array<InputMaybe<PoliticalPositionSort>>>;
};

export type QueryPoliticalPositionsAggregateArgs = {
  where?: InputMaybe<PoliticalPositionWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createArticles: CreateArticlesMutationResponse;
  deleteArticles: DeleteInfo;
  updateArticles: UpdateArticlesMutationResponse;
  createBeliefs: CreateBeliefsMutationResponse;
  deleteBeliefs: DeleteInfo;
  updateBeliefs: UpdateBeliefsMutationResponse;
  createComments: CreateCommentsMutationResponse;
  deleteComments: DeleteInfo;
  updateComments: UpdateCommentsMutationResponse;
  createMediaChannels: CreateMediaChannelsMutationResponse;
  deleteMediaChannels: DeleteInfo;
  updateMediaChannels: UpdateMediaChannelsMutationResponse;
  createOrganizations: CreateOrganizationsMutationResponse;
  deleteOrganizations: DeleteInfo;
  updateOrganizations: UpdateOrganizationsMutationResponse;
  createPeople: CreatePeopleMutationResponse;
  deletePeople: DeleteInfo;
  updatePeople: UpdatePeopleMutationResponse;
  createPoliticalPositions: CreatePoliticalPositionsMutationResponse;
  deletePoliticalPositions: DeleteInfo;
  updatePoliticalPositions: UpdatePoliticalPositionsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateArticlesArgs = {
  input: Array<ArticleCreateInput>;
};

export type MutationDeleteArticlesArgs = {
  where?: InputMaybe<ArticleWhere>;
  delete?: InputMaybe<ArticleDeleteInput>;
};

export type MutationUpdateArticlesArgs = {
  where?: InputMaybe<ArticleWhere>;
  update?: InputMaybe<ArticleUpdateInput>;
  connect?: InputMaybe<ArticleConnectInput>;
  disconnect?: InputMaybe<ArticleDisconnectInput>;
  create?: InputMaybe<ArticleRelationInput>;
  delete?: InputMaybe<ArticleDeleteInput>;
  connectOrCreate?: InputMaybe<ArticleConnectOrCreateInput>;
};

export type MutationCreateBeliefsArgs = {
  input: Array<BeliefCreateInput>;
};

export type MutationDeleteBeliefsArgs = {
  where?: InputMaybe<BeliefWhere>;
  delete?: InputMaybe<BeliefDeleteInput>;
};

export type MutationUpdateBeliefsArgs = {
  where?: InputMaybe<BeliefWhere>;
  update?: InputMaybe<BeliefUpdateInput>;
  connect?: InputMaybe<BeliefConnectInput>;
  disconnect?: InputMaybe<BeliefDisconnectInput>;
  create?: InputMaybe<BeliefRelationInput>;
  delete?: InputMaybe<BeliefDeleteInput>;
  connectOrCreate?: InputMaybe<BeliefConnectOrCreateInput>;
};

export type MutationCreateCommentsArgs = {
  input: Array<CommentCreateInput>;
};

export type MutationDeleteCommentsArgs = {
  where?: InputMaybe<CommentWhere>;
  delete?: InputMaybe<CommentDeleteInput>;
};

export type MutationUpdateCommentsArgs = {
  where?: InputMaybe<CommentWhere>;
  update?: InputMaybe<CommentUpdateInput>;
  connect?: InputMaybe<CommentConnectInput>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
  create?: InputMaybe<CommentRelationInput>;
  delete?: InputMaybe<CommentDeleteInput>;
  connectOrCreate?: InputMaybe<CommentConnectOrCreateInput>;
};

export type MutationCreateMediaChannelsArgs = {
  input: Array<MediaChannelCreateInput>;
};

export type MutationDeleteMediaChannelsArgs = {
  where?: InputMaybe<MediaChannelWhere>;
  delete?: InputMaybe<MediaChannelDeleteInput>;
};

export type MutationUpdateMediaChannelsArgs = {
  where?: InputMaybe<MediaChannelWhere>;
  update?: InputMaybe<MediaChannelUpdateInput>;
  connect?: InputMaybe<MediaChannelConnectInput>;
  disconnect?: InputMaybe<MediaChannelDisconnectInput>;
  create?: InputMaybe<MediaChannelRelationInput>;
  delete?: InputMaybe<MediaChannelDeleteInput>;
  connectOrCreate?: InputMaybe<MediaChannelConnectOrCreateInput>;
};

export type MutationCreateOrganizationsArgs = {
  input: Array<OrganizationCreateInput>;
};

export type MutationDeleteOrganizationsArgs = {
  where?: InputMaybe<OrganizationWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type MutationUpdateOrganizationsArgs = {
  where?: InputMaybe<OrganizationWhere>;
  update?: InputMaybe<OrganizationUpdateInput>;
  connect?: InputMaybe<OrganizationConnectInput>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  create?: InputMaybe<OrganizationRelationInput>;
  delete?: InputMaybe<OrganizationDeleteInput>;
  connectOrCreate?: InputMaybe<OrganizationConnectOrCreateInput>;
};

export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>;
};

export type MutationDeletePeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MutationUpdatePeopleArgs = {
  where?: InputMaybe<PersonWhere>;
  update?: InputMaybe<PersonUpdateInput>;
  connect?: InputMaybe<PersonConnectInput>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
  create?: InputMaybe<PersonRelationInput>;
  delete?: InputMaybe<PersonDeleteInput>;
  connectOrCreate?: InputMaybe<PersonConnectOrCreateInput>;
};

export type MutationCreatePoliticalPositionsArgs = {
  input: Array<PoliticalPositionCreateInput>;
};

export type MutationDeletePoliticalPositionsArgs = {
  where?: InputMaybe<PoliticalPositionWhere>;
  delete?: InputMaybe<PoliticalPositionDeleteInput>;
};

export type MutationUpdatePoliticalPositionsArgs = {
  where?: InputMaybe<PoliticalPositionWhere>;
  update?: InputMaybe<PoliticalPositionUpdateInput>;
  connect?: InputMaybe<PoliticalPositionConnectInput>;
  disconnect?: InputMaybe<PoliticalPositionDisconnectInput>;
  create?: InputMaybe<PoliticalPositionRelationInput>;
  delete?: InputMaybe<PoliticalPositionDeleteInput>;
  connectOrCreate?: InputMaybe<PoliticalPositionConnectOrCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
};

export enum GraphNodeImplementation {
  Article = "Article",
  Belief = "Belief",
  Comment = "Comment",
  MediaChannel = "MediaChannel",
  Organization = "Organization",
  Person = "Person",
  PoliticalPosition = "PoliticalPosition",
  User = "User",
}

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Asset = Organization | MediaChannel;

export type Entity = Organization | Person;

export type GraphNode = {
  id: Scalars["ID"]["output"];
};

/**
 * The edge properties for the following fields:
 * * MediaChannel.advertisers
 */
export type AdvertisingInfo = {
  __typename?: "AdvertisingInfo";
  details?: Maybe<Scalars["String"]["output"]>;
};

export type Article = GraphNode & {
  __typename?: "Article";
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
  abstract?: Maybe<Scalars["String"]["output"]>;
  summary?: Maybe<Scalars["String"]["output"]>;
  retrieved_url: Scalars["String"]["output"];
  authorAggregate?: Maybe<ArticlePersonAuthorAggregationSelection>;
  author: Array<Person>;
  authorConnection: ArticleAuthorConnection;
  distributionAggregate?: Maybe<ArticleMediaChannelDistributionAggregationSelection>;
  distribution: Array<MediaChannel>;
  distributionConnection: ArticleDistributionConnection;
  mentions: Array<Entity>;
  mentionsConnection: ArticleMentionsConnection;
  commentsAggregate?: Maybe<ArticleCommentCommentsAggregationSelection>;
  comments: Array<Comment>;
  commentsConnection: ArticleCommentsConnection;
};

export type ArticleAuthorAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticleAuthorArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticleAuthorConnectionArgs = {
  where?: InputMaybe<ArticleAuthorConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ArticleAuthorConnectionSort>>;
};

export type ArticleDistributionAggregateArgs = {
  where?: InputMaybe<MediaChannelWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticleDistributionArgs = {
  where?: InputMaybe<MediaChannelWhere>;
  options?: InputMaybe<MediaChannelOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticleDistributionConnectionArgs = {
  where?: InputMaybe<ArticleDistributionConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ArticleDistributionConnectionSort>>;
};

export type ArticleMentionsArgs = {
  where?: InputMaybe<EntityWhere>;
  options?: InputMaybe<QueryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticleMentionsConnectionArgs = {
  where?: InputMaybe<ArticleMentionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ArticleMentionsConnectionSort>>;
};

export type ArticleCommentsAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticleCommentsArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticleCommentsConnectionArgs = {
  where?: InputMaybe<ArticleCommentsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ArticleCommentsConnectionSort>>;
};

export type ArticleAggregateSelection = {
  __typename?: "ArticleAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  abstract: StringAggregateSelection;
  summary: StringAggregateSelection;
  retrieved_url: StringAggregateSelection;
};

export type ArticleAuthorConnection = {
  __typename?: "ArticleAuthorConnection";
  edges: Array<ArticleAuthorRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ArticleAuthorRelationship = {
  __typename?: "ArticleAuthorRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type ArticleCommentCommentsAggregationSelection = {
  __typename?: "ArticleCommentCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ArticleCommentCommentsNodeAggregateSelection>;
};

export type ArticleCommentCommentsNodeAggregateSelection = {
  __typename?: "ArticleCommentCommentsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type ArticleCommentsConnection = {
  __typename?: "ArticleCommentsConnection";
  edges: Array<ArticleCommentsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ArticleCommentsRelationship = {
  __typename?: "ArticleCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type ArticleDistributionConnection = {
  __typename?: "ArticleDistributionConnection";
  edges: Array<ArticleDistributionRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ArticleDistributionRelationship = {
  __typename?: "ArticleDistributionRelationship";
  cursor: Scalars["String"]["output"];
  node: MediaChannel;
  properties: DistributionInfo;
};

export type ArticleEdge = {
  __typename?: "ArticleEdge";
  cursor: Scalars["String"]["output"];
  node: Article;
};

export type ArticleMediaChannelDistributionAggregationSelection = {
  __typename?: "ArticleMediaChannelDistributionAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ArticleMediaChannelDistributionNodeAggregateSelection>;
  edge?: Maybe<ArticleMediaChannelDistributionEdgeAggregateSelection>;
};

export type ArticleMediaChannelDistributionEdgeAggregateSelection = {
  __typename?: "ArticleMediaChannelDistributionEdgeAggregateSelection";
  date: DateTimeAggregateSelection;
  url: StringAggregateSelection;
};

export type ArticleMediaChannelDistributionNodeAggregateSelection = {
  __typename?: "ArticleMediaChannelDistributionNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type ArticleMentionsConnection = {
  __typename?: "ArticleMentionsConnection";
  edges: Array<ArticleMentionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ArticleMentionsRelationship = {
  __typename?: "ArticleMentionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Entity;
  properties: MentionInfo;
};

export type ArticlePersonAuthorAggregationSelection = {
  __typename?: "ArticlePersonAuthorAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ArticlePersonAuthorNodeAggregateSelection>;
};

export type ArticlePersonAuthorNodeAggregateSelection = {
  __typename?: "ArticlePersonAuthorNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  bio: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  byline_tag: StringAggregateSelection;
};

export type ArticlesConnection = {
  __typename?: "ArticlesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ArticleEdge>;
};

/**
 * The edge properties for the following fields:
 * * Belief.associated_positions
 */
export type AssociationInfo = {
  __typename?: "AssociationInfo";
  details?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

export type Belief = GraphNode & {
  __typename?: "Belief";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  summary: Scalars["String"]["output"];
  wiki_tag?: Maybe<Scalars["String"]["output"]>;
  associated_positionsAggregate?: Maybe<BeliefPoliticalPositionAssociated_PositionsAggregationSelection>;
  associated_positions: Array<PoliticalPosition>;
  associated_positionsConnection: BeliefAssociated_PositionsConnection;
  similar_beliefsAggregate?: Maybe<BeliefBeliefSimilar_BeliefsAggregationSelection>;
  similar_beliefs: Array<Belief>;
  similar_beliefsConnection: BeliefSimilar_BeliefsConnection;
};

export type BeliefAssociated_PositionsAggregateArgs = {
  where?: InputMaybe<PoliticalPositionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BeliefAssociated_PositionsArgs = {
  where?: InputMaybe<PoliticalPositionWhere>;
  options?: InputMaybe<PoliticalPositionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BeliefAssociated_PositionsConnectionArgs = {
  where?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<BeliefAssociated_PositionsConnectionSort>>;
};

export type BeliefSimilar_BeliefsAggregateArgs = {
  where?: InputMaybe<BeliefWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BeliefSimilar_BeliefsArgs = {
  where?: InputMaybe<BeliefWhere>;
  options?: InputMaybe<BeliefOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BeliefSimilar_BeliefsConnectionArgs = {
  where?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<BeliefSimilar_BeliefsConnectionSort>>;
};

export type BeliefAggregateSelection = {
  __typename?: "BeliefAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  summary: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
};

export type BeliefAssociated_PositionsConnection = {
  __typename?: "BeliefAssociated_positionsConnection";
  edges: Array<BeliefAssociated_PositionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type BeliefAssociated_PositionsRelationship = {
  __typename?: "BeliefAssociated_positionsRelationship";
  cursor: Scalars["String"]["output"];
  node: PoliticalPosition;
  properties: AssociationInfo;
};

export type BeliefBeliefSimilar_BeliefsAggregationSelection = {
  __typename?: "BeliefBeliefSimilar_beliefsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<BeliefBeliefSimilar_BeliefsNodeAggregateSelection>;
  edge?: Maybe<BeliefBeliefSimilar_BeliefsEdgeAggregateSelection>;
};

export type BeliefBeliefSimilar_BeliefsEdgeAggregateSelection = {
  __typename?: "BeliefBeliefSimilar_beliefsEdgeAggregateSelection";
  details: StringAggregateSelection;
  weight: FloatAggregateSelection;
};

export type BeliefBeliefSimilar_BeliefsNodeAggregateSelection = {
  __typename?: "BeliefBeliefSimilar_beliefsNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  summary: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
};

export type BeliefEdge = {
  __typename?: "BeliefEdge";
  cursor: Scalars["String"]["output"];
  node: Belief;
};

export type BeliefPoliticalPositionAssociated_PositionsAggregationSelection = {
  __typename?: "BeliefPoliticalPositionAssociated_positionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<BeliefPoliticalPositionAssociated_PositionsNodeAggregateSelection>;
  edge?: Maybe<BeliefPoliticalPositionAssociated_PositionsEdgeAggregateSelection>;
};

export type BeliefPoliticalPositionAssociated_PositionsEdgeAggregateSelection =
  {
    __typename?: "BeliefPoliticalPositionAssociated_positionsEdgeAggregateSelection";
    details: StringAggregateSelection;
    weight: FloatAggregateSelection;
  };

export type BeliefPoliticalPositionAssociated_PositionsNodeAggregateSelection =
  {
    __typename?: "BeliefPoliticalPositionAssociated_positionsNodeAggregateSelection";
    id: IdAggregateSelection;
    name: StringAggregateSelection;
    summary: StringAggregateSelection;
    wiki_tag: StringAggregateSelection;
  };

export type BeliefsConnection = {
  __typename?: "BeliefsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<BeliefEdge>;
};

export type BeliefSimilar_BeliefsConnection = {
  __typename?: "BeliefSimilar_beliefsConnection";
  edges: Array<BeliefSimilar_BeliefsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type BeliefSimilar_BeliefsRelationship = {
  __typename?: "BeliefSimilar_beliefsRelationship";
  cursor: Scalars["String"]["output"];
  node: Belief;
  properties: SimilarityInfo;
};

export type Comment = GraphNode & {
  __typename?: "Comment";
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  text: Scalars["String"]["output"];
  userAggregate?: Maybe<CommentUserUserAggregationSelection>;
  user: User;
  userConnection: CommentUserConnection;
  platformAggregate?: Maybe<CommentMediaChannelPlatformAggregationSelection>;
  platform: MediaChannel;
  platformConnection: CommentPlatformConnection;
  articleAggregate?: Maybe<CommentArticleArticleAggregationSelection>;
  article: Article;
  articleConnection: CommentArticleConnection;
};

export type CommentUserAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CommentUserArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CommentUserConnectionArgs = {
  where?: InputMaybe<CommentUserConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CommentUserConnectionSort>>;
};

export type CommentPlatformAggregateArgs = {
  where?: InputMaybe<MediaChannelWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CommentPlatformArgs = {
  where?: InputMaybe<MediaChannelWhere>;
  options?: InputMaybe<MediaChannelOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CommentPlatformConnectionArgs = {
  where?: InputMaybe<CommentPlatformConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CommentPlatformConnectionSort>>;
};

export type CommentArticleAggregateArgs = {
  where?: InputMaybe<ArticleWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CommentArticleArgs = {
  where?: InputMaybe<ArticleWhere>;
  options?: InputMaybe<ArticleOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CommentArticleConnectionArgs = {
  where?: InputMaybe<CommentArticleConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CommentArticleConnectionSort>>;
};

export type CommentAggregateSelection = {
  __typename?: "CommentAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type CommentArticleArticleAggregationSelection = {
  __typename?: "CommentArticleArticleAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CommentArticleArticleNodeAggregateSelection>;
};

export type CommentArticleArticleNodeAggregateSelection = {
  __typename?: "CommentArticleArticleNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  abstract: StringAggregateSelection;
  summary: StringAggregateSelection;
  retrieved_url: StringAggregateSelection;
};

export type CommentArticleConnection = {
  __typename?: "CommentArticleConnection";
  edges: Array<CommentArticleRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CommentArticleRelationship = {
  __typename?: "CommentArticleRelationship";
  cursor: Scalars["String"]["output"];
  node: Article;
};

export type CommentEdge = {
  __typename?: "CommentEdge";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type CommentMediaChannelPlatformAggregationSelection = {
  __typename?: "CommentMediaChannelPlatformAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CommentMediaChannelPlatformNodeAggregateSelection>;
  edge?: Maybe<CommentMediaChannelPlatformEdgeAggregateSelection>;
};

export type CommentMediaChannelPlatformEdgeAggregateSelection = {
  __typename?: "CommentMediaChannelPlatformEdgeAggregateSelection";
  date: DateTimeAggregateSelection;
  url: StringAggregateSelection;
};

export type CommentMediaChannelPlatformNodeAggregateSelection = {
  __typename?: "CommentMediaChannelPlatformNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type CommentPlatformConnection = {
  __typename?: "CommentPlatformConnection";
  edges: Array<CommentPlatformRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CommentPlatformRelationship = {
  __typename?: "CommentPlatformRelationship";
  cursor: Scalars["String"]["output"];
  node: MediaChannel;
  properties: DistributionInfo;
};

export type CommentsConnection = {
  __typename?: "CommentsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<CommentEdge>;
};

export type CommentUserConnection = {
  __typename?: "CommentUserConnection";
  edges: Array<CommentUserRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CommentUserRelationship = {
  __typename?: "CommentUserRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type CommentUserUserAggregationSelection = {
  __typename?: "CommentUserUserAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CommentUserUserNodeAggregateSelection>;
};

export type CommentUserUserNodeAggregateSelection = {
  __typename?: "CommentUserUserNodeAggregateSelection";
  id: IdAggregateSelection;
  platform_user: StringAggregateSelection;
  username: StringAggregateSelection;
};

export type CreateArticlesMutationResponse = {
  __typename?: "CreateArticlesMutationResponse";
  info: CreateInfo;
  articles: Array<Article>;
};

export type CreateBeliefsMutationResponse = {
  __typename?: "CreateBeliefsMutationResponse";
  info: CreateInfo;
  beliefs: Array<Belief>;
};

export type CreateCommentsMutationResponse = {
  __typename?: "CreateCommentsMutationResponse";
  info: CreateInfo;
  comments: Array<Comment>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateMediaChannelsMutationResponse = {
  __typename?: "CreateMediaChannelsMutationResponse";
  info: CreateInfo;
  mediaChannels: Array<MediaChannel>;
};

export type CreateOrganizationsMutationResponse = {
  __typename?: "CreateOrganizationsMutationResponse";
  info: CreateInfo;
  organizations: Array<Organization>;
};

export type CreatePeopleMutationResponse = {
  __typename?: "CreatePeopleMutationResponse";
  info: CreateInfo;
  people: Array<Person>;
};

export type CreatePoliticalPositionsMutationResponse = {
  __typename?: "CreatePoliticalPositionsMutationResponse";
  info: CreateInfo;
  politicalPositions: Array<PoliticalPosition>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelection = {
  __typename?: "DateTimeAggregateSelection";
  min?: Maybe<Scalars["DateTime"]["output"]>;
  max?: Maybe<Scalars["DateTime"]["output"]>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

/**
 * The edge properties for the following fields:
 * * Article.distribution
 * * Comment.platform
 */
export type DistributionInfo = {
  __typename?: "DistributionInfo";
  date: Scalars["DateTime"]["output"];
  url: Scalars["String"]["output"];
};

/**
 * The edge properties for the following fields:
 * * Person.education
 */
export type EducationInfo = {
  __typename?: "EducationInfo";
  degree?: Maybe<Scalars["String"]["output"]>;
  start_dt?: Maybe<Scalars["Int"]["output"]>;
  end_dt?: Maybe<Scalars["Int"]["output"]>;
};

/**
 * The edge properties for the following fields:
 * * MediaChannel.employees
 * * Organization.employees
 * * Person.employment
 */
export type EmploymentInfo = {
  __typename?: "EmploymentInfo";
  position?: Maybe<Scalars["String"]["output"]>;
  start_dt?: Maybe<Scalars["Int"]["output"]>;
  end_dt?: Maybe<Scalars["Int"]["output"]>;
};

export type FloatAggregateSelection = {
  __typename?: "FloatAggregateSelection";
  max?: Maybe<Scalars["Float"]["output"]>;
  min?: Maybe<Scalars["Float"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Float"]["output"]>;
};

export type GraphNodeAggregateSelection = {
  __typename?: "GraphNodeAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
};

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<Scalars["ID"]["output"]>;
  longest?: Maybe<Scalars["ID"]["output"]>;
};

export type IntAggregateSelection = {
  __typename?: "IntAggregateSelection";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Int"]["output"]>;
};

/**
 * The edge properties for the following fields:
 * * Organization.investors
 * * Organization.investments
 * * Person.investments
 */
export type InvestmentInfo = {
  __typename?: "InvestmentInfo";
  amount?: Maybe<Scalars["Float"]["output"]>;
  start_dt?: Maybe<Scalars["Int"]["output"]>;
  end_dt?: Maybe<Scalars["Int"]["output"]>;
  notes?: Maybe<Scalars["String"]["output"]>;
};

export type MediaChannel = GraphNode & {
  __typename?: "MediaChannel";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  category?: Maybe<Scalars["String"]["output"]>;
  wiki_tag?: Maybe<Scalars["String"]["output"]>;
  ticker_symbol?: Maybe<Scalars["String"]["output"]>;
  exchange?: Maybe<Scalars["String"]["output"]>;
  owners: Array<Entity>;
  ownersConnection: MediaChannelOwnersConnection;
  advertisersAggregate?: Maybe<MediaChannelOrganizationAdvertisersAggregationSelection>;
  advertisers: Array<Organization>;
  advertisersConnection: MediaChannelAdvertisersConnection;
  usersAggregate?: Maybe<MediaChannelUserUsersAggregationSelection>;
  users: Array<User>;
  usersConnection: MediaChannelUsersConnection;
  employeesAggregate?: Maybe<MediaChannelPersonEmployeesAggregationSelection>;
  employees: Array<Person>;
  employeesConnection: MediaChannelEmployeesConnection;
};

export type MediaChannelOwnersArgs = {
  where?: InputMaybe<EntityWhere>;
  options?: InputMaybe<QueryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MediaChannelOwnersConnectionArgs = {
  where?: InputMaybe<MediaChannelOwnersConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MediaChannelOwnersConnectionSort>>;
};

export type MediaChannelAdvertisersAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MediaChannelAdvertisersArgs = {
  where?: InputMaybe<OrganizationWhere>;
  options?: InputMaybe<OrganizationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MediaChannelAdvertisersConnectionArgs = {
  where?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MediaChannelAdvertisersConnectionSort>>;
};

export type MediaChannelUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MediaChannelUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MediaChannelUsersConnectionArgs = {
  where?: InputMaybe<MediaChannelUsersConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MediaChannelUsersConnectionSort>>;
};

export type MediaChannelEmployeesAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MediaChannelEmployeesArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MediaChannelEmployeesConnectionArgs = {
  where?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MediaChannelEmployeesConnectionSort>>;
};

export type MediaChannelAdvertisersConnection = {
  __typename?: "MediaChannelAdvertisersConnection";
  edges: Array<MediaChannelAdvertisersRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MediaChannelAdvertisersRelationship = {
  __typename?: "MediaChannelAdvertisersRelationship";
  cursor: Scalars["String"]["output"];
  node: Organization;
  properties: AdvertisingInfo;
};

export type MediaChannelAggregateSelection = {
  __typename?: "MediaChannelAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type MediaChannelEdge = {
  __typename?: "MediaChannelEdge";
  cursor: Scalars["String"]["output"];
  node: MediaChannel;
};

export type MediaChannelEmployeesConnection = {
  __typename?: "MediaChannelEmployeesConnection";
  edges: Array<MediaChannelEmployeesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MediaChannelEmployeesRelationship = {
  __typename?: "MediaChannelEmployeesRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
  properties: EmploymentInfo;
};

export type MediaChannelOrganizationAdvertisersAggregationSelection = {
  __typename?: "MediaChannelOrganizationAdvertisersAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MediaChannelOrganizationAdvertisersNodeAggregateSelection>;
  edge?: Maybe<MediaChannelOrganizationAdvertisersEdgeAggregateSelection>;
};

export type MediaChannelOrganizationAdvertisersEdgeAggregateSelection = {
  __typename?: "MediaChannelOrganizationAdvertisersEdgeAggregateSelection";
  details: StringAggregateSelection;
};

export type MediaChannelOrganizationAdvertisersNodeAggregateSelection = {
  __typename?: "MediaChannelOrganizationAdvertisersNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type MediaChannelOwnersConnection = {
  __typename?: "MediaChannelOwnersConnection";
  edges: Array<MediaChannelOwnersRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MediaChannelOwnersRelationship = {
  __typename?: "MediaChannelOwnersRelationship";
  cursor: Scalars["String"]["output"];
  node: Entity;
  properties: OwnershipInfo;
};

export type MediaChannelPersonEmployeesAggregationSelection = {
  __typename?: "MediaChannelPersonEmployeesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MediaChannelPersonEmployeesNodeAggregateSelection>;
  edge?: Maybe<MediaChannelPersonEmployeesEdgeAggregateSelection>;
};

export type MediaChannelPersonEmployeesEdgeAggregateSelection = {
  __typename?: "MediaChannelPersonEmployeesEdgeAggregateSelection";
  position: StringAggregateSelection;
  start_dt: IntAggregateSelection;
  end_dt: IntAggregateSelection;
};

export type MediaChannelPersonEmployeesNodeAggregateSelection = {
  __typename?: "MediaChannelPersonEmployeesNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  bio: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  byline_tag: StringAggregateSelection;
};

export type MediaChannelsConnection = {
  __typename?: "MediaChannelsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<MediaChannelEdge>;
};

export type MediaChannelUsersConnection = {
  __typename?: "MediaChannelUsersConnection";
  edges: Array<MediaChannelUsersRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MediaChannelUsersRelationship = {
  __typename?: "MediaChannelUsersRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
  properties: UserInfo;
};

export type MediaChannelUserUsersAggregationSelection = {
  __typename?: "MediaChannelUserUsersAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MediaChannelUserUsersNodeAggregateSelection>;
  edge?: Maybe<MediaChannelUserUsersEdgeAggregateSelection>;
};

export type MediaChannelUserUsersEdgeAggregateSelection = {
  __typename?: "MediaChannelUserUsersEdgeAggregateSelection";
  details: StringAggregateSelection;
  user_since: DateTimeAggregateSelection;
};

export type MediaChannelUserUsersNodeAggregateSelection = {
  __typename?: "MediaChannelUserUsersNodeAggregateSelection";
  id: IdAggregateSelection;
  platform_user: StringAggregateSelection;
  username: StringAggregateSelection;
};

/**
 * The edge properties for the following fields:
 * * Person.affiliations
 */
export type MembershipInfo = {
  __typename?: "MembershipInfo";
  details?: Maybe<Scalars["String"]["output"]>;
  start_dt?: Maybe<Scalars["Date"]["output"]>;
  end_dt?: Maybe<Scalars["Date"]["output"]>;
};

/**
 * The edge properties for the following fields:
 * * Article.mentions
 */
export type MentionInfo = {
  __typename?: "MentionInfo";
  sentiment?: Maybe<Scalars["String"]["output"]>;
  snippets?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

export type Organization = GraphNode & {
  __typename?: "Organization";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  category: Scalars["String"]["output"];
  wiki_tag?: Maybe<Scalars["String"]["output"]>;
  ticker_symbol?: Maybe<Scalars["String"]["output"]>;
  exchange?: Maybe<Scalars["String"]["output"]>;
  subsidiary_ofAggregate?: Maybe<OrganizationOrganizationSubsidiary_OfAggregationSelection>;
  subsidiary_of: Array<Organization>;
  subsidiary_ofConnection: OrganizationSubsidiary_OfConnection;
  subsidiaries: Array<Asset>;
  subsidiariesConnection: OrganizationSubsidiariesConnection;
  employeesAggregate?: Maybe<OrganizationPersonEmployeesAggregationSelection>;
  employees: Array<Person>;
  employeesConnection: OrganizationEmployeesConnection;
  investors: Array<Entity>;
  investorsConnection: OrganizationInvestorsConnection;
  investments: Array<Asset>;
  investmentsConnection: OrganizationInvestmentsConnection;
};

export type OrganizationSubsidiary_OfAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationSubsidiary_OfArgs = {
  where?: InputMaybe<OrganizationWhere>;
  options?: InputMaybe<OrganizationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationSubsidiary_OfConnectionArgs = {
  where?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<OrganizationSubsidiary_OfConnectionSort>>;
};

export type OrganizationSubsidiariesArgs = {
  where?: InputMaybe<AssetWhere>;
  options?: InputMaybe<QueryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationSubsidiariesConnectionArgs = {
  where?: InputMaybe<OrganizationSubsidiariesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<OrganizationSubsidiariesConnectionSort>>;
};

export type OrganizationEmployeesAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationEmployeesArgs = {
  where?: InputMaybe<PersonWhere>;
  options?: InputMaybe<PersonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationEmployeesConnectionArgs = {
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<OrganizationEmployeesConnectionSort>>;
};

export type OrganizationInvestorsArgs = {
  where?: InputMaybe<EntityWhere>;
  options?: InputMaybe<QueryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationInvestorsConnectionArgs = {
  where?: InputMaybe<OrganizationInvestorsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<OrganizationInvestorsConnectionSort>>;
};

export type OrganizationInvestmentsArgs = {
  where?: InputMaybe<AssetWhere>;
  options?: InputMaybe<QueryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationInvestmentsConnectionArgs = {
  where?: InputMaybe<OrganizationInvestmentsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<OrganizationInvestmentsConnectionSort>>;
};

export type OrganizationAggregateSelection = {
  __typename?: "OrganizationAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type OrganizationEdge = {
  __typename?: "OrganizationEdge";
  cursor: Scalars["String"]["output"];
  node: Organization;
};

export type OrganizationEmployeesConnection = {
  __typename?: "OrganizationEmployeesConnection";
  edges: Array<OrganizationEmployeesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type OrganizationEmployeesRelationship = {
  __typename?: "OrganizationEmployeesRelationship";
  cursor: Scalars["String"]["output"];
  node: Person;
  properties: EmploymentInfo;
};

export type OrganizationInvestmentsConnection = {
  __typename?: "OrganizationInvestmentsConnection";
  edges: Array<OrganizationInvestmentsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type OrganizationInvestmentsRelationship = {
  __typename?: "OrganizationInvestmentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Asset;
  properties: InvestmentInfo;
};

export type OrganizationInvestorsConnection = {
  __typename?: "OrganizationInvestorsConnection";
  edges: Array<OrganizationInvestorsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type OrganizationInvestorsRelationship = {
  __typename?: "OrganizationInvestorsRelationship";
  cursor: Scalars["String"]["output"];
  node: Entity;
  properties: InvestmentInfo;
};

export type OrganizationOrganizationSubsidiary_OfAggregationSelection = {
  __typename?: "OrganizationOrganizationSubsidiary_ofAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<OrganizationOrganizationSubsidiary_OfNodeAggregateSelection>;
  edge?: Maybe<OrganizationOrganizationSubsidiary_OfEdgeAggregateSelection>;
};

export type OrganizationOrganizationSubsidiary_OfEdgeAggregateSelection = {
  __typename?: "OrganizationOrganizationSubsidiary_ofEdgeAggregateSelection";
  details: StringAggregateSelection;
  start_dt: DateTimeAggregateSelection;
  end_dt: DateTimeAggregateSelection;
  weight: FloatAggregateSelection;
};

export type OrganizationOrganizationSubsidiary_OfNodeAggregateSelection = {
  __typename?: "OrganizationOrganizationSubsidiary_ofNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type OrganizationPersonEmployeesAggregationSelection = {
  __typename?: "OrganizationPersonEmployeesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<OrganizationPersonEmployeesNodeAggregateSelection>;
  edge?: Maybe<OrganizationPersonEmployeesEdgeAggregateSelection>;
};

export type OrganizationPersonEmployeesEdgeAggregateSelection = {
  __typename?: "OrganizationPersonEmployeesEdgeAggregateSelection";
  position: StringAggregateSelection;
  start_dt: IntAggregateSelection;
  end_dt: IntAggregateSelection;
};

export type OrganizationPersonEmployeesNodeAggregateSelection = {
  __typename?: "OrganizationPersonEmployeesNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  bio: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  byline_tag: StringAggregateSelection;
};

export type OrganizationsConnection = {
  __typename?: "OrganizationsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<OrganizationEdge>;
};

export type OrganizationSubsidiariesConnection = {
  __typename?: "OrganizationSubsidiariesConnection";
  edges: Array<OrganizationSubsidiariesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type OrganizationSubsidiariesRelationship = {
  __typename?: "OrganizationSubsidiariesRelationship";
  cursor: Scalars["String"]["output"];
  node: Asset;
  properties: OwnershipInfo;
};

export type OrganizationSubsidiary_OfConnection = {
  __typename?: "OrganizationSubsidiary_ofConnection";
  edges: Array<OrganizationSubsidiary_OfRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type OrganizationSubsidiary_OfRelationship = {
  __typename?: "OrganizationSubsidiary_ofRelationship";
  cursor: Scalars["String"]["output"];
  node: Organization;
  properties: OwnershipInfo;
};

/**
 * The edge properties for the following fields:
 * * MediaChannel.owners
 * * Organization.subsidiary_of
 * * Organization.subsidiaries
 * * Person.user_accounts
 * * User.owner
 */
export type OwnershipInfo = {
  __typename?: "OwnershipInfo";
  details?: Maybe<Scalars["String"]["output"]>;
  start_dt?: Maybe<Scalars["DateTime"]["output"]>;
  end_dt?: Maybe<Scalars["DateTime"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type PeopleConnection = {
  __typename?: "PeopleConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PersonEdge>;
};

export type Person = GraphNode & {
  __typename?: "Person";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  aka?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  emails?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  dob?: Maybe<Scalars["Date"]["output"]>;
  bio?: Maybe<Scalars["String"]["output"]>;
  wiki_tag?: Maybe<Scalars["String"]["output"]>;
  byline_tag?: Maybe<Scalars["String"]["output"]>;
  affiliationsAggregate?: Maybe<PersonOrganizationAffiliationsAggregationSelection>;
  affiliations: Array<Organization>;
  affiliationsConnection: PersonAffiliationsConnection;
  educationAggregate?: Maybe<PersonOrganizationEducationAggregationSelection>;
  education: Array<Organization>;
  educationConnection: PersonEducationConnection;
  employmentAggregate?: Maybe<PersonOrganizationEmploymentAggregationSelection>;
  employment: Array<Organization>;
  employmentConnection: PersonEmploymentConnection;
  investments: Array<Asset>;
  investmentsConnection: PersonInvestmentsConnection;
  user_accountsAggregate?: Maybe<PersonUserUser_AccountsAggregationSelection>;
  user_accounts: Array<User>;
  user_accountsConnection: PersonUser_AccountsConnection;
};

export type PersonAffiliationsAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonAffiliationsArgs = {
  where?: InputMaybe<OrganizationWhere>;
  options?: InputMaybe<OrganizationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonAffiliationsConnectionArgs = {
  where?: InputMaybe<PersonAffiliationsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonAffiliationsConnectionSort>>;
};

export type PersonEducationAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonEducationArgs = {
  where?: InputMaybe<OrganizationWhere>;
  options?: InputMaybe<OrganizationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonEducationConnectionArgs = {
  where?: InputMaybe<PersonEducationConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonEducationConnectionSort>>;
};

export type PersonEmploymentAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonEmploymentArgs = {
  where?: InputMaybe<OrganizationWhere>;
  options?: InputMaybe<OrganizationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonEmploymentConnectionArgs = {
  where?: InputMaybe<PersonEmploymentConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonEmploymentConnectionSort>>;
};

export type PersonInvestmentsArgs = {
  where?: InputMaybe<AssetWhere>;
  options?: InputMaybe<QueryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonInvestmentsConnectionArgs = {
  where?: InputMaybe<PersonInvestmentsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonInvestmentsConnectionSort>>;
};

export type PersonUser_AccountsAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonUser_AccountsArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonUser_AccountsConnectionArgs = {
  where?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PersonUser_AccountsConnectionSort>>;
};

export type PersonAffiliationsConnection = {
  __typename?: "PersonAffiliationsConnection";
  edges: Array<PersonAffiliationsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonAffiliationsRelationship = {
  __typename?: "PersonAffiliationsRelationship";
  cursor: Scalars["String"]["output"];
  node: Organization;
  properties: MembershipInfo;
};

export type PersonAggregateSelection = {
  __typename?: "PersonAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  bio: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  byline_tag: StringAggregateSelection;
};

export type PersonEdge = {
  __typename?: "PersonEdge";
  cursor: Scalars["String"]["output"];
  node: Person;
};

export type PersonEducationConnection = {
  __typename?: "PersonEducationConnection";
  edges: Array<PersonEducationRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonEducationRelationship = {
  __typename?: "PersonEducationRelationship";
  cursor: Scalars["String"]["output"];
  node: Organization;
  properties: EducationInfo;
};

export type PersonEmploymentConnection = {
  __typename?: "PersonEmploymentConnection";
  edges: Array<PersonEmploymentRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonEmploymentRelationship = {
  __typename?: "PersonEmploymentRelationship";
  cursor: Scalars["String"]["output"];
  node: Organization;
  properties: EmploymentInfo;
};

export type PersonInvestmentsConnection = {
  __typename?: "PersonInvestmentsConnection";
  edges: Array<PersonInvestmentsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonInvestmentsRelationship = {
  __typename?: "PersonInvestmentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Asset;
  properties: InvestmentInfo;
};

export type PersonOrganizationAffiliationsAggregationSelection = {
  __typename?: "PersonOrganizationAffiliationsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonOrganizationAffiliationsNodeAggregateSelection>;
  edge?: Maybe<PersonOrganizationAffiliationsEdgeAggregateSelection>;
};

export type PersonOrganizationAffiliationsEdgeAggregateSelection = {
  __typename?: "PersonOrganizationAffiliationsEdgeAggregateSelection";
  details: StringAggregateSelection;
};

export type PersonOrganizationAffiliationsNodeAggregateSelection = {
  __typename?: "PersonOrganizationAffiliationsNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type PersonOrganizationEducationAggregationSelection = {
  __typename?: "PersonOrganizationEducationAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonOrganizationEducationNodeAggregateSelection>;
  edge?: Maybe<PersonOrganizationEducationEdgeAggregateSelection>;
};

export type PersonOrganizationEducationEdgeAggregateSelection = {
  __typename?: "PersonOrganizationEducationEdgeAggregateSelection";
  degree: StringAggregateSelection;
  start_dt: IntAggregateSelection;
  end_dt: IntAggregateSelection;
};

export type PersonOrganizationEducationNodeAggregateSelection = {
  __typename?: "PersonOrganizationEducationNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type PersonOrganizationEmploymentAggregationSelection = {
  __typename?: "PersonOrganizationEmploymentAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonOrganizationEmploymentNodeAggregateSelection>;
  edge?: Maybe<PersonOrganizationEmploymentEdgeAggregateSelection>;
};

export type PersonOrganizationEmploymentEdgeAggregateSelection = {
  __typename?: "PersonOrganizationEmploymentEdgeAggregateSelection";
  position: StringAggregateSelection;
  start_dt: IntAggregateSelection;
  end_dt: IntAggregateSelection;
};

export type PersonOrganizationEmploymentNodeAggregateSelection = {
  __typename?: "PersonOrganizationEmploymentNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type PersonUser_AccountsConnection = {
  __typename?: "PersonUser_accountsConnection";
  edges: Array<PersonUser_AccountsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PersonUser_AccountsRelationship = {
  __typename?: "PersonUser_accountsRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
  properties: OwnershipInfo;
};

export type PersonUserUser_AccountsAggregationSelection = {
  __typename?: "PersonUserUser_accountsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PersonUserUser_AccountsNodeAggregateSelection>;
  edge?: Maybe<PersonUserUser_AccountsEdgeAggregateSelection>;
};

export type PersonUserUser_AccountsEdgeAggregateSelection = {
  __typename?: "PersonUserUser_accountsEdgeAggregateSelection";
  details: StringAggregateSelection;
  start_dt: DateTimeAggregateSelection;
  end_dt: DateTimeAggregateSelection;
  weight: FloatAggregateSelection;
};

export type PersonUserUser_AccountsNodeAggregateSelection = {
  __typename?: "PersonUserUser_accountsNodeAggregateSelection";
  id: IdAggregateSelection;
  platform_user: StringAggregateSelection;
  username: StringAggregateSelection;
};

export type PoliticalPosition = GraphNode & {
  __typename?: "PoliticalPosition";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  summary: Scalars["String"]["output"];
  wiki_tag?: Maybe<Scalars["String"]["output"]>;
  associated_beliefsAggregate?: Maybe<PoliticalPositionBeliefAssociated_BeliefsAggregationSelection>;
  associated_beliefs: Array<Belief>;
  associated_beliefsConnection: PoliticalPositionAssociated_BeliefsConnection;
  similar_positionsAggregate?: Maybe<PoliticalPositionPoliticalPositionSimilar_PositionsAggregationSelection>;
  similar_positions: Array<PoliticalPosition>;
  similar_positionsConnection: PoliticalPositionSimilar_PositionsConnection;
};

export type PoliticalPositionAssociated_BeliefsAggregateArgs = {
  where?: InputMaybe<BeliefWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PoliticalPositionAssociated_BeliefsArgs = {
  where?: InputMaybe<BeliefWhere>;
  options?: InputMaybe<BeliefOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PoliticalPositionAssociated_BeliefsConnectionArgs = {
  where?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PoliticalPositionAssociated_BeliefsConnectionSort>>;
};

export type PoliticalPositionSimilar_PositionsAggregateArgs = {
  where?: InputMaybe<PoliticalPositionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PoliticalPositionSimilar_PositionsArgs = {
  where?: InputMaybe<PoliticalPositionWhere>;
  options?: InputMaybe<PoliticalPositionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PoliticalPositionSimilar_PositionsConnectionArgs = {
  where?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PoliticalPositionSimilar_PositionsConnectionSort>>;
};

export type PoliticalPositionAggregateSelection = {
  __typename?: "PoliticalPositionAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  summary: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
};

export type PoliticalPositionAssociated_BeliefsConnection = {
  __typename?: "PoliticalPositionAssociated_beliefsConnection";
  edges: Array<PoliticalPositionAssociated_BeliefsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PoliticalPositionAssociated_BeliefsRelationship = {
  __typename?: "PoliticalPositionAssociated_beliefsRelationship";
  cursor: Scalars["String"]["output"];
  node: Belief;
};

export type PoliticalPositionBeliefAssociated_BeliefsAggregationSelection = {
  __typename?: "PoliticalPositionBeliefAssociated_beliefsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PoliticalPositionBeliefAssociated_BeliefsNodeAggregateSelection>;
};

export type PoliticalPositionBeliefAssociated_BeliefsNodeAggregateSelection = {
  __typename?: "PoliticalPositionBeliefAssociated_beliefsNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  summary: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
};

export type PoliticalPositionEdge = {
  __typename?: "PoliticalPositionEdge";
  cursor: Scalars["String"]["output"];
  node: PoliticalPosition;
};

export type PoliticalPositionPoliticalPositionSimilar_PositionsAggregationSelection =
  {
    __typename?: "PoliticalPositionPoliticalPositionSimilar_positionsAggregationSelection";
    count: Scalars["Int"]["output"];
    node?: Maybe<PoliticalPositionPoliticalPositionSimilar_PositionsNodeAggregateSelection>;
  };

export type PoliticalPositionPoliticalPositionSimilar_PositionsNodeAggregateSelection =
  {
    __typename?: "PoliticalPositionPoliticalPositionSimilar_positionsNodeAggregateSelection";
    id: IdAggregateSelection;
    name: StringAggregateSelection;
    summary: StringAggregateSelection;
    wiki_tag: StringAggregateSelection;
  };

export type PoliticalPositionsConnection = {
  __typename?: "PoliticalPositionsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PoliticalPositionEdge>;
};

export type PoliticalPositionSimilar_PositionsConnection = {
  __typename?: "PoliticalPositionSimilar_positionsConnection";
  edges: Array<PoliticalPositionSimilar_PositionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PoliticalPositionSimilar_PositionsRelationship = {
  __typename?: "PoliticalPositionSimilar_positionsRelationship";
  cursor: Scalars["String"]["output"];
  node: PoliticalPosition;
};

/**
 * The edge properties for the following fields:
 * * Belief.similar_beliefs
 */
export type SimilarityInfo = {
  __typename?: "SimilarityInfo";
  details?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateArticlesMutationResponse = {
  __typename?: "UpdateArticlesMutationResponse";
  info: UpdateInfo;
  articles: Array<Article>;
};

export type UpdateBeliefsMutationResponse = {
  __typename?: "UpdateBeliefsMutationResponse";
  info: UpdateInfo;
  beliefs: Array<Belief>;
};

export type UpdateCommentsMutationResponse = {
  __typename?: "UpdateCommentsMutationResponse";
  info: UpdateInfo;
  comments: Array<Comment>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateMediaChannelsMutationResponse = {
  __typename?: "UpdateMediaChannelsMutationResponse";
  info: UpdateInfo;
  mediaChannels: Array<MediaChannel>;
};

export type UpdateOrganizationsMutationResponse = {
  __typename?: "UpdateOrganizationsMutationResponse";
  info: UpdateInfo;
  organizations: Array<Organization>;
};

export type UpdatePeopleMutationResponse = {
  __typename?: "UpdatePeopleMutationResponse";
  info: UpdateInfo;
  people: Array<Person>;
};

export type UpdatePoliticalPositionsMutationResponse = {
  __typename?: "UpdatePoliticalPositionsMutationResponse";
  info: UpdateInfo;
  politicalPositions: Array<PoliticalPosition>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = GraphNode & {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  platform_user: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
  platformAggregate?: Maybe<UserMediaChannelPlatformAggregationSelection>;
  platform: Array<MediaChannel>;
  platformConnection: UserPlatformConnection;
  owner: Array<Entity>;
  ownerConnection: UserOwnerConnection;
};

export type UserPlatformAggregateArgs = {
  where?: InputMaybe<MediaChannelWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserPlatformArgs = {
  where?: InputMaybe<MediaChannelWhere>;
  options?: InputMaybe<MediaChannelOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserPlatformConnectionArgs = {
  where?: InputMaybe<UserPlatformConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserPlatformConnectionSort>>;
};

export type UserOwnerArgs = {
  where?: InputMaybe<EntityWhere>;
  options?: InputMaybe<QueryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserOwnerConnectionArgs = {
  where?: InputMaybe<UserOwnerConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserOwnerConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  platform_user: StringAggregateSelection;
  username: StringAggregateSelection;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

/**
 * The edge properties for the following fields:
 * * MediaChannel.users
 * * User.platform
 */
export type UserInfo = {
  __typename?: "UserInfo";
  details?: Maybe<Scalars["String"]["output"]>;
  user_since?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UserMediaChannelPlatformAggregationSelection = {
  __typename?: "UserMediaChannelPlatformAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserMediaChannelPlatformNodeAggregateSelection>;
  edge?: Maybe<UserMediaChannelPlatformEdgeAggregateSelection>;
};

export type UserMediaChannelPlatformEdgeAggregateSelection = {
  __typename?: "UserMediaChannelPlatformEdgeAggregateSelection";
  details: StringAggregateSelection;
  user_since: DateTimeAggregateSelection;
};

export type UserMediaChannelPlatformNodeAggregateSelection = {
  __typename?: "UserMediaChannelPlatformNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  category: StringAggregateSelection;
  wiki_tag: StringAggregateSelection;
  ticker_symbol: StringAggregateSelection;
  exchange: StringAggregateSelection;
};

export type UserOwnerConnection = {
  __typename?: "UserOwnerConnection";
  edges: Array<UserOwnerRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserOwnerRelationship = {
  __typename?: "UserOwnerRelationship";
  cursor: Scalars["String"]["output"];
  node: Entity;
  properties: OwnershipInfo;
};

export type UserPlatformConnection = {
  __typename?: "UserPlatformConnection";
  edges: Array<UserPlatformRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserPlatformRelationship = {
  __typename?: "UserPlatformRelationship";
  cursor: Scalars["String"]["output"];
  node: MediaChannel;
  properties: UserInfo;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type AdvertisingInfoAggregationWhereInput = {
  AND?: InputMaybe<Array<AdvertisingInfoAggregationWhereInput>>;
  OR?: InputMaybe<Array<AdvertisingInfoAggregationWhereInput>>;
  NOT?: InputMaybe<AdvertisingInfoAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AdvertisingInfoCreateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
};

export type AdvertisingInfoSort = {
  details?: InputMaybe<SortDirection>;
};

export type AdvertisingInfoUpdateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
};

export type AdvertisingInfoWhere = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT?: InputMaybe<Scalars["String"]["input"]>;
  details_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  details_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  details_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  details_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<AdvertisingInfoWhere>>;
  AND?: InputMaybe<Array<AdvertisingInfoWhere>>;
  NOT?: InputMaybe<AdvertisingInfoWhere>;
};

export type ArticleAuthorAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ArticleAuthorAggregateInput>>;
  OR?: InputMaybe<Array<ArticleAuthorAggregateInput>>;
  NOT?: InputMaybe<ArticleAuthorAggregateInput>;
  node?: InputMaybe<ArticleAuthorNodeAggregationWhereInput>;
};

export type ArticleAuthorConnectFieldInput = {
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type ArticleAuthorConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type ArticleAuthorConnectionWhere = {
  AND?: InputMaybe<Array<ArticleAuthorConnectionWhere>>;
  OR?: InputMaybe<Array<ArticleAuthorConnectionWhere>>;
  NOT?: InputMaybe<ArticleAuthorConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
};

export type ArticleAuthorConnectOrCreateFieldInput = {
  where: PersonConnectOrCreateWhere;
  onCreate: ArticleAuthorConnectOrCreateFieldInputOnCreate;
};

export type ArticleAuthorConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type ArticleAuthorCreateFieldInput = {
  node: PersonCreateInput;
};

export type ArticleAuthorDeleteFieldInput = {
  where?: InputMaybe<ArticleAuthorConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type ArticleAuthorDisconnectFieldInput = {
  where?: InputMaybe<ArticleAuthorConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type ArticleAuthorFieldInput = {
  connectOrCreate?: InputMaybe<Array<ArticleAuthorConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<ArticleAuthorConnectFieldInput>>;
  create?: InputMaybe<Array<ArticleAuthorCreateFieldInput>>;
};

export type ArticleAuthorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArticleAuthorNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ArticleAuthorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ArticleAuthorNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArticleAuthorUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type ArticleAuthorUpdateFieldInput = {
  where?: InputMaybe<ArticleAuthorConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<ArticleAuthorConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<ArticleAuthorConnectFieldInput>>;
  disconnect?: InputMaybe<Array<ArticleAuthorDisconnectFieldInput>>;
  create?: InputMaybe<Array<ArticleAuthorCreateFieldInput>>;
  update?: InputMaybe<ArticleAuthorUpdateConnectionInput>;
  delete?: InputMaybe<Array<ArticleAuthorDeleteFieldInput>>;
};

export type ArticleCommentsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ArticleCommentsAggregateInput>>;
  OR?: InputMaybe<Array<ArticleCommentsAggregateInput>>;
  NOT?: InputMaybe<ArticleCommentsAggregateInput>;
  node?: InputMaybe<ArticleCommentsNodeAggregationWhereInput>;
};

export type ArticleCommentsConnectFieldInput = {
  where?: InputMaybe<CommentConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<CommentConnectInput>>;
};

export type ArticleCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type ArticleCommentsConnectionWhere = {
  AND?: InputMaybe<Array<ArticleCommentsConnectionWhere>>;
  OR?: InputMaybe<Array<ArticleCommentsConnectionWhere>>;
  NOT?: InputMaybe<ArticleCommentsConnectionWhere>;
  node?: InputMaybe<CommentWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CommentWhere>;
};

export type ArticleCommentsConnectOrCreateFieldInput = {
  where: CommentConnectOrCreateWhere;
  onCreate: ArticleCommentsConnectOrCreateFieldInputOnCreate;
};

export type ArticleCommentsConnectOrCreateFieldInputOnCreate = {
  node: CommentOnCreateInput;
};

export type ArticleCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type ArticleCommentsDeleteFieldInput = {
  where?: InputMaybe<ArticleCommentsConnectionWhere>;
  delete?: InputMaybe<CommentDeleteInput>;
};

export type ArticleCommentsDisconnectFieldInput = {
  where?: InputMaybe<ArticleCommentsConnectionWhere>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
};

export type ArticleCommentsFieldInput = {
  connectOrCreate?: InputMaybe<Array<ArticleCommentsConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<ArticleCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<ArticleCommentsCreateFieldInput>>;
};

export type ArticleCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArticleCommentsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ArticleCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ArticleCommentsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArticleCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type ArticleCommentsUpdateFieldInput = {
  where?: InputMaybe<ArticleCommentsConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<ArticleCommentsConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<ArticleCommentsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<ArticleCommentsDisconnectFieldInput>>;
  create?: InputMaybe<Array<ArticleCommentsCreateFieldInput>>;
  update?: InputMaybe<ArticleCommentsUpdateConnectionInput>;
  delete?: InputMaybe<Array<ArticleCommentsDeleteFieldInput>>;
};

export type ArticleConnectInput = {
  author?: InputMaybe<Array<ArticleAuthorConnectFieldInput>>;
  distribution?: InputMaybe<Array<ArticleDistributionConnectFieldInput>>;
  mentions?: InputMaybe<ArticleMentionsConnectInput>;
  comments?: InputMaybe<Array<ArticleCommentsConnectFieldInput>>;
};

export type ArticleConnectOrCreateInput = {
  author?: InputMaybe<Array<ArticleAuthorConnectOrCreateFieldInput>>;
  distribution?: InputMaybe<
    Array<ArticleDistributionConnectOrCreateFieldInput>
  >;
  mentions?: InputMaybe<ArticleMentionsConnectOrCreateInput>;
  comments?: InputMaybe<Array<ArticleCommentsConnectOrCreateFieldInput>>;
};

export type ArticleConnectOrCreateWhere = {
  node: ArticleUniqueWhere;
};

export type ArticleConnectWhere = {
  node: ArticleWhere;
};

export type ArticleCreateInput = {
  title: Scalars["String"]["input"];
  abstract?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  retrieved_url: Scalars["String"]["input"];
  author?: InputMaybe<ArticleAuthorFieldInput>;
  distribution?: InputMaybe<ArticleDistributionFieldInput>;
  mentions?: InputMaybe<ArticleMentionsCreateInput>;
  comments?: InputMaybe<ArticleCommentsFieldInput>;
};

export type ArticleDeleteInput = {
  author?: InputMaybe<Array<ArticleAuthorDeleteFieldInput>>;
  distribution?: InputMaybe<Array<ArticleDistributionDeleteFieldInput>>;
  mentions?: InputMaybe<ArticleMentionsDeleteInput>;
  comments?: InputMaybe<Array<ArticleCommentsDeleteFieldInput>>;
};

export type ArticleDisconnectInput = {
  author?: InputMaybe<Array<ArticleAuthorDisconnectFieldInput>>;
  distribution?: InputMaybe<Array<ArticleDistributionDisconnectFieldInput>>;
  mentions?: InputMaybe<ArticleMentionsDisconnectInput>;
  comments?: InputMaybe<Array<ArticleCommentsDisconnectFieldInput>>;
};

export type ArticleDistributionAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ArticleDistributionAggregateInput>>;
  OR?: InputMaybe<Array<ArticleDistributionAggregateInput>>;
  NOT?: InputMaybe<ArticleDistributionAggregateInput>;
  node?: InputMaybe<ArticleDistributionNodeAggregationWhereInput>;
  edge?: InputMaybe<DistributionInfoAggregationWhereInput>;
};

export type ArticleDistributionConnectFieldInput = {
  edge: DistributionInfoCreateInput;
  where?: InputMaybe<MediaChannelConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MediaChannelConnectInput>>;
};

export type ArticleDistributionConnectionSort = {
  node?: InputMaybe<MediaChannelSort>;
  edge?: InputMaybe<DistributionInfoSort>;
};

export type ArticleDistributionConnectionWhere = {
  AND?: InputMaybe<Array<ArticleDistributionConnectionWhere>>;
  OR?: InputMaybe<Array<ArticleDistributionConnectionWhere>>;
  NOT?: InputMaybe<ArticleDistributionConnectionWhere>;
  node?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MediaChannelWhere>;
  edge?: InputMaybe<DistributionInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<DistributionInfoWhere>;
};

export type ArticleDistributionConnectOrCreateFieldInput = {
  where: MediaChannelConnectOrCreateWhere;
  onCreate: ArticleDistributionConnectOrCreateFieldInputOnCreate;
};

export type ArticleDistributionConnectOrCreateFieldInputOnCreate = {
  node: MediaChannelOnCreateInput;
  edge: DistributionInfoCreateInput;
};

export type ArticleDistributionCreateFieldInput = {
  edge: DistributionInfoCreateInput;
  node: MediaChannelCreateInput;
};

export type ArticleDistributionDeleteFieldInput = {
  where?: InputMaybe<ArticleDistributionConnectionWhere>;
  delete?: InputMaybe<MediaChannelDeleteInput>;
};

export type ArticleDistributionDisconnectFieldInput = {
  where?: InputMaybe<ArticleDistributionConnectionWhere>;
  disconnect?: InputMaybe<MediaChannelDisconnectInput>;
};

export type ArticleDistributionFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<ArticleDistributionConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ArticleDistributionConnectFieldInput>>;
  create?: InputMaybe<Array<ArticleDistributionCreateFieldInput>>;
};

export type ArticleDistributionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArticleDistributionNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ArticleDistributionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ArticleDistributionNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArticleDistributionUpdateConnectionInput = {
  node?: InputMaybe<MediaChannelUpdateInput>;
  edge?: InputMaybe<DistributionInfoUpdateInput>;
};

export type ArticleDistributionUpdateFieldInput = {
  where?: InputMaybe<ArticleDistributionConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<ArticleDistributionConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ArticleDistributionConnectFieldInput>>;
  disconnect?: InputMaybe<Array<ArticleDistributionDisconnectFieldInput>>;
  create?: InputMaybe<Array<ArticleDistributionCreateFieldInput>>;
  update?: InputMaybe<ArticleDistributionUpdateConnectionInput>;
  delete?: InputMaybe<Array<ArticleDistributionDeleteFieldInput>>;
};

export type ArticleMentionsConnectInput = {
  Organization?: InputMaybe<
    Array<ArticleMentionsOrganizationConnectFieldInput>
  >;
  Person?: InputMaybe<Array<ArticleMentionsPersonConnectFieldInput>>;
};

export type ArticleMentionsConnectionSort = {
  edge?: InputMaybe<MentionInfoSort>;
};

export type ArticleMentionsConnectionWhere = {
  Organization?: InputMaybe<ArticleMentionsOrganizationConnectionWhere>;
  Person?: InputMaybe<ArticleMentionsPersonConnectionWhere>;
};

export type ArticleMentionsConnectOrCreateInput = {
  Organization?: InputMaybe<
    Array<ArticleMentionsOrganizationConnectOrCreateFieldInput>
  >;
  Person?: InputMaybe<Array<ArticleMentionsPersonConnectOrCreateFieldInput>>;
};

export type ArticleMentionsCreateFieldInput = {
  Organization?: InputMaybe<Array<ArticleMentionsOrganizationCreateFieldInput>>;
  Person?: InputMaybe<Array<ArticleMentionsPersonCreateFieldInput>>;
};

export type ArticleMentionsCreateInput = {
  Organization?: InputMaybe<ArticleMentionsOrganizationFieldInput>;
  Person?: InputMaybe<ArticleMentionsPersonFieldInput>;
};

export type ArticleMentionsDeleteInput = {
  Organization?: InputMaybe<Array<ArticleMentionsOrganizationDeleteFieldInput>>;
  Person?: InputMaybe<Array<ArticleMentionsPersonDeleteFieldInput>>;
};

export type ArticleMentionsDisconnectInput = {
  Organization?: InputMaybe<
    Array<ArticleMentionsOrganizationDisconnectFieldInput>
  >;
  Person?: InputMaybe<Array<ArticleMentionsPersonDisconnectFieldInput>>;
};

export type ArticleMentionsOrganizationConnectFieldInput = {
  edge?: InputMaybe<MentionInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type ArticleMentionsOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<ArticleMentionsOrganizationConnectionWhere>>;
  OR?: InputMaybe<Array<ArticleMentionsOrganizationConnectionWhere>>;
  NOT?: InputMaybe<ArticleMentionsOrganizationConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<MentionInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<MentionInfoWhere>;
};

export type ArticleMentionsOrganizationConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: ArticleMentionsOrganizationConnectOrCreateFieldInputOnCreate;
};

export type ArticleMentionsOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
  edge?: InputMaybe<MentionInfoCreateInput>;
};

export type ArticleMentionsOrganizationCreateFieldInput = {
  edge?: InputMaybe<MentionInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type ArticleMentionsOrganizationDeleteFieldInput = {
  where?: InputMaybe<ArticleMentionsOrganizationConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type ArticleMentionsOrganizationDisconnectFieldInput = {
  where?: InputMaybe<ArticleMentionsOrganizationConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type ArticleMentionsOrganizationFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<ArticleMentionsOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ArticleMentionsOrganizationConnectFieldInput>>;
  create?: InputMaybe<Array<ArticleMentionsOrganizationCreateFieldInput>>;
};

export type ArticleMentionsOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<MentionInfoUpdateInput>;
};

export type ArticleMentionsOrganizationUpdateFieldInput = {
  where?: InputMaybe<ArticleMentionsOrganizationConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<ArticleMentionsOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ArticleMentionsOrganizationConnectFieldInput>>;
  disconnect?: InputMaybe<
    Array<ArticleMentionsOrganizationDisconnectFieldInput>
  >;
  create?: InputMaybe<Array<ArticleMentionsOrganizationCreateFieldInput>>;
  update?: InputMaybe<ArticleMentionsOrganizationUpdateConnectionInput>;
  delete?: InputMaybe<Array<ArticleMentionsOrganizationDeleteFieldInput>>;
};

export type ArticleMentionsPersonConnectFieldInput = {
  edge?: InputMaybe<MentionInfoCreateInput>;
  where?: InputMaybe<PersonConnectWhere>;
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type ArticleMentionsPersonConnectionWhere = {
  AND?: InputMaybe<Array<ArticleMentionsPersonConnectionWhere>>;
  OR?: InputMaybe<Array<ArticleMentionsPersonConnectionWhere>>;
  NOT?: InputMaybe<ArticleMentionsPersonConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
  edge?: InputMaybe<MentionInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<MentionInfoWhere>;
};

export type ArticleMentionsPersonConnectOrCreateFieldInput = {
  where: PersonConnectOrCreateWhere;
  onCreate: ArticleMentionsPersonConnectOrCreateFieldInputOnCreate;
};

export type ArticleMentionsPersonConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
  edge?: InputMaybe<MentionInfoCreateInput>;
};

export type ArticleMentionsPersonCreateFieldInput = {
  edge?: InputMaybe<MentionInfoCreateInput>;
  node: PersonCreateInput;
};

export type ArticleMentionsPersonDeleteFieldInput = {
  where?: InputMaybe<ArticleMentionsPersonConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type ArticleMentionsPersonDisconnectFieldInput = {
  where?: InputMaybe<ArticleMentionsPersonConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type ArticleMentionsPersonFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<ArticleMentionsPersonConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ArticleMentionsPersonConnectFieldInput>>;
  create?: InputMaybe<Array<ArticleMentionsPersonCreateFieldInput>>;
};

export type ArticleMentionsPersonUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<MentionInfoUpdateInput>;
};

export type ArticleMentionsPersonUpdateFieldInput = {
  where?: InputMaybe<ArticleMentionsPersonConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<ArticleMentionsPersonConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ArticleMentionsPersonConnectFieldInput>>;
  disconnect?: InputMaybe<Array<ArticleMentionsPersonDisconnectFieldInput>>;
  create?: InputMaybe<Array<ArticleMentionsPersonCreateFieldInput>>;
  update?: InputMaybe<ArticleMentionsPersonUpdateConnectionInput>;
  delete?: InputMaybe<Array<ArticleMentionsPersonDeleteFieldInput>>;
};

export type ArticleMentionsUpdateInput = {
  Organization?: InputMaybe<Array<ArticleMentionsOrganizationUpdateFieldInput>>;
  Person?: InputMaybe<Array<ArticleMentionsPersonUpdateFieldInput>>;
};

export type ArticleOnCreateInput = {
  title: Scalars["String"]["input"];
  abstract?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  retrieved_url: Scalars["String"]["input"];
};

export type ArticleOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more ArticleSort objects to sort Articles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ArticleSort>>;
};

export type ArticleRelationInput = {
  author?: InputMaybe<Array<ArticleAuthorCreateFieldInput>>;
  distribution?: InputMaybe<Array<ArticleDistributionCreateFieldInput>>;
  mentions?: InputMaybe<ArticleMentionsCreateFieldInput>;
  comments?: InputMaybe<Array<ArticleCommentsCreateFieldInput>>;
};

/** Fields to sort Articles by. The order in which sorts are applied is not guaranteed when specifying many fields in one ArticleSort object. */
export type ArticleSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  abstract?: InputMaybe<SortDirection>;
  summary?: InputMaybe<SortDirection>;
  retrieved_url?: InputMaybe<SortDirection>;
};

export type ArticleUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  retrieved_url?: InputMaybe<Scalars["String"]["input"]>;
};

export type ArticleUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  abstract?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  retrieved_url?: InputMaybe<Scalars["String"]["input"]>;
  author?: InputMaybe<Array<ArticleAuthorUpdateFieldInput>>;
  distribution?: InputMaybe<Array<ArticleDistributionUpdateFieldInput>>;
  mentions?: InputMaybe<ArticleMentionsUpdateInput>;
  comments?: InputMaybe<Array<ArticleCommentsUpdateFieldInput>>;
};

export type ArticleWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  abstract?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  abstract_NOT?: InputMaybe<Scalars["String"]["input"]>;
  abstract_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  abstract_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  abstract_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  abstract_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  abstract_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  abstract_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  abstract_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  abstract_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT?: InputMaybe<Scalars["String"]["input"]>;
  summary_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  summary_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  summary_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  summary_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  retrieved_url?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  retrieved_url_NOT?: InputMaybe<Scalars["String"]["input"]>;
  retrieved_url_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  retrieved_url_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  retrieved_url_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  retrieved_url_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  retrieved_url_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  retrieved_url_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  retrieved_url_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  retrieved_url_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<ArticleWhere>>;
  AND?: InputMaybe<Array<ArticleWhere>>;
  NOT?: InputMaybe<ArticleWhere>;
  /** @deprecated Use `author_SOME` instead. */
  author?: InputMaybe<PersonWhere>;
  /** @deprecated Use `author_NONE` instead. */
  author_NOT?: InputMaybe<PersonWhere>;
  /** Return Articles where all of the related People match this filter */
  author_ALL?: InputMaybe<PersonWhere>;
  /** Return Articles where none of the related People match this filter */
  author_NONE?: InputMaybe<PersonWhere>;
  /** Return Articles where one of the related People match this filter */
  author_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Articles where some of the related People match this filter */
  author_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `authorConnection_SOME` instead. */
  authorConnection?: InputMaybe<ArticleAuthorConnectionWhere>;
  /** @deprecated Use `authorConnection_NONE` instead. */
  authorConnection_NOT?: InputMaybe<ArticleAuthorConnectionWhere>;
  /** Return Articles where all of the related ArticleAuthorConnections match this filter */
  authorConnection_ALL?: InputMaybe<ArticleAuthorConnectionWhere>;
  /** Return Articles where none of the related ArticleAuthorConnections match this filter */
  authorConnection_NONE?: InputMaybe<ArticleAuthorConnectionWhere>;
  /** Return Articles where one of the related ArticleAuthorConnections match this filter */
  authorConnection_SINGLE?: InputMaybe<ArticleAuthorConnectionWhere>;
  /** Return Articles where some of the related ArticleAuthorConnections match this filter */
  authorConnection_SOME?: InputMaybe<ArticleAuthorConnectionWhere>;
  authorAggregate?: InputMaybe<ArticleAuthorAggregateInput>;
  /** @deprecated Use `distribution_SOME` instead. */
  distribution?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Use `distribution_NONE` instead. */
  distribution_NOT?: InputMaybe<MediaChannelWhere>;
  /** Return Articles where all of the related MediaChannels match this filter */
  distribution_ALL?: InputMaybe<MediaChannelWhere>;
  /** Return Articles where none of the related MediaChannels match this filter */
  distribution_NONE?: InputMaybe<MediaChannelWhere>;
  /** Return Articles where one of the related MediaChannels match this filter */
  distribution_SINGLE?: InputMaybe<MediaChannelWhere>;
  /** Return Articles where some of the related MediaChannels match this filter */
  distribution_SOME?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Use `distributionConnection_SOME` instead. */
  distributionConnection?: InputMaybe<ArticleDistributionConnectionWhere>;
  /** @deprecated Use `distributionConnection_NONE` instead. */
  distributionConnection_NOT?: InputMaybe<ArticleDistributionConnectionWhere>;
  /** Return Articles where all of the related ArticleDistributionConnections match this filter */
  distributionConnection_ALL?: InputMaybe<ArticleDistributionConnectionWhere>;
  /** Return Articles where none of the related ArticleDistributionConnections match this filter */
  distributionConnection_NONE?: InputMaybe<ArticleDistributionConnectionWhere>;
  /** Return Articles where one of the related ArticleDistributionConnections match this filter */
  distributionConnection_SINGLE?: InputMaybe<ArticleDistributionConnectionWhere>;
  /** Return Articles where some of the related ArticleDistributionConnections match this filter */
  distributionConnection_SOME?: InputMaybe<ArticleDistributionConnectionWhere>;
  distributionAggregate?: InputMaybe<ArticleDistributionAggregateInput>;
  /** @deprecated Use `mentions_SOME` instead. */
  mentions?: InputMaybe<EntityWhere>;
  /** @deprecated Use `mentions_NONE` instead. */
  mentions_NOT?: InputMaybe<EntityWhere>;
  /** Return Articles where all of the related Entities match this filter */
  mentions_ALL?: InputMaybe<EntityWhere>;
  /** Return Articles where none of the related Entities match this filter */
  mentions_NONE?: InputMaybe<EntityWhere>;
  /** Return Articles where one of the related Entities match this filter */
  mentions_SINGLE?: InputMaybe<EntityWhere>;
  /** Return Articles where some of the related Entities match this filter */
  mentions_SOME?: InputMaybe<EntityWhere>;
  /** @deprecated Use `mentionsConnection_SOME` instead. */
  mentionsConnection?: InputMaybe<ArticleMentionsConnectionWhere>;
  /** @deprecated Use `mentionsConnection_NONE` instead. */
  mentionsConnection_NOT?: InputMaybe<ArticleMentionsConnectionWhere>;
  /** Return Articles where all of the related ArticleMentionsConnections match this filter */
  mentionsConnection_ALL?: InputMaybe<ArticleMentionsConnectionWhere>;
  /** Return Articles where none of the related ArticleMentionsConnections match this filter */
  mentionsConnection_NONE?: InputMaybe<ArticleMentionsConnectionWhere>;
  /** Return Articles where one of the related ArticleMentionsConnections match this filter */
  mentionsConnection_SINGLE?: InputMaybe<ArticleMentionsConnectionWhere>;
  /** Return Articles where some of the related ArticleMentionsConnections match this filter */
  mentionsConnection_SOME?: InputMaybe<ArticleMentionsConnectionWhere>;
  /** @deprecated Use `comments_SOME` instead. */
  comments?: InputMaybe<CommentWhere>;
  /** @deprecated Use `comments_NONE` instead. */
  comments_NOT?: InputMaybe<CommentWhere>;
  /** Return Articles where all of the related Comments match this filter */
  comments_ALL?: InputMaybe<CommentWhere>;
  /** Return Articles where none of the related Comments match this filter */
  comments_NONE?: InputMaybe<CommentWhere>;
  /** Return Articles where one of the related Comments match this filter */
  comments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Articles where some of the related Comments match this filter */
  comments_SOME?: InputMaybe<CommentWhere>;
  /** @deprecated Use `commentsConnection_SOME` instead. */
  commentsConnection?: InputMaybe<ArticleCommentsConnectionWhere>;
  /** @deprecated Use `commentsConnection_NONE` instead. */
  commentsConnection_NOT?: InputMaybe<ArticleCommentsConnectionWhere>;
  /** Return Articles where all of the related ArticleCommentsConnections match this filter */
  commentsConnection_ALL?: InputMaybe<ArticleCommentsConnectionWhere>;
  /** Return Articles where none of the related ArticleCommentsConnections match this filter */
  commentsConnection_NONE?: InputMaybe<ArticleCommentsConnectionWhere>;
  /** Return Articles where one of the related ArticleCommentsConnections match this filter */
  commentsConnection_SINGLE?: InputMaybe<ArticleCommentsConnectionWhere>;
  /** Return Articles where some of the related ArticleCommentsConnections match this filter */
  commentsConnection_SOME?: InputMaybe<ArticleCommentsConnectionWhere>;
  commentsAggregate?: InputMaybe<ArticleCommentsAggregateInput>;
};

export type AssetWhere = {
  Organization?: InputMaybe<OrganizationWhere>;
  MediaChannel?: InputMaybe<MediaChannelWhere>;
};

export type AssociationInfoAggregationWhereInput = {
  AND?: InputMaybe<Array<AssociationInfoAggregationWhereInput>>;
  OR?: InputMaybe<Array<AssociationInfoAggregationWhereInput>>;
  NOT?: InputMaybe<AssociationInfoAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssociationInfoCreateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssociationInfoSort = {
  details?: InputMaybe<SortDirection>;
  weight?: InputMaybe<SortDirection>;
};

export type AssociationInfoUpdateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
  weight_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  weight_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssociationInfoWhere = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT?: InputMaybe<Scalars["String"]["input"]>;
  details_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  details_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  details_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  details_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weight_NOT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weight_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  weight_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  OR?: InputMaybe<Array<AssociationInfoWhere>>;
  AND?: InputMaybe<Array<AssociationInfoWhere>>;
  NOT?: InputMaybe<AssociationInfoWhere>;
};

export type BeliefAssociated_PositionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<BeliefAssociated_PositionsAggregateInput>>;
  OR?: InputMaybe<Array<BeliefAssociated_PositionsAggregateInput>>;
  NOT?: InputMaybe<BeliefAssociated_PositionsAggregateInput>;
  node?: InputMaybe<BeliefAssociated_PositionsNodeAggregationWhereInput>;
  edge?: InputMaybe<AssociationInfoAggregationWhereInput>;
};

export type BeliefAssociated_PositionsConnectFieldInput = {
  edge?: InputMaybe<AssociationInfoCreateInput>;
  where?: InputMaybe<PoliticalPositionConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PoliticalPositionConnectInput>>;
};

export type BeliefAssociated_PositionsConnectionSort = {
  node?: InputMaybe<PoliticalPositionSort>;
  edge?: InputMaybe<AssociationInfoSort>;
};

export type BeliefAssociated_PositionsConnectionWhere = {
  AND?: InputMaybe<Array<BeliefAssociated_PositionsConnectionWhere>>;
  OR?: InputMaybe<Array<BeliefAssociated_PositionsConnectionWhere>>;
  NOT?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  node?: InputMaybe<PoliticalPositionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PoliticalPositionWhere>;
  edge?: InputMaybe<AssociationInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<AssociationInfoWhere>;
};

export type BeliefAssociated_PositionsConnectOrCreateFieldInput = {
  where: PoliticalPositionConnectOrCreateWhere;
  onCreate: BeliefAssociated_PositionsConnectOrCreateFieldInputOnCreate;
};

export type BeliefAssociated_PositionsConnectOrCreateFieldInputOnCreate = {
  node: PoliticalPositionOnCreateInput;
  edge?: InputMaybe<AssociationInfoCreateInput>;
};

export type BeliefAssociated_PositionsCreateFieldInput = {
  edge?: InputMaybe<AssociationInfoCreateInput>;
  node: PoliticalPositionCreateInput;
};

export type BeliefAssociated_PositionsDeleteFieldInput = {
  where?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  delete?: InputMaybe<PoliticalPositionDeleteInput>;
};

export type BeliefAssociated_PositionsDisconnectFieldInput = {
  where?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  disconnect?: InputMaybe<PoliticalPositionDisconnectInput>;
};

export type BeliefAssociated_PositionsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<BeliefAssociated_PositionsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<BeliefAssociated_PositionsConnectFieldInput>>;
  create?: InputMaybe<Array<BeliefAssociated_PositionsCreateFieldInput>>;
};

export type BeliefAssociated_PositionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BeliefAssociated_PositionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<BeliefAssociated_PositionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BeliefAssociated_PositionsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BeliefAssociated_PositionsUpdateConnectionInput = {
  node?: InputMaybe<PoliticalPositionUpdateInput>;
  edge?: InputMaybe<AssociationInfoUpdateInput>;
};

export type BeliefAssociated_PositionsUpdateFieldInput = {
  where?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<BeliefAssociated_PositionsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<BeliefAssociated_PositionsConnectFieldInput>>;
  disconnect?: InputMaybe<
    Array<BeliefAssociated_PositionsDisconnectFieldInput>
  >;
  create?: InputMaybe<Array<BeliefAssociated_PositionsCreateFieldInput>>;
  update?: InputMaybe<BeliefAssociated_PositionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<BeliefAssociated_PositionsDeleteFieldInput>>;
};

export type BeliefConnectInput = {
  associated_positions?: InputMaybe<
    Array<BeliefAssociated_PositionsConnectFieldInput>
  >;
  similar_beliefs?: InputMaybe<Array<BeliefSimilar_BeliefsConnectFieldInput>>;
};

export type BeliefConnectOrCreateInput = {
  associated_positions?: InputMaybe<
    Array<BeliefAssociated_PositionsConnectOrCreateFieldInput>
  >;
  similar_beliefs?: InputMaybe<
    Array<BeliefSimilar_BeliefsConnectOrCreateFieldInput>
  >;
};

export type BeliefConnectOrCreateWhere = {
  node: BeliefUniqueWhere;
};

export type BeliefConnectWhere = {
  node: BeliefWhere;
};

export type BeliefCreateInput = {
  name: Scalars["String"]["input"];
  summary: Scalars["String"]["input"];
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  associated_positions?: InputMaybe<BeliefAssociated_PositionsFieldInput>;
  similar_beliefs?: InputMaybe<BeliefSimilar_BeliefsFieldInput>;
};

export type BeliefDeleteInput = {
  associated_positions?: InputMaybe<
    Array<BeliefAssociated_PositionsDeleteFieldInput>
  >;
  similar_beliefs?: InputMaybe<Array<BeliefSimilar_BeliefsDeleteFieldInput>>;
};

export type BeliefDisconnectInput = {
  associated_positions?: InputMaybe<
    Array<BeliefAssociated_PositionsDisconnectFieldInput>
  >;
  similar_beliefs?: InputMaybe<
    Array<BeliefSimilar_BeliefsDisconnectFieldInput>
  >;
};

export type BeliefOnCreateInput = {
  name: Scalars["String"]["input"];
  summary: Scalars["String"]["input"];
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
};

export type BeliefOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more BeliefSort objects to sort Beliefs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BeliefSort>>;
};

export type BeliefRelationInput = {
  associated_positions?: InputMaybe<
    Array<BeliefAssociated_PositionsCreateFieldInput>
  >;
  similar_beliefs?: InputMaybe<Array<BeliefSimilar_BeliefsCreateFieldInput>>;
};

export type BeliefSimilar_BeliefsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<BeliefSimilar_BeliefsAggregateInput>>;
  OR?: InputMaybe<Array<BeliefSimilar_BeliefsAggregateInput>>;
  NOT?: InputMaybe<BeliefSimilar_BeliefsAggregateInput>;
  node?: InputMaybe<BeliefSimilar_BeliefsNodeAggregationWhereInput>;
  edge?: InputMaybe<SimilarityInfoAggregationWhereInput>;
};

export type BeliefSimilar_BeliefsConnectFieldInput = {
  edge?: InputMaybe<SimilarityInfoCreateInput>;
  where?: InputMaybe<BeliefConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<BeliefConnectInput>>;
};

export type BeliefSimilar_BeliefsConnectionSort = {
  node?: InputMaybe<BeliefSort>;
  edge?: InputMaybe<SimilarityInfoSort>;
};

export type BeliefSimilar_BeliefsConnectionWhere = {
  AND?: InputMaybe<Array<BeliefSimilar_BeliefsConnectionWhere>>;
  OR?: InputMaybe<Array<BeliefSimilar_BeliefsConnectionWhere>>;
  NOT?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  node?: InputMaybe<BeliefWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<BeliefWhere>;
  edge?: InputMaybe<SimilarityInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<SimilarityInfoWhere>;
};

export type BeliefSimilar_BeliefsConnectOrCreateFieldInput = {
  where: BeliefConnectOrCreateWhere;
  onCreate: BeliefSimilar_BeliefsConnectOrCreateFieldInputOnCreate;
};

export type BeliefSimilar_BeliefsConnectOrCreateFieldInputOnCreate = {
  node: BeliefOnCreateInput;
  edge?: InputMaybe<SimilarityInfoCreateInput>;
};

export type BeliefSimilar_BeliefsCreateFieldInput = {
  edge?: InputMaybe<SimilarityInfoCreateInput>;
  node: BeliefCreateInput;
};

export type BeliefSimilar_BeliefsDeleteFieldInput = {
  where?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  delete?: InputMaybe<BeliefDeleteInput>;
};

export type BeliefSimilar_BeliefsDisconnectFieldInput = {
  where?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  disconnect?: InputMaybe<BeliefDisconnectInput>;
};

export type BeliefSimilar_BeliefsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<BeliefSimilar_BeliefsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<BeliefSimilar_BeliefsConnectFieldInput>>;
  create?: InputMaybe<Array<BeliefSimilar_BeliefsCreateFieldInput>>;
};

export type BeliefSimilar_BeliefsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BeliefSimilar_BeliefsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<BeliefSimilar_BeliefsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BeliefSimilar_BeliefsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BeliefSimilar_BeliefsUpdateConnectionInput = {
  node?: InputMaybe<BeliefUpdateInput>;
  edge?: InputMaybe<SimilarityInfoUpdateInput>;
};

export type BeliefSimilar_BeliefsUpdateFieldInput = {
  where?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<BeliefSimilar_BeliefsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<BeliefSimilar_BeliefsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<BeliefSimilar_BeliefsDisconnectFieldInput>>;
  create?: InputMaybe<Array<BeliefSimilar_BeliefsCreateFieldInput>>;
  update?: InputMaybe<BeliefSimilar_BeliefsUpdateConnectionInput>;
  delete?: InputMaybe<Array<BeliefSimilar_BeliefsDeleteFieldInput>>;
};

/** Fields to sort Beliefs by. The order in which sorts are applied is not guaranteed when specifying many fields in one BeliefSort object. */
export type BeliefSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  summary?: InputMaybe<SortDirection>;
  wiki_tag?: InputMaybe<SortDirection>;
};

export type BeliefUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type BeliefUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  associated_positions?: InputMaybe<
    Array<BeliefAssociated_PositionsUpdateFieldInput>
  >;
  similar_beliefs?: InputMaybe<Array<BeliefSimilar_BeliefsUpdateFieldInput>>;
};

export type BeliefWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT?: InputMaybe<Scalars["String"]["input"]>;
  summary_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  summary_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  summary_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  summary_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  wiki_tag_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<BeliefWhere>>;
  AND?: InputMaybe<Array<BeliefWhere>>;
  NOT?: InputMaybe<BeliefWhere>;
  /** @deprecated Use `associated_positions_SOME` instead. */
  associated_positions?: InputMaybe<PoliticalPositionWhere>;
  /** @deprecated Use `associated_positions_NONE` instead. */
  associated_positions_NOT?: InputMaybe<PoliticalPositionWhere>;
  /** Return Beliefs where all of the related PoliticalPositions match this filter */
  associated_positions_ALL?: InputMaybe<PoliticalPositionWhere>;
  /** Return Beliefs where none of the related PoliticalPositions match this filter */
  associated_positions_NONE?: InputMaybe<PoliticalPositionWhere>;
  /** Return Beliefs where one of the related PoliticalPositions match this filter */
  associated_positions_SINGLE?: InputMaybe<PoliticalPositionWhere>;
  /** Return Beliefs where some of the related PoliticalPositions match this filter */
  associated_positions_SOME?: InputMaybe<PoliticalPositionWhere>;
  /** @deprecated Use `associated_positionsConnection_SOME` instead. */
  associated_positionsConnection?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  /** @deprecated Use `associated_positionsConnection_NONE` instead. */
  associated_positionsConnection_NOT?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  /** Return Beliefs where all of the related BeliefAssociated_positionsConnections match this filter */
  associated_positionsConnection_ALL?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  /** Return Beliefs where none of the related BeliefAssociated_positionsConnections match this filter */
  associated_positionsConnection_NONE?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  /** Return Beliefs where one of the related BeliefAssociated_positionsConnections match this filter */
  associated_positionsConnection_SINGLE?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  /** Return Beliefs where some of the related BeliefAssociated_positionsConnections match this filter */
  associated_positionsConnection_SOME?: InputMaybe<BeliefAssociated_PositionsConnectionWhere>;
  associated_positionsAggregate?: InputMaybe<BeliefAssociated_PositionsAggregateInput>;
  /** @deprecated Use `similar_beliefs_SOME` instead. */
  similar_beliefs?: InputMaybe<BeliefWhere>;
  /** @deprecated Use `similar_beliefs_NONE` instead. */
  similar_beliefs_NOT?: InputMaybe<BeliefWhere>;
  /** Return Beliefs where all of the related Beliefs match this filter */
  similar_beliefs_ALL?: InputMaybe<BeliefWhere>;
  /** Return Beliefs where none of the related Beliefs match this filter */
  similar_beliefs_NONE?: InputMaybe<BeliefWhere>;
  /** Return Beliefs where one of the related Beliefs match this filter */
  similar_beliefs_SINGLE?: InputMaybe<BeliefWhere>;
  /** Return Beliefs where some of the related Beliefs match this filter */
  similar_beliefs_SOME?: InputMaybe<BeliefWhere>;
  /** @deprecated Use `similar_beliefsConnection_SOME` instead. */
  similar_beliefsConnection?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  /** @deprecated Use `similar_beliefsConnection_NONE` instead. */
  similar_beliefsConnection_NOT?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  /** Return Beliefs where all of the related BeliefSimilar_beliefsConnections match this filter */
  similar_beliefsConnection_ALL?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  /** Return Beliefs where none of the related BeliefSimilar_beliefsConnections match this filter */
  similar_beliefsConnection_NONE?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  /** Return Beliefs where one of the related BeliefSimilar_beliefsConnections match this filter */
  similar_beliefsConnection_SINGLE?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  /** Return Beliefs where some of the related BeliefSimilar_beliefsConnections match this filter */
  similar_beliefsConnection_SOME?: InputMaybe<BeliefSimilar_BeliefsConnectionWhere>;
  similar_beliefsAggregate?: InputMaybe<BeliefSimilar_BeliefsAggregateInput>;
};

export type CommentArticleAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CommentArticleAggregateInput>>;
  OR?: InputMaybe<Array<CommentArticleAggregateInput>>;
  NOT?: InputMaybe<CommentArticleAggregateInput>;
  node?: InputMaybe<CommentArticleNodeAggregationWhereInput>;
};

export type CommentArticleConnectFieldInput = {
  where?: InputMaybe<ArticleConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<ArticleConnectInput>;
};

export type CommentArticleConnectionSort = {
  node?: InputMaybe<ArticleSort>;
};

export type CommentArticleConnectionWhere = {
  AND?: InputMaybe<Array<CommentArticleConnectionWhere>>;
  OR?: InputMaybe<Array<CommentArticleConnectionWhere>>;
  NOT?: InputMaybe<CommentArticleConnectionWhere>;
  node?: InputMaybe<ArticleWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ArticleWhere>;
};

export type CommentArticleConnectOrCreateFieldInput = {
  where: ArticleConnectOrCreateWhere;
  onCreate: CommentArticleConnectOrCreateFieldInputOnCreate;
};

export type CommentArticleConnectOrCreateFieldInputOnCreate = {
  node: ArticleOnCreateInput;
};

export type CommentArticleCreateFieldInput = {
  node: ArticleCreateInput;
};

export type CommentArticleDeleteFieldInput = {
  where?: InputMaybe<CommentArticleConnectionWhere>;
  delete?: InputMaybe<ArticleDeleteInput>;
};

export type CommentArticleDisconnectFieldInput = {
  where?: InputMaybe<CommentArticleConnectionWhere>;
  disconnect?: InputMaybe<ArticleDisconnectInput>;
};

export type CommentArticleFieldInput = {
  connectOrCreate?: InputMaybe<CommentArticleConnectOrCreateFieldInput>;
  connect?: InputMaybe<CommentArticleConnectFieldInput>;
  create?: InputMaybe<CommentArticleCreateFieldInput>;
};

export type CommentArticleNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentArticleNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CommentArticleNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentArticleNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  abstract_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  abstract_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  abstract_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  abstract_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  abstract_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  abstract_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  abstract_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  abstract_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  abstract_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  abstract_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  abstract_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  abstract_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  retrieved_url_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  retrieved_url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  retrieved_url_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  retrieved_url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  retrieved_url_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  retrieved_url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  retrieved_url_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  retrieved_url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  retrieved_url_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  retrieved_url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  retrieved_url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  retrieved_url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentArticleUpdateConnectionInput = {
  node?: InputMaybe<ArticleUpdateInput>;
};

export type CommentArticleUpdateFieldInput = {
  where?: InputMaybe<CommentArticleConnectionWhere>;
  connectOrCreate?: InputMaybe<CommentArticleConnectOrCreateFieldInput>;
  connect?: InputMaybe<CommentArticleConnectFieldInput>;
  disconnect?: InputMaybe<CommentArticleDisconnectFieldInput>;
  create?: InputMaybe<CommentArticleCreateFieldInput>;
  update?: InputMaybe<CommentArticleUpdateConnectionInput>;
  delete?: InputMaybe<CommentArticleDeleteFieldInput>;
};

export type CommentConnectInput = {
  user?: InputMaybe<CommentUserConnectFieldInput>;
  platform?: InputMaybe<CommentPlatformConnectFieldInput>;
  article?: InputMaybe<CommentArticleConnectFieldInput>;
};

export type CommentConnectOrCreateInput = {
  user?: InputMaybe<CommentUserConnectOrCreateFieldInput>;
  platform?: InputMaybe<CommentPlatformConnectOrCreateFieldInput>;
  article?: InputMaybe<CommentArticleConnectOrCreateFieldInput>;
};

export type CommentConnectOrCreateWhere = {
  node: CommentUniqueWhere;
};

export type CommentConnectWhere = {
  node: CommentWhere;
};

export type CommentCreateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  text: Scalars["String"]["input"];
  user?: InputMaybe<CommentUserFieldInput>;
  platform?: InputMaybe<CommentPlatformFieldInput>;
  article?: InputMaybe<CommentArticleFieldInput>;
};

export type CommentDeleteInput = {
  user?: InputMaybe<CommentUserDeleteFieldInput>;
  platform?: InputMaybe<CommentPlatformDeleteFieldInput>;
  article?: InputMaybe<CommentArticleDeleteFieldInput>;
};

export type CommentDisconnectInput = {
  user?: InputMaybe<CommentUserDisconnectFieldInput>;
  platform?: InputMaybe<CommentPlatformDisconnectFieldInput>;
  article?: InputMaybe<CommentArticleDisconnectFieldInput>;
};

export type CommentOnCreateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  text: Scalars["String"]["input"];
};

export type CommentOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more CommentSort objects to sort Comments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CommentSort>>;
};

export type CommentPlatformAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CommentPlatformAggregateInput>>;
  OR?: InputMaybe<Array<CommentPlatformAggregateInput>>;
  NOT?: InputMaybe<CommentPlatformAggregateInput>;
  node?: InputMaybe<CommentPlatformNodeAggregationWhereInput>;
  edge?: InputMaybe<DistributionInfoAggregationWhereInput>;
};

export type CommentPlatformConnectFieldInput = {
  edge: DistributionInfoCreateInput;
  where?: InputMaybe<MediaChannelConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<MediaChannelConnectInput>;
};

export type CommentPlatformConnectionSort = {
  node?: InputMaybe<MediaChannelSort>;
  edge?: InputMaybe<DistributionInfoSort>;
};

export type CommentPlatformConnectionWhere = {
  AND?: InputMaybe<Array<CommentPlatformConnectionWhere>>;
  OR?: InputMaybe<Array<CommentPlatformConnectionWhere>>;
  NOT?: InputMaybe<CommentPlatformConnectionWhere>;
  node?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MediaChannelWhere>;
  edge?: InputMaybe<DistributionInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<DistributionInfoWhere>;
};

export type CommentPlatformConnectOrCreateFieldInput = {
  where: MediaChannelConnectOrCreateWhere;
  onCreate: CommentPlatformConnectOrCreateFieldInputOnCreate;
};

export type CommentPlatformConnectOrCreateFieldInputOnCreate = {
  node: MediaChannelOnCreateInput;
  edge: DistributionInfoCreateInput;
};

export type CommentPlatformCreateFieldInput = {
  edge: DistributionInfoCreateInput;
  node: MediaChannelCreateInput;
};

export type CommentPlatformDeleteFieldInput = {
  where?: InputMaybe<CommentPlatformConnectionWhere>;
  delete?: InputMaybe<MediaChannelDeleteInput>;
};

export type CommentPlatformDisconnectFieldInput = {
  where?: InputMaybe<CommentPlatformConnectionWhere>;
  disconnect?: InputMaybe<MediaChannelDisconnectInput>;
};

export type CommentPlatformFieldInput = {
  connectOrCreate?: InputMaybe<CommentPlatformConnectOrCreateFieldInput>;
  connect?: InputMaybe<CommentPlatformConnectFieldInput>;
  create?: InputMaybe<CommentPlatformCreateFieldInput>;
};

export type CommentPlatformNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentPlatformNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CommentPlatformNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentPlatformNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentPlatformUpdateConnectionInput = {
  node?: InputMaybe<MediaChannelUpdateInput>;
  edge?: InputMaybe<DistributionInfoUpdateInput>;
};

export type CommentPlatformUpdateFieldInput = {
  where?: InputMaybe<CommentPlatformConnectionWhere>;
  connectOrCreate?: InputMaybe<CommentPlatformConnectOrCreateFieldInput>;
  connect?: InputMaybe<CommentPlatformConnectFieldInput>;
  disconnect?: InputMaybe<CommentPlatformDisconnectFieldInput>;
  create?: InputMaybe<CommentPlatformCreateFieldInput>;
  update?: InputMaybe<CommentPlatformUpdateConnectionInput>;
  delete?: InputMaybe<CommentPlatformDeleteFieldInput>;
};

export type CommentRelationInput = {
  user?: InputMaybe<CommentUserCreateFieldInput>;
  platform?: InputMaybe<CommentPlatformCreateFieldInput>;
  article?: InputMaybe<CommentArticleCreateFieldInput>;
};

/** Fields to sort Comments by. The order in which sorts are applied is not guaranteed when specifying many fields in one CommentSort object. */
export type CommentSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
};

export type CommentUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type CommentUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<CommentUserUpdateFieldInput>;
  platform?: InputMaybe<CommentPlatformUpdateFieldInput>;
  article?: InputMaybe<CommentArticleUpdateFieldInput>;
};

export type CommentUserAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CommentUserAggregateInput>>;
  OR?: InputMaybe<Array<CommentUserAggregateInput>>;
  NOT?: InputMaybe<CommentUserAggregateInput>;
  node?: InputMaybe<CommentUserNodeAggregationWhereInput>;
};

export type CommentUserConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<UserConnectInput>;
};

export type CommentUserConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type CommentUserConnectionWhere = {
  AND?: InputMaybe<Array<CommentUserConnectionWhere>>;
  OR?: InputMaybe<Array<CommentUserConnectionWhere>>;
  NOT?: InputMaybe<CommentUserConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type CommentUserConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: CommentUserConnectOrCreateFieldInputOnCreate;
};

export type CommentUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type CommentUserCreateFieldInput = {
  node: UserCreateInput;
};

export type CommentUserDeleteFieldInput = {
  where?: InputMaybe<CommentUserConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type CommentUserDisconnectFieldInput = {
  where?: InputMaybe<CommentUserConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type CommentUserFieldInput = {
  connectOrCreate?: InputMaybe<CommentUserConnectOrCreateFieldInput>;
  connect?: InputMaybe<CommentUserConnectFieldInput>;
  create?: InputMaybe<CommentUserCreateFieldInput>;
};

export type CommentUserNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentUserNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CommentUserNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentUserNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CommentUserUpdateFieldInput = {
  where?: InputMaybe<CommentUserConnectionWhere>;
  connectOrCreate?: InputMaybe<CommentUserConnectOrCreateFieldInput>;
  connect?: InputMaybe<CommentUserConnectFieldInput>;
  disconnect?: InputMaybe<CommentUserDisconnectFieldInput>;
  create?: InputMaybe<CommentUserCreateFieldInput>;
  update?: InputMaybe<CommentUserUpdateConnectionInput>;
  delete?: InputMaybe<CommentUserDeleteFieldInput>;
};

export type CommentWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT?: InputMaybe<Scalars["String"]["input"]>;
  text_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  text_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  text_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  text_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<CommentWhere>>;
  AND?: InputMaybe<Array<CommentWhere>>;
  NOT?: InputMaybe<CommentWhere>;
  user?: InputMaybe<UserWhere>;
  user_NOT?: InputMaybe<UserWhere>;
  userConnection?: InputMaybe<CommentUserConnectionWhere>;
  userConnection_NOT?: InputMaybe<CommentUserConnectionWhere>;
  userAggregate?: InputMaybe<CommentUserAggregateInput>;
  platform?: InputMaybe<MediaChannelWhere>;
  platform_NOT?: InputMaybe<MediaChannelWhere>;
  platformConnection?: InputMaybe<CommentPlatformConnectionWhere>;
  platformConnection_NOT?: InputMaybe<CommentPlatformConnectionWhere>;
  platformAggregate?: InputMaybe<CommentPlatformAggregateInput>;
  article?: InputMaybe<ArticleWhere>;
  article_NOT?: InputMaybe<ArticleWhere>;
  articleConnection?: InputMaybe<CommentArticleConnectionWhere>;
  articleConnection_NOT?: InputMaybe<CommentArticleConnectionWhere>;
  articleAggregate?: InputMaybe<CommentArticleAggregateInput>;
};

export type DistributionInfoAggregationWhereInput = {
  AND?: InputMaybe<Array<DistributionInfoAggregationWhereInput>>;
  OR?: InputMaybe<Array<DistributionInfoAggregationWhereInput>>;
  NOT?: InputMaybe<DistributionInfoAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DistributionInfoCreateInput = {
  date: Scalars["DateTime"]["input"];
  url: Scalars["String"]["input"];
};

export type DistributionInfoSort = {
  date?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export type DistributionInfoUpdateInput = {
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type DistributionInfoWhere = {
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  date_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT?: InputMaybe<Scalars["String"]["input"]>;
  url_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  url_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  url_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  url_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<DistributionInfoWhere>>;
  AND?: InputMaybe<Array<DistributionInfoWhere>>;
  NOT?: InputMaybe<DistributionInfoWhere>;
};

export type EducationInfoAggregationWhereInput = {
  AND?: InputMaybe<Array<EducationInfoAggregationWhereInput>>;
  OR?: InputMaybe<Array<EducationInfoAggregationWhereInput>>;
  NOT?: InputMaybe<EducationInfoAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  degree_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  degree_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  degree_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  degree_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  degree_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  degree_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  degree_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  degree_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  degree_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  degree_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  degree_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  degree_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  degree_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  degree_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  degree_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  degree_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  degree_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  degree_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  degree_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  degree_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  degree_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type EducationInfoCreateInput = {
  degree?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EducationInfoSort = {
  degree?: InputMaybe<SortDirection>;
  start_dt?: InputMaybe<SortDirection>;
  end_dt?: InputMaybe<SortDirection>;
};

export type EducationInfoUpdateInput = {
  degree?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EducationInfoWhere = {
  degree?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  degree_NOT?: InputMaybe<Scalars["String"]["input"]>;
  degree_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  degree_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  degree_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  degree_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  degree_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  degree_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  degree_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  degree_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  start_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  end_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<EducationInfoWhere>>;
  AND?: InputMaybe<Array<EducationInfoWhere>>;
  NOT?: InputMaybe<EducationInfoWhere>;
};

export type EmploymentInfoAggregationWhereInput = {
  AND?: InputMaybe<Array<EmploymentInfoAggregationWhereInput>>;
  OR?: InputMaybe<Array<EmploymentInfoAggregationWhereInput>>;
  NOT?: InputMaybe<EmploymentInfoAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  position_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  position_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  position_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  position_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  position_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  position_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  position_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  position_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  position_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  position_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  position_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  position_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  position_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  position_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  position_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  position_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  position_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  position_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  position_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  position_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  position_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type EmploymentInfoCreateInput = {
  position?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EmploymentInfoSort = {
  position?: InputMaybe<SortDirection>;
  start_dt?: InputMaybe<SortDirection>;
  end_dt?: InputMaybe<SortDirection>;
};

export type EmploymentInfoUpdateInput = {
  position?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EmploymentInfoWhere = {
  position?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  position_NOT?: InputMaybe<Scalars["String"]["input"]>;
  position_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  position_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  position_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  position_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  position_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  position_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  position_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  position_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  start_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  end_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<EmploymentInfoWhere>>;
  AND?: InputMaybe<Array<EmploymentInfoWhere>>;
  NOT?: InputMaybe<EmploymentInfoWhere>;
};

export type EntityWhere = {
  Organization?: InputMaybe<OrganizationWhere>;
  Person?: InputMaybe<PersonWhere>;
};

export type GraphNodeOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more GraphNodeSort objects to sort GraphNodes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<GraphNodeSort>>>;
};

/** Fields to sort GraphNodes by. The order in which sorts are applied is not guaranteed when specifying many fields in one GraphNodeSort object. */
export type GraphNodeSort = {
  id?: InputMaybe<SortDirection>;
};

export type GraphNodeWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  OR?: InputMaybe<Array<GraphNodeWhere>>;
  AND?: InputMaybe<Array<GraphNodeWhere>>;
  NOT?: InputMaybe<GraphNodeWhere>;
  typename_IN?: InputMaybe<Array<GraphNodeImplementation>>;
};

export type InvestmentInfoCreateInput = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  start_dt?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt?: InputMaybe<Scalars["Int"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
};

export type InvestmentInfoSort = {
  amount?: InputMaybe<SortDirection>;
  start_dt?: InputMaybe<SortDirection>;
  end_dt?: InputMaybe<SortDirection>;
  notes?: InputMaybe<SortDirection>;
};

export type InvestmentInfoUpdateInput = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  amount_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  amount_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  amount_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  amount_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  start_dt?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
};

export type InvestmentInfoWhere = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  amount_NOT?: InputMaybe<Scalars["Float"]["input"]>;
  amount_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  amount_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  amount_LT?: InputMaybe<Scalars["Float"]["input"]>;
  amount_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  amount_GT?: InputMaybe<Scalars["Float"]["input"]>;
  amount_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  start_dt?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  start_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  start_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  end_dt_LT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_GT?: InputMaybe<Scalars["Int"]["input"]>;
  end_dt_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  notes_NOT?: InputMaybe<Scalars["String"]["input"]>;
  notes_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  notes_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  notes_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  notes_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  notes_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  notes_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  notes_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  notes_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<InvestmentInfoWhere>>;
  AND?: InputMaybe<Array<InvestmentInfoWhere>>;
  NOT?: InputMaybe<InvestmentInfoWhere>;
};

export type MediaChannelAdvertisersAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MediaChannelAdvertisersAggregateInput>>;
  OR?: InputMaybe<Array<MediaChannelAdvertisersAggregateInput>>;
  NOT?: InputMaybe<MediaChannelAdvertisersAggregateInput>;
  node?: InputMaybe<MediaChannelAdvertisersNodeAggregationWhereInput>;
  edge?: InputMaybe<AdvertisingInfoAggregationWhereInput>;
};

export type MediaChannelAdvertisersConnectFieldInput = {
  edge?: InputMaybe<AdvertisingInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type MediaChannelAdvertisersConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
  edge?: InputMaybe<AdvertisingInfoSort>;
};

export type MediaChannelAdvertisersConnectionWhere = {
  AND?: InputMaybe<Array<MediaChannelAdvertisersConnectionWhere>>;
  OR?: InputMaybe<Array<MediaChannelAdvertisersConnectionWhere>>;
  NOT?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<AdvertisingInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<AdvertisingInfoWhere>;
};

export type MediaChannelAdvertisersConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: MediaChannelAdvertisersConnectOrCreateFieldInputOnCreate;
};

export type MediaChannelAdvertisersConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
  edge?: InputMaybe<AdvertisingInfoCreateInput>;
};

export type MediaChannelAdvertisersCreateFieldInput = {
  edge?: InputMaybe<AdvertisingInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type MediaChannelAdvertisersDeleteFieldInput = {
  where?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type MediaChannelAdvertisersDisconnectFieldInput = {
  where?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type MediaChannelAdvertisersFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<MediaChannelAdvertisersConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelAdvertisersConnectFieldInput>>;
  create?: InputMaybe<Array<MediaChannelAdvertisersCreateFieldInput>>;
};

export type MediaChannelAdvertisersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MediaChannelAdvertisersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MediaChannelAdvertisersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MediaChannelAdvertisersNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MediaChannelAdvertisersUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<AdvertisingInfoUpdateInput>;
};

export type MediaChannelAdvertisersUpdateFieldInput = {
  where?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<MediaChannelAdvertisersConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelAdvertisersConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MediaChannelAdvertisersDisconnectFieldInput>>;
  create?: InputMaybe<Array<MediaChannelAdvertisersCreateFieldInput>>;
  update?: InputMaybe<MediaChannelAdvertisersUpdateConnectionInput>;
  delete?: InputMaybe<Array<MediaChannelAdvertisersDeleteFieldInput>>;
};

export type MediaChannelConnectInput = {
  owners?: InputMaybe<MediaChannelOwnersConnectInput>;
  advertisers?: InputMaybe<Array<MediaChannelAdvertisersConnectFieldInput>>;
  users?: InputMaybe<Array<MediaChannelUsersConnectFieldInput>>;
  employees?: InputMaybe<Array<MediaChannelEmployeesConnectFieldInput>>;
};

export type MediaChannelConnectOrCreateInput = {
  owners?: InputMaybe<MediaChannelOwnersConnectOrCreateInput>;
  advertisers?: InputMaybe<
    Array<MediaChannelAdvertisersConnectOrCreateFieldInput>
  >;
  users?: InputMaybe<Array<MediaChannelUsersConnectOrCreateFieldInput>>;
  employees?: InputMaybe<Array<MediaChannelEmployeesConnectOrCreateFieldInput>>;
};

export type MediaChannelConnectOrCreateWhere = {
  node: MediaChannelUniqueWhere;
};

export type MediaChannelConnectWhere = {
  node: MediaChannelWhere;
};

export type MediaChannelCreateInput = {
  name: Scalars["String"]["input"];
  category?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
  exchange?: InputMaybe<Scalars["String"]["input"]>;
  owners?: InputMaybe<MediaChannelOwnersCreateInput>;
  advertisers?: InputMaybe<MediaChannelAdvertisersFieldInput>;
  users?: InputMaybe<MediaChannelUsersFieldInput>;
  employees?: InputMaybe<MediaChannelEmployeesFieldInput>;
};

export type MediaChannelDeleteInput = {
  owners?: InputMaybe<MediaChannelOwnersDeleteInput>;
  advertisers?: InputMaybe<Array<MediaChannelAdvertisersDeleteFieldInput>>;
  users?: InputMaybe<Array<MediaChannelUsersDeleteFieldInput>>;
  employees?: InputMaybe<Array<MediaChannelEmployeesDeleteFieldInput>>;
};

export type MediaChannelDisconnectInput = {
  owners?: InputMaybe<MediaChannelOwnersDisconnectInput>;
  advertisers?: InputMaybe<Array<MediaChannelAdvertisersDisconnectFieldInput>>;
  users?: InputMaybe<Array<MediaChannelUsersDisconnectFieldInput>>;
  employees?: InputMaybe<Array<MediaChannelEmployeesDisconnectFieldInput>>;
};

export type MediaChannelEmployeesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MediaChannelEmployeesAggregateInput>>;
  OR?: InputMaybe<Array<MediaChannelEmployeesAggregateInput>>;
  NOT?: InputMaybe<MediaChannelEmployeesAggregateInput>;
  node?: InputMaybe<MediaChannelEmployeesNodeAggregationWhereInput>;
  edge?: InputMaybe<EmploymentInfoAggregationWhereInput>;
};

export type MediaChannelEmployeesConnectFieldInput = {
  edge?: InputMaybe<EmploymentInfoCreateInput>;
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type MediaChannelEmployeesConnectionSort = {
  node?: InputMaybe<PersonSort>;
  edge?: InputMaybe<EmploymentInfoSort>;
};

export type MediaChannelEmployeesConnectionWhere = {
  AND?: InputMaybe<Array<MediaChannelEmployeesConnectionWhere>>;
  OR?: InputMaybe<Array<MediaChannelEmployeesConnectionWhere>>;
  NOT?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
  edge?: InputMaybe<EmploymentInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<EmploymentInfoWhere>;
};

export type MediaChannelEmployeesConnectOrCreateFieldInput = {
  where: PersonConnectOrCreateWhere;
  onCreate: MediaChannelEmployeesConnectOrCreateFieldInputOnCreate;
};

export type MediaChannelEmployeesConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
  edge?: InputMaybe<EmploymentInfoCreateInput>;
};

export type MediaChannelEmployeesCreateFieldInput = {
  edge?: InputMaybe<EmploymentInfoCreateInput>;
  node: PersonCreateInput;
};

export type MediaChannelEmployeesDeleteFieldInput = {
  where?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MediaChannelEmployeesDisconnectFieldInput = {
  where?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type MediaChannelEmployeesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<MediaChannelEmployeesConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelEmployeesConnectFieldInput>>;
  create?: InputMaybe<Array<MediaChannelEmployeesCreateFieldInput>>;
};

export type MediaChannelEmployeesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MediaChannelEmployeesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MediaChannelEmployeesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MediaChannelEmployeesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MediaChannelEmployeesUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<EmploymentInfoUpdateInput>;
};

export type MediaChannelEmployeesUpdateFieldInput = {
  where?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<MediaChannelEmployeesConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelEmployeesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MediaChannelEmployeesDisconnectFieldInput>>;
  create?: InputMaybe<Array<MediaChannelEmployeesCreateFieldInput>>;
  update?: InputMaybe<MediaChannelEmployeesUpdateConnectionInput>;
  delete?: InputMaybe<Array<MediaChannelEmployeesDeleteFieldInput>>;
};

export type MediaChannelOnCreateInput = {
  name: Scalars["String"]["input"];
  category?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
  exchange?: InputMaybe<Scalars["String"]["input"]>;
};

export type MediaChannelOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more MediaChannelSort objects to sort MediaChannels by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MediaChannelSort>>;
};

export type MediaChannelOwnersConnectInput = {
  Organization?: InputMaybe<
    Array<MediaChannelOwnersOrganizationConnectFieldInput>
  >;
  Person?: InputMaybe<Array<MediaChannelOwnersPersonConnectFieldInput>>;
};

export type MediaChannelOwnersConnectionSort = {
  edge?: InputMaybe<OwnershipInfoSort>;
};

export type MediaChannelOwnersConnectionWhere = {
  Organization?: InputMaybe<MediaChannelOwnersOrganizationConnectionWhere>;
  Person?: InputMaybe<MediaChannelOwnersPersonConnectionWhere>;
};

export type MediaChannelOwnersConnectOrCreateInput = {
  Organization?: InputMaybe<
    Array<MediaChannelOwnersOrganizationConnectOrCreateFieldInput>
  >;
  Person?: InputMaybe<Array<MediaChannelOwnersPersonConnectOrCreateFieldInput>>;
};

export type MediaChannelOwnersCreateFieldInput = {
  Organization?: InputMaybe<
    Array<MediaChannelOwnersOrganizationCreateFieldInput>
  >;
  Person?: InputMaybe<Array<MediaChannelOwnersPersonCreateFieldInput>>;
};

export type MediaChannelOwnersCreateInput = {
  Organization?: InputMaybe<MediaChannelOwnersOrganizationFieldInput>;
  Person?: InputMaybe<MediaChannelOwnersPersonFieldInput>;
};

export type MediaChannelOwnersDeleteInput = {
  Organization?: InputMaybe<
    Array<MediaChannelOwnersOrganizationDeleteFieldInput>
  >;
  Person?: InputMaybe<Array<MediaChannelOwnersPersonDeleteFieldInput>>;
};

export type MediaChannelOwnersDisconnectInput = {
  Organization?: InputMaybe<
    Array<MediaChannelOwnersOrganizationDisconnectFieldInput>
  >;
  Person?: InputMaybe<Array<MediaChannelOwnersPersonDisconnectFieldInput>>;
};

export type MediaChannelOwnersOrganizationConnectFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type MediaChannelOwnersOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<MediaChannelOwnersOrganizationConnectionWhere>>;
  OR?: InputMaybe<Array<MediaChannelOwnersOrganizationConnectionWhere>>;
  NOT?: InputMaybe<MediaChannelOwnersOrganizationConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<OwnershipInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<OwnershipInfoWhere>;
};

export type MediaChannelOwnersOrganizationConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: MediaChannelOwnersOrganizationConnectOrCreateFieldInputOnCreate;
};

export type MediaChannelOwnersOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
  edge?: InputMaybe<OwnershipInfoCreateInput>;
};

export type MediaChannelOwnersOrganizationCreateFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type MediaChannelOwnersOrganizationDeleteFieldInput = {
  where?: InputMaybe<MediaChannelOwnersOrganizationConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type MediaChannelOwnersOrganizationDisconnectFieldInput = {
  where?: InputMaybe<MediaChannelOwnersOrganizationConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type MediaChannelOwnersOrganizationFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<MediaChannelOwnersOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelOwnersOrganizationConnectFieldInput>>;
  create?: InputMaybe<Array<MediaChannelOwnersOrganizationCreateFieldInput>>;
};

export type MediaChannelOwnersOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<OwnershipInfoUpdateInput>;
};

export type MediaChannelOwnersOrganizationUpdateFieldInput = {
  where?: InputMaybe<MediaChannelOwnersOrganizationConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<MediaChannelOwnersOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelOwnersOrganizationConnectFieldInput>>;
  disconnect?: InputMaybe<
    Array<MediaChannelOwnersOrganizationDisconnectFieldInput>
  >;
  create?: InputMaybe<Array<MediaChannelOwnersOrganizationCreateFieldInput>>;
  update?: InputMaybe<MediaChannelOwnersOrganizationUpdateConnectionInput>;
  delete?: InputMaybe<Array<MediaChannelOwnersOrganizationDeleteFieldInput>>;
};

export type MediaChannelOwnersPersonConnectFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  where?: InputMaybe<PersonConnectWhere>;
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type MediaChannelOwnersPersonConnectionWhere = {
  AND?: InputMaybe<Array<MediaChannelOwnersPersonConnectionWhere>>;
  OR?: InputMaybe<Array<MediaChannelOwnersPersonConnectionWhere>>;
  NOT?: InputMaybe<MediaChannelOwnersPersonConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
  edge?: InputMaybe<OwnershipInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<OwnershipInfoWhere>;
};

export type MediaChannelOwnersPersonConnectOrCreateFieldInput = {
  where: PersonConnectOrCreateWhere;
  onCreate: MediaChannelOwnersPersonConnectOrCreateFieldInputOnCreate;
};

export type MediaChannelOwnersPersonConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
  edge?: InputMaybe<OwnershipInfoCreateInput>;
};

export type MediaChannelOwnersPersonCreateFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  node: PersonCreateInput;
};

export type MediaChannelOwnersPersonDeleteFieldInput = {
  where?: InputMaybe<MediaChannelOwnersPersonConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type MediaChannelOwnersPersonDisconnectFieldInput = {
  where?: InputMaybe<MediaChannelOwnersPersonConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type MediaChannelOwnersPersonFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<MediaChannelOwnersPersonConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelOwnersPersonConnectFieldInput>>;
  create?: InputMaybe<Array<MediaChannelOwnersPersonCreateFieldInput>>;
};

export type MediaChannelOwnersPersonUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<OwnershipInfoUpdateInput>;
};

export type MediaChannelOwnersPersonUpdateFieldInput = {
  where?: InputMaybe<MediaChannelOwnersPersonConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<MediaChannelOwnersPersonConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelOwnersPersonConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MediaChannelOwnersPersonDisconnectFieldInput>>;
  create?: InputMaybe<Array<MediaChannelOwnersPersonCreateFieldInput>>;
  update?: InputMaybe<MediaChannelOwnersPersonUpdateConnectionInput>;
  delete?: InputMaybe<Array<MediaChannelOwnersPersonDeleteFieldInput>>;
};

export type MediaChannelOwnersUpdateInput = {
  Organization?: InputMaybe<
    Array<MediaChannelOwnersOrganizationUpdateFieldInput>
  >;
  Person?: InputMaybe<Array<MediaChannelOwnersPersonUpdateFieldInput>>;
};

export type MediaChannelRelationInput = {
  owners?: InputMaybe<MediaChannelOwnersCreateFieldInput>;
  advertisers?: InputMaybe<Array<MediaChannelAdvertisersCreateFieldInput>>;
  users?: InputMaybe<Array<MediaChannelUsersCreateFieldInput>>;
  employees?: InputMaybe<Array<MediaChannelEmployeesCreateFieldInput>>;
};

/** Fields to sort MediaChannels by. The order in which sorts are applied is not guaranteed when specifying many fields in one MediaChannelSort object. */
export type MediaChannelSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  category?: InputMaybe<SortDirection>;
  wiki_tag?: InputMaybe<SortDirection>;
  ticker_symbol?: InputMaybe<SortDirection>;
  exchange?: InputMaybe<SortDirection>;
};

export type MediaChannelUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
};

export type MediaChannelUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
  exchange?: InputMaybe<Scalars["String"]["input"]>;
  owners?: InputMaybe<MediaChannelOwnersUpdateInput>;
  advertisers?: InputMaybe<Array<MediaChannelAdvertisersUpdateFieldInput>>;
  users?: InputMaybe<Array<MediaChannelUsersUpdateFieldInput>>;
  employees?: InputMaybe<Array<MediaChannelEmployeesUpdateFieldInput>>;
};

export type MediaChannelUsersAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MediaChannelUsersAggregateInput>>;
  OR?: InputMaybe<Array<MediaChannelUsersAggregateInput>>;
  NOT?: InputMaybe<MediaChannelUsersAggregateInput>;
  node?: InputMaybe<MediaChannelUsersNodeAggregationWhereInput>;
  edge?: InputMaybe<UserInfoAggregationWhereInput>;
};

export type MediaChannelUsersConnectFieldInput = {
  edge?: InputMaybe<UserInfoCreateInput>;
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type MediaChannelUsersConnectionSort = {
  node?: InputMaybe<UserSort>;
  edge?: InputMaybe<UserInfoSort>;
};

export type MediaChannelUsersConnectionWhere = {
  AND?: InputMaybe<Array<MediaChannelUsersConnectionWhere>>;
  OR?: InputMaybe<Array<MediaChannelUsersConnectionWhere>>;
  NOT?: InputMaybe<MediaChannelUsersConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
  edge?: InputMaybe<UserInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<UserInfoWhere>;
};

export type MediaChannelUsersConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: MediaChannelUsersConnectOrCreateFieldInputOnCreate;
};

export type MediaChannelUsersConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
  edge?: InputMaybe<UserInfoCreateInput>;
};

export type MediaChannelUsersCreateFieldInput = {
  edge?: InputMaybe<UserInfoCreateInput>;
  node: UserCreateInput;
};

export type MediaChannelUsersDeleteFieldInput = {
  where?: InputMaybe<MediaChannelUsersConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MediaChannelUsersDisconnectFieldInput = {
  where?: InputMaybe<MediaChannelUsersConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type MediaChannelUsersFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<MediaChannelUsersConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelUsersConnectFieldInput>>;
  create?: InputMaybe<Array<MediaChannelUsersCreateFieldInput>>;
};

export type MediaChannelUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MediaChannelUsersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MediaChannelUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MediaChannelUsersNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MediaChannelUsersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
  edge?: InputMaybe<UserInfoUpdateInput>;
};

export type MediaChannelUsersUpdateFieldInput = {
  where?: InputMaybe<MediaChannelUsersConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<MediaChannelUsersConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<MediaChannelUsersConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MediaChannelUsersDisconnectFieldInput>>;
  create?: InputMaybe<Array<MediaChannelUsersCreateFieldInput>>;
  update?: InputMaybe<MediaChannelUsersUpdateConnectionInput>;
  delete?: InputMaybe<Array<MediaChannelUsersDeleteFieldInput>>;
};

export type MediaChannelWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT?: InputMaybe<Scalars["String"]["input"]>;
  category_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  category_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  category_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  category_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  wiki_tag_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  ticker_symbol_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  exchange?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT?: InputMaybe<Scalars["String"]["input"]>;
  exchange_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  exchange_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  exchange_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  exchange_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<MediaChannelWhere>>;
  AND?: InputMaybe<Array<MediaChannelWhere>>;
  NOT?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Use `owners_SOME` instead. */
  owners?: InputMaybe<EntityWhere>;
  /** @deprecated Use `owners_NONE` instead. */
  owners_NOT?: InputMaybe<EntityWhere>;
  /** Return MediaChannels where all of the related Entities match this filter */
  owners_ALL?: InputMaybe<EntityWhere>;
  /** Return MediaChannels where none of the related Entities match this filter */
  owners_NONE?: InputMaybe<EntityWhere>;
  /** Return MediaChannels where one of the related Entities match this filter */
  owners_SINGLE?: InputMaybe<EntityWhere>;
  /** Return MediaChannels where some of the related Entities match this filter */
  owners_SOME?: InputMaybe<EntityWhere>;
  /** @deprecated Use `ownersConnection_SOME` instead. */
  ownersConnection?: InputMaybe<MediaChannelOwnersConnectionWhere>;
  /** @deprecated Use `ownersConnection_NONE` instead. */
  ownersConnection_NOT?: InputMaybe<MediaChannelOwnersConnectionWhere>;
  /** Return MediaChannels where all of the related MediaChannelOwnersConnections match this filter */
  ownersConnection_ALL?: InputMaybe<MediaChannelOwnersConnectionWhere>;
  /** Return MediaChannels where none of the related MediaChannelOwnersConnections match this filter */
  ownersConnection_NONE?: InputMaybe<MediaChannelOwnersConnectionWhere>;
  /** Return MediaChannels where one of the related MediaChannelOwnersConnections match this filter */
  ownersConnection_SINGLE?: InputMaybe<MediaChannelOwnersConnectionWhere>;
  /** Return MediaChannels where some of the related MediaChannelOwnersConnections match this filter */
  ownersConnection_SOME?: InputMaybe<MediaChannelOwnersConnectionWhere>;
  /** @deprecated Use `advertisers_SOME` instead. */
  advertisers?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `advertisers_NONE` instead. */
  advertisers_NOT?: InputMaybe<OrganizationWhere>;
  /** Return MediaChannels where all of the related Organizations match this filter */
  advertisers_ALL?: InputMaybe<OrganizationWhere>;
  /** Return MediaChannels where none of the related Organizations match this filter */
  advertisers_NONE?: InputMaybe<OrganizationWhere>;
  /** Return MediaChannels where one of the related Organizations match this filter */
  advertisers_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return MediaChannels where some of the related Organizations match this filter */
  advertisers_SOME?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `advertisersConnection_SOME` instead. */
  advertisersConnection?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  /** @deprecated Use `advertisersConnection_NONE` instead. */
  advertisersConnection_NOT?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  /** Return MediaChannels where all of the related MediaChannelAdvertisersConnections match this filter */
  advertisersConnection_ALL?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  /** Return MediaChannels where none of the related MediaChannelAdvertisersConnections match this filter */
  advertisersConnection_NONE?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  /** Return MediaChannels where one of the related MediaChannelAdvertisersConnections match this filter */
  advertisersConnection_SINGLE?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  /** Return MediaChannels where some of the related MediaChannelAdvertisersConnections match this filter */
  advertisersConnection_SOME?: InputMaybe<MediaChannelAdvertisersConnectionWhere>;
  advertisersAggregate?: InputMaybe<MediaChannelAdvertisersAggregateInput>;
  /** @deprecated Use `users_SOME` instead. */
  users?: InputMaybe<UserWhere>;
  /** @deprecated Use `users_NONE` instead. */
  users_NOT?: InputMaybe<UserWhere>;
  /** Return MediaChannels where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return MediaChannels where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return MediaChannels where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return MediaChannels where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `usersConnection_SOME` instead. */
  usersConnection?: InputMaybe<MediaChannelUsersConnectionWhere>;
  /** @deprecated Use `usersConnection_NONE` instead. */
  usersConnection_NOT?: InputMaybe<MediaChannelUsersConnectionWhere>;
  /** Return MediaChannels where all of the related MediaChannelUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<MediaChannelUsersConnectionWhere>;
  /** Return MediaChannels where none of the related MediaChannelUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<MediaChannelUsersConnectionWhere>;
  /** Return MediaChannels where one of the related MediaChannelUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<MediaChannelUsersConnectionWhere>;
  /** Return MediaChannels where some of the related MediaChannelUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<MediaChannelUsersConnectionWhere>;
  usersAggregate?: InputMaybe<MediaChannelUsersAggregateInput>;
  /** @deprecated Use `employees_SOME` instead. */
  employees?: InputMaybe<PersonWhere>;
  /** @deprecated Use `employees_NONE` instead. */
  employees_NOT?: InputMaybe<PersonWhere>;
  /** Return MediaChannels where all of the related People match this filter */
  employees_ALL?: InputMaybe<PersonWhere>;
  /** Return MediaChannels where none of the related People match this filter */
  employees_NONE?: InputMaybe<PersonWhere>;
  /** Return MediaChannels where one of the related People match this filter */
  employees_SINGLE?: InputMaybe<PersonWhere>;
  /** Return MediaChannels where some of the related People match this filter */
  employees_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `employeesConnection_SOME` instead. */
  employeesConnection?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  /** @deprecated Use `employeesConnection_NONE` instead. */
  employeesConnection_NOT?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  /** Return MediaChannels where all of the related MediaChannelEmployeesConnections match this filter */
  employeesConnection_ALL?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  /** Return MediaChannels where none of the related MediaChannelEmployeesConnections match this filter */
  employeesConnection_NONE?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  /** Return MediaChannels where one of the related MediaChannelEmployeesConnections match this filter */
  employeesConnection_SINGLE?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  /** Return MediaChannels where some of the related MediaChannelEmployeesConnections match this filter */
  employeesConnection_SOME?: InputMaybe<MediaChannelEmployeesConnectionWhere>;
  employeesAggregate?: InputMaybe<MediaChannelEmployeesAggregateInput>;
};

export type MembershipInfoAggregationWhereInput = {
  AND?: InputMaybe<Array<MembershipInfoAggregationWhereInput>>;
  OR?: InputMaybe<Array<MembershipInfoAggregationWhereInput>>;
  NOT?: InputMaybe<MembershipInfoAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MembershipInfoCreateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["Date"]["input"]>;
  end_dt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type MembershipInfoSort = {
  details?: InputMaybe<SortDirection>;
  start_dt?: InputMaybe<SortDirection>;
  end_dt?: InputMaybe<SortDirection>;
};

export type MembershipInfoUpdateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["Date"]["input"]>;
  end_dt?: InputMaybe<Scalars["Date"]["input"]>;
};

export type MembershipInfoWhere = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT?: InputMaybe<Scalars["String"]["input"]>;
  details_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  details_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  details_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  details_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["Date"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT?: InputMaybe<Scalars["Date"]["input"]>;
  start_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  start_dt_LT?: InputMaybe<Scalars["Date"]["input"]>;
  start_dt_LTE?: InputMaybe<Scalars["Date"]["input"]>;
  start_dt_GT?: InputMaybe<Scalars["Date"]["input"]>;
  start_dt_GTE?: InputMaybe<Scalars["Date"]["input"]>;
  end_dt?: InputMaybe<Scalars["Date"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT?: InputMaybe<Scalars["Date"]["input"]>;
  end_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  end_dt_LT?: InputMaybe<Scalars["Date"]["input"]>;
  end_dt_LTE?: InputMaybe<Scalars["Date"]["input"]>;
  end_dt_GT?: InputMaybe<Scalars["Date"]["input"]>;
  end_dt_GTE?: InputMaybe<Scalars["Date"]["input"]>;
  OR?: InputMaybe<Array<MembershipInfoWhere>>;
  AND?: InputMaybe<Array<MembershipInfoWhere>>;
  NOT?: InputMaybe<MembershipInfoWhere>;
};

export type MentionInfoCreateInput = {
  sentiment?: InputMaybe<Scalars["String"]["input"]>;
  snippets?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MentionInfoSort = {
  sentiment?: InputMaybe<SortDirection>;
  snippets?: InputMaybe<SortDirection>;
  weight?: InputMaybe<SortDirection>;
};

export type MentionInfoUpdateInput = {
  sentiment?: InputMaybe<Scalars["String"]["input"]>;
  snippets?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  snippets_POP?: InputMaybe<Scalars["Int"]["input"]>;
  snippets_PUSH?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
  weight_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  weight_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MentionInfoWhere = {
  sentiment?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sentiment_NOT?: InputMaybe<Scalars["String"]["input"]>;
  sentiment_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sentiment_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sentiment_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sentiment_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sentiment_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sentiment_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sentiment_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sentiment_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  snippets?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  snippets_NOT?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  snippets_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  snippets_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weight_NOT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weight_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  weight_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  OR?: InputMaybe<Array<MentionInfoWhere>>;
  AND?: InputMaybe<Array<MentionInfoWhere>>;
  NOT?: InputMaybe<MentionInfoWhere>;
};

export type OrganizationConnectInput = {
  subsidiary_of?: InputMaybe<Array<OrganizationSubsidiary_OfConnectFieldInput>>;
  subsidiaries?: InputMaybe<OrganizationSubsidiariesConnectInput>;
  employees?: InputMaybe<Array<OrganizationEmployeesConnectFieldInput>>;
  investors?: InputMaybe<OrganizationInvestorsConnectInput>;
  investments?: InputMaybe<OrganizationInvestmentsConnectInput>;
};

export type OrganizationConnectOrCreateInput = {
  subsidiary_of?: InputMaybe<
    Array<OrganizationSubsidiary_OfConnectOrCreateFieldInput>
  >;
  subsidiaries?: InputMaybe<OrganizationSubsidiariesConnectOrCreateInput>;
  employees?: InputMaybe<Array<OrganizationEmployeesConnectOrCreateFieldInput>>;
  investors?: InputMaybe<OrganizationInvestorsConnectOrCreateInput>;
  investments?: InputMaybe<OrganizationInvestmentsConnectOrCreateInput>;
};

export type OrganizationConnectOrCreateWhere = {
  node: OrganizationUniqueWhere;
};

export type OrganizationConnectWhere = {
  node: OrganizationWhere;
};

export type OrganizationCreateInput = {
  name: Scalars["String"]["input"];
  category: Scalars["String"]["input"];
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
  exchange?: InputMaybe<Scalars["String"]["input"]>;
  subsidiary_of?: InputMaybe<OrganizationSubsidiary_OfFieldInput>;
  subsidiaries?: InputMaybe<OrganizationSubsidiariesCreateInput>;
  employees?: InputMaybe<OrganizationEmployeesFieldInput>;
  investors?: InputMaybe<OrganizationInvestorsCreateInput>;
  investments?: InputMaybe<OrganizationInvestmentsCreateInput>;
};

export type OrganizationDeleteInput = {
  subsidiary_of?: InputMaybe<Array<OrganizationSubsidiary_OfDeleteFieldInput>>;
  subsidiaries?: InputMaybe<OrganizationSubsidiariesDeleteInput>;
  employees?: InputMaybe<Array<OrganizationEmployeesDeleteFieldInput>>;
  investors?: InputMaybe<OrganizationInvestorsDeleteInput>;
  investments?: InputMaybe<OrganizationInvestmentsDeleteInput>;
};

export type OrganizationDisconnectInput = {
  subsidiary_of?: InputMaybe<
    Array<OrganizationSubsidiary_OfDisconnectFieldInput>
  >;
  subsidiaries?: InputMaybe<OrganizationSubsidiariesDisconnectInput>;
  employees?: InputMaybe<Array<OrganizationEmployeesDisconnectFieldInput>>;
  investors?: InputMaybe<OrganizationInvestorsDisconnectInput>;
  investments?: InputMaybe<OrganizationInvestmentsDisconnectInput>;
};

export type OrganizationEmployeesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<OrganizationEmployeesAggregateInput>>;
  OR?: InputMaybe<Array<OrganizationEmployeesAggregateInput>>;
  NOT?: InputMaybe<OrganizationEmployeesAggregateInput>;
  node?: InputMaybe<OrganizationEmployeesNodeAggregationWhereInput>;
  edge?: InputMaybe<EmploymentInfoAggregationWhereInput>;
};

export type OrganizationEmployeesConnectFieldInput = {
  edge?: InputMaybe<EmploymentInfoCreateInput>;
  where?: InputMaybe<PersonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type OrganizationEmployeesConnectionSort = {
  node?: InputMaybe<PersonSort>;
  edge?: InputMaybe<EmploymentInfoSort>;
};

export type OrganizationEmployeesConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationEmployeesConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationEmployeesConnectionWhere>>;
  NOT?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
  edge?: InputMaybe<EmploymentInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<EmploymentInfoWhere>;
};

export type OrganizationEmployeesConnectOrCreateFieldInput = {
  where: PersonConnectOrCreateWhere;
  onCreate: OrganizationEmployeesConnectOrCreateFieldInputOnCreate;
};

export type OrganizationEmployeesConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
  edge?: InputMaybe<EmploymentInfoCreateInput>;
};

export type OrganizationEmployeesCreateFieldInput = {
  edge?: InputMaybe<EmploymentInfoCreateInput>;
  node: PersonCreateInput;
};

export type OrganizationEmployeesDeleteFieldInput = {
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type OrganizationEmployeesDisconnectFieldInput = {
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type OrganizationEmployeesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<OrganizationEmployeesConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<OrganizationEmployeesConnectFieldInput>>;
  create?: InputMaybe<Array<OrganizationEmployeesCreateFieldInput>>;
};

export type OrganizationEmployeesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationEmployeesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationEmployeesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationEmployeesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bio_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bio_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  bio_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  bio_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  byline_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  byline_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  byline_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  byline_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrganizationEmployeesUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<EmploymentInfoUpdateInput>;
};

export type OrganizationEmployeesUpdateFieldInput = {
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<OrganizationEmployeesConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<OrganizationEmployeesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationEmployeesDisconnectFieldInput>>;
  create?: InputMaybe<Array<OrganizationEmployeesCreateFieldInput>>;
  update?: InputMaybe<OrganizationEmployeesUpdateConnectionInput>;
  delete?: InputMaybe<Array<OrganizationEmployeesDeleteFieldInput>>;
};

export type OrganizationInvestmentsConnectInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationConnectFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelConnectFieldInput>
  >;
};

export type OrganizationInvestmentsConnectionSort = {
  edge?: InputMaybe<InvestmentInfoSort>;
};

export type OrganizationInvestmentsConnectionWhere = {
  Organization?: InputMaybe<OrganizationInvestmentsOrganizationConnectionWhere>;
  MediaChannel?: InputMaybe<OrganizationInvestmentsMediaChannelConnectionWhere>;
};

export type OrganizationInvestmentsConnectOrCreateInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationConnectOrCreateFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelConnectOrCreateFieldInput>
  >;
};

export type OrganizationInvestmentsCreateFieldInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationCreateFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelCreateFieldInput>
  >;
};

export type OrganizationInvestmentsCreateInput = {
  Organization?: InputMaybe<OrganizationInvestmentsOrganizationFieldInput>;
  MediaChannel?: InputMaybe<OrganizationInvestmentsMediaChannelFieldInput>;
};

export type OrganizationInvestmentsDeleteInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationDeleteFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelDeleteFieldInput>
  >;
};

export type OrganizationInvestmentsDisconnectInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationDisconnectFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelDisconnectFieldInput>
  >;
};

export type OrganizationInvestmentsMediaChannelConnectFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  where?: InputMaybe<MediaChannelConnectWhere>;
  connect?: InputMaybe<Array<MediaChannelConnectInput>>;
};

export type OrganizationInvestmentsMediaChannelConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationInvestmentsMediaChannelConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationInvestmentsMediaChannelConnectionWhere>>;
  NOT?: InputMaybe<OrganizationInvestmentsMediaChannelConnectionWhere>;
  node?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MediaChannelWhere>;
  edge?: InputMaybe<InvestmentInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InvestmentInfoWhere>;
};

export type OrganizationInvestmentsMediaChannelConnectOrCreateFieldInput = {
  where: MediaChannelConnectOrCreateWhere;
  onCreate: OrganizationInvestmentsMediaChannelConnectOrCreateFieldInputOnCreate;
};

export type OrganizationInvestmentsMediaChannelConnectOrCreateFieldInputOnCreate =
  {
    node: MediaChannelOnCreateInput;
    edge?: InputMaybe<InvestmentInfoCreateInput>;
  };

export type OrganizationInvestmentsMediaChannelCreateFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  node: MediaChannelCreateInput;
};

export type OrganizationInvestmentsMediaChannelDeleteFieldInput = {
  where?: InputMaybe<OrganizationInvestmentsMediaChannelConnectionWhere>;
  delete?: InputMaybe<MediaChannelDeleteInput>;
};

export type OrganizationInvestmentsMediaChannelDisconnectFieldInput = {
  where?: InputMaybe<OrganizationInvestmentsMediaChannelConnectionWhere>;
  disconnect?: InputMaybe<MediaChannelDisconnectInput>;
};

export type OrganizationInvestmentsMediaChannelFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelCreateFieldInput>
  >;
};

export type OrganizationInvestmentsMediaChannelUpdateConnectionInput = {
  node?: InputMaybe<MediaChannelUpdateInput>;
  edge?: InputMaybe<InvestmentInfoUpdateInput>;
};

export type OrganizationInvestmentsMediaChannelUpdateFieldInput = {
  where?: InputMaybe<OrganizationInvestmentsMediaChannelConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelConnectFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelDisconnectFieldInput>
  >;
  create?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelCreateFieldInput>
  >;
  update?: InputMaybe<OrganizationInvestmentsMediaChannelUpdateConnectionInput>;
  delete?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelDeleteFieldInput>
  >;
};

export type OrganizationInvestmentsOrganizationConnectFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type OrganizationInvestmentsOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationInvestmentsOrganizationConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationInvestmentsOrganizationConnectionWhere>>;
  NOT?: InputMaybe<OrganizationInvestmentsOrganizationConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<InvestmentInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InvestmentInfoWhere>;
};

export type OrganizationInvestmentsOrganizationConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: OrganizationInvestmentsOrganizationConnectOrCreateFieldInputOnCreate;
};

export type OrganizationInvestmentsOrganizationConnectOrCreateFieldInputOnCreate =
  {
    node: OrganizationOnCreateInput;
    edge?: InputMaybe<InvestmentInfoCreateInput>;
  };

export type OrganizationInvestmentsOrganizationCreateFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type OrganizationInvestmentsOrganizationDeleteFieldInput = {
  where?: InputMaybe<OrganizationInvestmentsOrganizationConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type OrganizationInvestmentsOrganizationDisconnectFieldInput = {
  where?: InputMaybe<OrganizationInvestmentsOrganizationConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type OrganizationInvestmentsOrganizationFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationCreateFieldInput>
  >;
};

export type OrganizationInvestmentsOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<InvestmentInfoUpdateInput>;
};

export type OrganizationInvestmentsOrganizationUpdateFieldInput = {
  where?: InputMaybe<OrganizationInvestmentsOrganizationConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationConnectFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationDisconnectFieldInput>
  >;
  create?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationCreateFieldInput>
  >;
  update?: InputMaybe<OrganizationInvestmentsOrganizationUpdateConnectionInput>;
  delete?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationDeleteFieldInput>
  >;
};

export type OrganizationInvestmentsUpdateInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestmentsOrganizationUpdateFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationInvestmentsMediaChannelUpdateFieldInput>
  >;
};

export type OrganizationInvestorsConnectInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestorsOrganizationConnectFieldInput>
  >;
  Person?: InputMaybe<Array<OrganizationInvestorsPersonConnectFieldInput>>;
};

export type OrganizationInvestorsConnectionSort = {
  edge?: InputMaybe<InvestmentInfoSort>;
};

export type OrganizationInvestorsConnectionWhere = {
  Organization?: InputMaybe<OrganizationInvestorsOrganizationConnectionWhere>;
  Person?: InputMaybe<OrganizationInvestorsPersonConnectionWhere>;
};

export type OrganizationInvestorsConnectOrCreateInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestorsOrganizationConnectOrCreateFieldInput>
  >;
  Person?: InputMaybe<
    Array<OrganizationInvestorsPersonConnectOrCreateFieldInput>
  >;
};

export type OrganizationInvestorsCreateFieldInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestorsOrganizationCreateFieldInput>
  >;
  Person?: InputMaybe<Array<OrganizationInvestorsPersonCreateFieldInput>>;
};

export type OrganizationInvestorsCreateInput = {
  Organization?: InputMaybe<OrganizationInvestorsOrganizationFieldInput>;
  Person?: InputMaybe<OrganizationInvestorsPersonFieldInput>;
};

export type OrganizationInvestorsDeleteInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestorsOrganizationDeleteFieldInput>
  >;
  Person?: InputMaybe<Array<OrganizationInvestorsPersonDeleteFieldInput>>;
};

export type OrganizationInvestorsDisconnectInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestorsOrganizationDisconnectFieldInput>
  >;
  Person?: InputMaybe<Array<OrganizationInvestorsPersonDisconnectFieldInput>>;
};

export type OrganizationInvestorsOrganizationConnectFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type OrganizationInvestorsOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationInvestorsOrganizationConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationInvestorsOrganizationConnectionWhere>>;
  NOT?: InputMaybe<OrganizationInvestorsOrganizationConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<InvestmentInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InvestmentInfoWhere>;
};

export type OrganizationInvestorsOrganizationConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: OrganizationInvestorsOrganizationConnectOrCreateFieldInputOnCreate;
};

export type OrganizationInvestorsOrganizationConnectOrCreateFieldInputOnCreate =
  {
    node: OrganizationOnCreateInput;
    edge?: InputMaybe<InvestmentInfoCreateInput>;
  };

export type OrganizationInvestorsOrganizationCreateFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type OrganizationInvestorsOrganizationDeleteFieldInput = {
  where?: InputMaybe<OrganizationInvestorsOrganizationConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type OrganizationInvestorsOrganizationDisconnectFieldInput = {
  where?: InputMaybe<OrganizationInvestorsOrganizationConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type OrganizationInvestorsOrganizationFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<OrganizationInvestorsOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationInvestorsOrganizationConnectFieldInput>
  >;
  create?: InputMaybe<Array<OrganizationInvestorsOrganizationCreateFieldInput>>;
};

export type OrganizationInvestorsOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<InvestmentInfoUpdateInput>;
};

export type OrganizationInvestorsOrganizationUpdateFieldInput = {
  where?: InputMaybe<OrganizationInvestorsOrganizationConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<OrganizationInvestorsOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationInvestorsOrganizationConnectFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<OrganizationInvestorsOrganizationDisconnectFieldInput>
  >;
  create?: InputMaybe<Array<OrganizationInvestorsOrganizationCreateFieldInput>>;
  update?: InputMaybe<OrganizationInvestorsOrganizationUpdateConnectionInput>;
  delete?: InputMaybe<Array<OrganizationInvestorsOrganizationDeleteFieldInput>>;
};

export type OrganizationInvestorsPersonConnectFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  where?: InputMaybe<PersonConnectWhere>;
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type OrganizationInvestorsPersonConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationInvestorsPersonConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationInvestorsPersonConnectionWhere>>;
  NOT?: InputMaybe<OrganizationInvestorsPersonConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
  edge?: InputMaybe<InvestmentInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InvestmentInfoWhere>;
};

export type OrganizationInvestorsPersonConnectOrCreateFieldInput = {
  where: PersonConnectOrCreateWhere;
  onCreate: OrganizationInvestorsPersonConnectOrCreateFieldInputOnCreate;
};

export type OrganizationInvestorsPersonConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
  edge?: InputMaybe<InvestmentInfoCreateInput>;
};

export type OrganizationInvestorsPersonCreateFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  node: PersonCreateInput;
};

export type OrganizationInvestorsPersonDeleteFieldInput = {
  where?: InputMaybe<OrganizationInvestorsPersonConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type OrganizationInvestorsPersonDisconnectFieldInput = {
  where?: InputMaybe<OrganizationInvestorsPersonConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type OrganizationInvestorsPersonFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<OrganizationInvestorsPersonConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<OrganizationInvestorsPersonConnectFieldInput>>;
  create?: InputMaybe<Array<OrganizationInvestorsPersonCreateFieldInput>>;
};

export type OrganizationInvestorsPersonUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<InvestmentInfoUpdateInput>;
};

export type OrganizationInvestorsPersonUpdateFieldInput = {
  where?: InputMaybe<OrganizationInvestorsPersonConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<OrganizationInvestorsPersonConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<OrganizationInvestorsPersonConnectFieldInput>>;
  disconnect?: InputMaybe<
    Array<OrganizationInvestorsPersonDisconnectFieldInput>
  >;
  create?: InputMaybe<Array<OrganizationInvestorsPersonCreateFieldInput>>;
  update?: InputMaybe<OrganizationInvestorsPersonUpdateConnectionInput>;
  delete?: InputMaybe<Array<OrganizationInvestorsPersonDeleteFieldInput>>;
};

export type OrganizationInvestorsUpdateInput = {
  Organization?: InputMaybe<
    Array<OrganizationInvestorsOrganizationUpdateFieldInput>
  >;
  Person?: InputMaybe<Array<OrganizationInvestorsPersonUpdateFieldInput>>;
};

export type OrganizationOnCreateInput = {
  name: Scalars["String"]["input"];
  category: Scalars["String"]["input"];
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
  exchange?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more OrganizationSort objects to sort Organizations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OrganizationSort>>;
};

export type OrganizationRelationInput = {
  subsidiary_of?: InputMaybe<Array<OrganizationSubsidiary_OfCreateFieldInput>>;
  subsidiaries?: InputMaybe<OrganizationSubsidiariesCreateFieldInput>;
  employees?: InputMaybe<Array<OrganizationEmployeesCreateFieldInput>>;
  investors?: InputMaybe<OrganizationInvestorsCreateFieldInput>;
  investments?: InputMaybe<OrganizationInvestmentsCreateFieldInput>;
};

/** Fields to sort Organizations by. The order in which sorts are applied is not guaranteed when specifying many fields in one OrganizationSort object. */
export type OrganizationSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  category?: InputMaybe<SortDirection>;
  wiki_tag?: InputMaybe<SortDirection>;
  ticker_symbol?: InputMaybe<SortDirection>;
  exchange?: InputMaybe<SortDirection>;
};

export type OrganizationSubsidiariesConnectInput = {
  Organization?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationConnectFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelConnectFieldInput>
  >;
};

export type OrganizationSubsidiariesConnectionSort = {
  edge?: InputMaybe<OwnershipInfoSort>;
};

export type OrganizationSubsidiariesConnectionWhere = {
  Organization?: InputMaybe<OrganizationSubsidiariesOrganizationConnectionWhere>;
  MediaChannel?: InputMaybe<OrganizationSubsidiariesMediaChannelConnectionWhere>;
};

export type OrganizationSubsidiariesConnectOrCreateInput = {
  Organization?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationConnectOrCreateFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelConnectOrCreateFieldInput>
  >;
};

export type OrganizationSubsidiariesCreateFieldInput = {
  Organization?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationCreateFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelCreateFieldInput>
  >;
};

export type OrganizationSubsidiariesCreateInput = {
  Organization?: InputMaybe<OrganizationSubsidiariesOrganizationFieldInput>;
  MediaChannel?: InputMaybe<OrganizationSubsidiariesMediaChannelFieldInput>;
};

export type OrganizationSubsidiariesDeleteInput = {
  Organization?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationDeleteFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelDeleteFieldInput>
  >;
};

export type OrganizationSubsidiariesDisconnectInput = {
  Organization?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationDisconnectFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelDisconnectFieldInput>
  >;
};

export type OrganizationSubsidiariesMediaChannelConnectFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  where?: InputMaybe<MediaChannelConnectWhere>;
  connect?: InputMaybe<Array<MediaChannelConnectInput>>;
};

export type OrganizationSubsidiariesMediaChannelConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationSubsidiariesMediaChannelConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationSubsidiariesMediaChannelConnectionWhere>>;
  NOT?: InputMaybe<OrganizationSubsidiariesMediaChannelConnectionWhere>;
  node?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MediaChannelWhere>;
  edge?: InputMaybe<OwnershipInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<OwnershipInfoWhere>;
};

export type OrganizationSubsidiariesMediaChannelConnectOrCreateFieldInput = {
  where: MediaChannelConnectOrCreateWhere;
  onCreate: OrganizationSubsidiariesMediaChannelConnectOrCreateFieldInputOnCreate;
};

export type OrganizationSubsidiariesMediaChannelConnectOrCreateFieldInputOnCreate =
  {
    node: MediaChannelOnCreateInput;
    edge?: InputMaybe<OwnershipInfoCreateInput>;
  };

export type OrganizationSubsidiariesMediaChannelCreateFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  node: MediaChannelCreateInput;
};

export type OrganizationSubsidiariesMediaChannelDeleteFieldInput = {
  where?: InputMaybe<OrganizationSubsidiariesMediaChannelConnectionWhere>;
  delete?: InputMaybe<MediaChannelDeleteInput>;
};

export type OrganizationSubsidiariesMediaChannelDisconnectFieldInput = {
  where?: InputMaybe<OrganizationSubsidiariesMediaChannelConnectionWhere>;
  disconnect?: InputMaybe<MediaChannelDisconnectInput>;
};

export type OrganizationSubsidiariesMediaChannelFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelCreateFieldInput>
  >;
};

export type OrganizationSubsidiariesMediaChannelUpdateConnectionInput = {
  node?: InputMaybe<MediaChannelUpdateInput>;
  edge?: InputMaybe<OwnershipInfoUpdateInput>;
};

export type OrganizationSubsidiariesMediaChannelUpdateFieldInput = {
  where?: InputMaybe<OrganizationSubsidiariesMediaChannelConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelConnectFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelDisconnectFieldInput>
  >;
  create?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelCreateFieldInput>
  >;
  update?: InputMaybe<OrganizationSubsidiariesMediaChannelUpdateConnectionInput>;
  delete?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelDeleteFieldInput>
  >;
};

export type OrganizationSubsidiariesOrganizationConnectFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type OrganizationSubsidiariesOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationSubsidiariesOrganizationConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationSubsidiariesOrganizationConnectionWhere>>;
  NOT?: InputMaybe<OrganizationSubsidiariesOrganizationConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<OwnershipInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<OwnershipInfoWhere>;
};

export type OrganizationSubsidiariesOrganizationConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: OrganizationSubsidiariesOrganizationConnectOrCreateFieldInputOnCreate;
};

export type OrganizationSubsidiariesOrganizationConnectOrCreateFieldInputOnCreate =
  {
    node: OrganizationOnCreateInput;
    edge?: InputMaybe<OwnershipInfoCreateInput>;
  };

export type OrganizationSubsidiariesOrganizationCreateFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type OrganizationSubsidiariesOrganizationDeleteFieldInput = {
  where?: InputMaybe<OrganizationSubsidiariesOrganizationConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type OrganizationSubsidiariesOrganizationDisconnectFieldInput = {
  where?: InputMaybe<OrganizationSubsidiariesOrganizationConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type OrganizationSubsidiariesOrganizationFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationCreateFieldInput>
  >;
};

export type OrganizationSubsidiariesOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<OwnershipInfoUpdateInput>;
};

export type OrganizationSubsidiariesOrganizationUpdateFieldInput = {
  where?: InputMaybe<OrganizationSubsidiariesOrganizationConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationConnectFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationDisconnectFieldInput>
  >;
  create?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationCreateFieldInput>
  >;
  update?: InputMaybe<OrganizationSubsidiariesOrganizationUpdateConnectionInput>;
  delete?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationDeleteFieldInput>
  >;
};

export type OrganizationSubsidiariesUpdateInput = {
  Organization?: InputMaybe<
    Array<OrganizationSubsidiariesOrganizationUpdateFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<OrganizationSubsidiariesMediaChannelUpdateFieldInput>
  >;
};

export type OrganizationSubsidiary_OfAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<OrganizationSubsidiary_OfAggregateInput>>;
  OR?: InputMaybe<Array<OrganizationSubsidiary_OfAggregateInput>>;
  NOT?: InputMaybe<OrganizationSubsidiary_OfAggregateInput>;
  node?: InputMaybe<OrganizationSubsidiary_OfNodeAggregationWhereInput>;
  edge?: InputMaybe<OwnershipInfoAggregationWhereInput>;
};

export type OrganizationSubsidiary_OfConnectFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type OrganizationSubsidiary_OfConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
  edge?: InputMaybe<OwnershipInfoSort>;
};

export type OrganizationSubsidiary_OfConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationSubsidiary_OfConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationSubsidiary_OfConnectionWhere>>;
  NOT?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<OwnershipInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<OwnershipInfoWhere>;
};

export type OrganizationSubsidiary_OfConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: OrganizationSubsidiary_OfConnectOrCreateFieldInputOnCreate;
};

export type OrganizationSubsidiary_OfConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
  edge?: InputMaybe<OwnershipInfoCreateInput>;
};

export type OrganizationSubsidiary_OfCreateFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type OrganizationSubsidiary_OfDeleteFieldInput = {
  where?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type OrganizationSubsidiary_OfDisconnectFieldInput = {
  where?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type OrganizationSubsidiary_OfFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<OrganizationSubsidiary_OfConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<OrganizationSubsidiary_OfConnectFieldInput>>;
  create?: InputMaybe<Array<OrganizationSubsidiary_OfCreateFieldInput>>;
};

export type OrganizationSubsidiary_OfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationSubsidiary_OfNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationSubsidiary_OfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationSubsidiary_OfNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrganizationSubsidiary_OfUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<OwnershipInfoUpdateInput>;
};

export type OrganizationSubsidiary_OfUpdateFieldInput = {
  where?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<OrganizationSubsidiary_OfConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<OrganizationSubsidiary_OfConnectFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationSubsidiary_OfDisconnectFieldInput>>;
  create?: InputMaybe<Array<OrganizationSubsidiary_OfCreateFieldInput>>;
  update?: InputMaybe<OrganizationSubsidiary_OfUpdateConnectionInput>;
  delete?: InputMaybe<Array<OrganizationSubsidiary_OfDeleteFieldInput>>;
};

export type OrganizationUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
  exchange?: InputMaybe<Scalars["String"]["input"]>;
  subsidiary_of?: InputMaybe<Array<OrganizationSubsidiary_OfUpdateFieldInput>>;
  subsidiaries?: InputMaybe<OrganizationSubsidiariesUpdateInput>;
  employees?: InputMaybe<Array<OrganizationEmployeesUpdateFieldInput>>;
  investors?: InputMaybe<OrganizationInvestorsUpdateInput>;
  investments?: InputMaybe<OrganizationInvestmentsUpdateInput>;
};

export type OrganizationWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT?: InputMaybe<Scalars["String"]["input"]>;
  category_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  category_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  category_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  category_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  wiki_tag_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  ticker_symbol_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  ticker_symbol_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  ticker_symbol_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  exchange?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT?: InputMaybe<Scalars["String"]["input"]>;
  exchange_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  exchange_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  exchange_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  exchange_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  exchange_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<OrganizationWhere>>;
  AND?: InputMaybe<Array<OrganizationWhere>>;
  NOT?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `subsidiary_of_SOME` instead. */
  subsidiary_of?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `subsidiary_of_NONE` instead. */
  subsidiary_of_NOT?: InputMaybe<OrganizationWhere>;
  /** Return Organizations where all of the related Organizations match this filter */
  subsidiary_of_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Organizations where none of the related Organizations match this filter */
  subsidiary_of_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Organizations where one of the related Organizations match this filter */
  subsidiary_of_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Organizations where some of the related Organizations match this filter */
  subsidiary_of_SOME?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `subsidiary_ofConnection_SOME` instead. */
  subsidiary_ofConnection?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  /** @deprecated Use `subsidiary_ofConnection_NONE` instead. */
  subsidiary_ofConnection_NOT?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  /** Return Organizations where all of the related OrganizationSubsidiary_ofConnections match this filter */
  subsidiary_ofConnection_ALL?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  /** Return Organizations where none of the related OrganizationSubsidiary_ofConnections match this filter */
  subsidiary_ofConnection_NONE?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  /** Return Organizations where one of the related OrganizationSubsidiary_ofConnections match this filter */
  subsidiary_ofConnection_SINGLE?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  /** Return Organizations where some of the related OrganizationSubsidiary_ofConnections match this filter */
  subsidiary_ofConnection_SOME?: InputMaybe<OrganizationSubsidiary_OfConnectionWhere>;
  subsidiary_ofAggregate?: InputMaybe<OrganizationSubsidiary_OfAggregateInput>;
  /** @deprecated Use `subsidiaries_SOME` instead. */
  subsidiaries?: InputMaybe<AssetWhere>;
  /** @deprecated Use `subsidiaries_NONE` instead. */
  subsidiaries_NOT?: InputMaybe<AssetWhere>;
  /** Return Organizations where all of the related Assets match this filter */
  subsidiaries_ALL?: InputMaybe<AssetWhere>;
  /** Return Organizations where none of the related Assets match this filter */
  subsidiaries_NONE?: InputMaybe<AssetWhere>;
  /** Return Organizations where one of the related Assets match this filter */
  subsidiaries_SINGLE?: InputMaybe<AssetWhere>;
  /** Return Organizations where some of the related Assets match this filter */
  subsidiaries_SOME?: InputMaybe<AssetWhere>;
  /** @deprecated Use `subsidiariesConnection_SOME` instead. */
  subsidiariesConnection?: InputMaybe<OrganizationSubsidiariesConnectionWhere>;
  /** @deprecated Use `subsidiariesConnection_NONE` instead. */
  subsidiariesConnection_NOT?: InputMaybe<OrganizationSubsidiariesConnectionWhere>;
  /** Return Organizations where all of the related OrganizationSubsidiariesConnections match this filter */
  subsidiariesConnection_ALL?: InputMaybe<OrganizationSubsidiariesConnectionWhere>;
  /** Return Organizations where none of the related OrganizationSubsidiariesConnections match this filter */
  subsidiariesConnection_NONE?: InputMaybe<OrganizationSubsidiariesConnectionWhere>;
  /** Return Organizations where one of the related OrganizationSubsidiariesConnections match this filter */
  subsidiariesConnection_SINGLE?: InputMaybe<OrganizationSubsidiariesConnectionWhere>;
  /** Return Organizations where some of the related OrganizationSubsidiariesConnections match this filter */
  subsidiariesConnection_SOME?: InputMaybe<OrganizationSubsidiariesConnectionWhere>;
  /** @deprecated Use `employees_SOME` instead. */
  employees?: InputMaybe<PersonWhere>;
  /** @deprecated Use `employees_NONE` instead. */
  employees_NOT?: InputMaybe<PersonWhere>;
  /** Return Organizations where all of the related People match this filter */
  employees_ALL?: InputMaybe<PersonWhere>;
  /** Return Organizations where none of the related People match this filter */
  employees_NONE?: InputMaybe<PersonWhere>;
  /** Return Organizations where one of the related People match this filter */
  employees_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Organizations where some of the related People match this filter */
  employees_SOME?: InputMaybe<PersonWhere>;
  /** @deprecated Use `employeesConnection_SOME` instead. */
  employeesConnection?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** @deprecated Use `employeesConnection_NONE` instead. */
  employeesConnection_NOT?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** Return Organizations where all of the related OrganizationEmployeesConnections match this filter */
  employeesConnection_ALL?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** Return Organizations where none of the related OrganizationEmployeesConnections match this filter */
  employeesConnection_NONE?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** Return Organizations where one of the related OrganizationEmployeesConnections match this filter */
  employeesConnection_SINGLE?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** Return Organizations where some of the related OrganizationEmployeesConnections match this filter */
  employeesConnection_SOME?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  employeesAggregate?: InputMaybe<OrganizationEmployeesAggregateInput>;
  /** @deprecated Use `investors_SOME` instead. */
  investors?: InputMaybe<EntityWhere>;
  /** @deprecated Use `investors_NONE` instead. */
  investors_NOT?: InputMaybe<EntityWhere>;
  /** Return Organizations where all of the related Entities match this filter */
  investors_ALL?: InputMaybe<EntityWhere>;
  /** Return Organizations where none of the related Entities match this filter */
  investors_NONE?: InputMaybe<EntityWhere>;
  /** Return Organizations where one of the related Entities match this filter */
  investors_SINGLE?: InputMaybe<EntityWhere>;
  /** Return Organizations where some of the related Entities match this filter */
  investors_SOME?: InputMaybe<EntityWhere>;
  /** @deprecated Use `investorsConnection_SOME` instead. */
  investorsConnection?: InputMaybe<OrganizationInvestorsConnectionWhere>;
  /** @deprecated Use `investorsConnection_NONE` instead. */
  investorsConnection_NOT?: InputMaybe<OrganizationInvestorsConnectionWhere>;
  /** Return Organizations where all of the related OrganizationInvestorsConnections match this filter */
  investorsConnection_ALL?: InputMaybe<OrganizationInvestorsConnectionWhere>;
  /** Return Organizations where none of the related OrganizationInvestorsConnections match this filter */
  investorsConnection_NONE?: InputMaybe<OrganizationInvestorsConnectionWhere>;
  /** Return Organizations where one of the related OrganizationInvestorsConnections match this filter */
  investorsConnection_SINGLE?: InputMaybe<OrganizationInvestorsConnectionWhere>;
  /** Return Organizations where some of the related OrganizationInvestorsConnections match this filter */
  investorsConnection_SOME?: InputMaybe<OrganizationInvestorsConnectionWhere>;
  /** @deprecated Use `investments_SOME` instead. */
  investments?: InputMaybe<AssetWhere>;
  /** @deprecated Use `investments_NONE` instead. */
  investments_NOT?: InputMaybe<AssetWhere>;
  /** Return Organizations where all of the related Assets match this filter */
  investments_ALL?: InputMaybe<AssetWhere>;
  /** Return Organizations where none of the related Assets match this filter */
  investments_NONE?: InputMaybe<AssetWhere>;
  /** Return Organizations where one of the related Assets match this filter */
  investments_SINGLE?: InputMaybe<AssetWhere>;
  /** Return Organizations where some of the related Assets match this filter */
  investments_SOME?: InputMaybe<AssetWhere>;
  /** @deprecated Use `investmentsConnection_SOME` instead. */
  investmentsConnection?: InputMaybe<OrganizationInvestmentsConnectionWhere>;
  /** @deprecated Use `investmentsConnection_NONE` instead. */
  investmentsConnection_NOT?: InputMaybe<OrganizationInvestmentsConnectionWhere>;
  /** Return Organizations where all of the related OrganizationInvestmentsConnections match this filter */
  investmentsConnection_ALL?: InputMaybe<OrganizationInvestmentsConnectionWhere>;
  /** Return Organizations where none of the related OrganizationInvestmentsConnections match this filter */
  investmentsConnection_NONE?: InputMaybe<OrganizationInvestmentsConnectionWhere>;
  /** Return Organizations where one of the related OrganizationInvestmentsConnections match this filter */
  investmentsConnection_SINGLE?: InputMaybe<OrganizationInvestmentsConnectionWhere>;
  /** Return Organizations where some of the related OrganizationInvestmentsConnections match this filter */
  investmentsConnection_SOME?: InputMaybe<OrganizationInvestmentsConnectionWhere>;
};

export type OwnershipInfoAggregationWhereInput = {
  AND?: InputMaybe<Array<OwnershipInfoAggregationWhereInput>>;
  OR?: InputMaybe<Array<OwnershipInfoAggregationWhereInput>>;
  NOT?: InputMaybe<OwnershipInfoAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  start_dt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  end_dt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type OwnershipInfoCreateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type OwnershipInfoSort = {
  details?: InputMaybe<SortDirection>;
  start_dt?: InputMaybe<SortDirection>;
  end_dt?: InputMaybe<SortDirection>;
  weight?: InputMaybe<SortDirection>;
};

export type OwnershipInfoUpdateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
  weight_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  weight_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type OwnershipInfoWhere = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT?: InputMaybe<Scalars["String"]["input"]>;
  details_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  details_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  details_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  details_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  start_dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  start_dt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  start_dt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_dt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  end_dt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  end_dt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weight_NOT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weight_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  weight_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  OR?: InputMaybe<Array<OwnershipInfoWhere>>;
  AND?: InputMaybe<Array<OwnershipInfoWhere>>;
  NOT?: InputMaybe<OwnershipInfoWhere>;
};

export type PersonAffiliationsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonAffiliationsAggregateInput>>;
  OR?: InputMaybe<Array<PersonAffiliationsAggregateInput>>;
  NOT?: InputMaybe<PersonAffiliationsAggregateInput>;
  node?: InputMaybe<PersonAffiliationsNodeAggregationWhereInput>;
  edge?: InputMaybe<MembershipInfoAggregationWhereInput>;
};

export type PersonAffiliationsConnectFieldInput = {
  edge?: InputMaybe<MembershipInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type PersonAffiliationsConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
  edge?: InputMaybe<MembershipInfoSort>;
};

export type PersonAffiliationsConnectionWhere = {
  AND?: InputMaybe<Array<PersonAffiliationsConnectionWhere>>;
  OR?: InputMaybe<Array<PersonAffiliationsConnectionWhere>>;
  NOT?: InputMaybe<PersonAffiliationsConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<MembershipInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<MembershipInfoWhere>;
};

export type PersonAffiliationsConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: PersonAffiliationsConnectOrCreateFieldInputOnCreate;
};

export type PersonAffiliationsConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
  edge?: InputMaybe<MembershipInfoCreateInput>;
};

export type PersonAffiliationsCreateFieldInput = {
  edge?: InputMaybe<MembershipInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type PersonAffiliationsDeleteFieldInput = {
  where?: InputMaybe<PersonAffiliationsConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type PersonAffiliationsDisconnectFieldInput = {
  where?: InputMaybe<PersonAffiliationsConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type PersonAffiliationsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<PersonAffiliationsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonAffiliationsConnectFieldInput>>;
  create?: InputMaybe<Array<PersonAffiliationsCreateFieldInput>>;
};

export type PersonAffiliationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonAffiliationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonAffiliationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonAffiliationsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonAffiliationsUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<MembershipInfoUpdateInput>;
};

export type PersonAffiliationsUpdateFieldInput = {
  where?: InputMaybe<PersonAffiliationsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<PersonAffiliationsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonAffiliationsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonAffiliationsDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonAffiliationsCreateFieldInput>>;
  update?: InputMaybe<PersonAffiliationsUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonAffiliationsDeleteFieldInput>>;
};

export type PersonConnectInput = {
  affiliations?: InputMaybe<Array<PersonAffiliationsConnectFieldInput>>;
  education?: InputMaybe<Array<PersonEducationConnectFieldInput>>;
  employment?: InputMaybe<Array<PersonEmploymentConnectFieldInput>>;
  investments?: InputMaybe<PersonInvestmentsConnectInput>;
  user_accounts?: InputMaybe<Array<PersonUser_AccountsConnectFieldInput>>;
};

export type PersonConnectOrCreateInput = {
  affiliations?: InputMaybe<Array<PersonAffiliationsConnectOrCreateFieldInput>>;
  education?: InputMaybe<Array<PersonEducationConnectOrCreateFieldInput>>;
  employment?: InputMaybe<Array<PersonEmploymentConnectOrCreateFieldInput>>;
  investments?: InputMaybe<PersonInvestmentsConnectOrCreateInput>;
  user_accounts?: InputMaybe<
    Array<PersonUser_AccountsConnectOrCreateFieldInput>
  >;
};

export type PersonConnectOrCreateWhere = {
  node: PersonUniqueWhere;
};

export type PersonConnectWhere = {
  node: PersonWhere;
};

export type PersonCreateInput = {
  name: Scalars["String"]["input"];
  aka?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  byline_tag?: InputMaybe<Scalars["String"]["input"]>;
  affiliations?: InputMaybe<PersonAffiliationsFieldInput>;
  education?: InputMaybe<PersonEducationFieldInput>;
  employment?: InputMaybe<PersonEmploymentFieldInput>;
  investments?: InputMaybe<PersonInvestmentsCreateInput>;
  user_accounts?: InputMaybe<PersonUser_AccountsFieldInput>;
};

export type PersonDeleteInput = {
  affiliations?: InputMaybe<Array<PersonAffiliationsDeleteFieldInput>>;
  education?: InputMaybe<Array<PersonEducationDeleteFieldInput>>;
  employment?: InputMaybe<Array<PersonEmploymentDeleteFieldInput>>;
  investments?: InputMaybe<PersonInvestmentsDeleteInput>;
  user_accounts?: InputMaybe<Array<PersonUser_AccountsDeleteFieldInput>>;
};

export type PersonDisconnectInput = {
  affiliations?: InputMaybe<Array<PersonAffiliationsDisconnectFieldInput>>;
  education?: InputMaybe<Array<PersonEducationDisconnectFieldInput>>;
  employment?: InputMaybe<Array<PersonEmploymentDisconnectFieldInput>>;
  investments?: InputMaybe<PersonInvestmentsDisconnectInput>;
  user_accounts?: InputMaybe<Array<PersonUser_AccountsDisconnectFieldInput>>;
};

export type PersonEducationAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonEducationAggregateInput>>;
  OR?: InputMaybe<Array<PersonEducationAggregateInput>>;
  NOT?: InputMaybe<PersonEducationAggregateInput>;
  node?: InputMaybe<PersonEducationNodeAggregationWhereInput>;
  edge?: InputMaybe<EducationInfoAggregationWhereInput>;
};

export type PersonEducationConnectFieldInput = {
  edge?: InputMaybe<EducationInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type PersonEducationConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
  edge?: InputMaybe<EducationInfoSort>;
};

export type PersonEducationConnectionWhere = {
  AND?: InputMaybe<Array<PersonEducationConnectionWhere>>;
  OR?: InputMaybe<Array<PersonEducationConnectionWhere>>;
  NOT?: InputMaybe<PersonEducationConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<EducationInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<EducationInfoWhere>;
};

export type PersonEducationConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: PersonEducationConnectOrCreateFieldInputOnCreate;
};

export type PersonEducationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
  edge?: InputMaybe<EducationInfoCreateInput>;
};

export type PersonEducationCreateFieldInput = {
  edge?: InputMaybe<EducationInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type PersonEducationDeleteFieldInput = {
  where?: InputMaybe<PersonEducationConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type PersonEducationDisconnectFieldInput = {
  where?: InputMaybe<PersonEducationConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type PersonEducationFieldInput = {
  connectOrCreate?: InputMaybe<Array<PersonEducationConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<PersonEducationConnectFieldInput>>;
  create?: InputMaybe<Array<PersonEducationCreateFieldInput>>;
};

export type PersonEducationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonEducationNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonEducationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonEducationNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonEducationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<EducationInfoUpdateInput>;
};

export type PersonEducationUpdateFieldInput = {
  where?: InputMaybe<PersonEducationConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<PersonEducationConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<PersonEducationConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonEducationDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonEducationCreateFieldInput>>;
  update?: InputMaybe<PersonEducationUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonEducationDeleteFieldInput>>;
};

export type PersonEmploymentAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonEmploymentAggregateInput>>;
  OR?: InputMaybe<Array<PersonEmploymentAggregateInput>>;
  NOT?: InputMaybe<PersonEmploymentAggregateInput>;
  node?: InputMaybe<PersonEmploymentNodeAggregationWhereInput>;
  edge?: InputMaybe<EmploymentInfoAggregationWhereInput>;
};

export type PersonEmploymentConnectFieldInput = {
  edge?: InputMaybe<EmploymentInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type PersonEmploymentConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
  edge?: InputMaybe<EmploymentInfoSort>;
};

export type PersonEmploymentConnectionWhere = {
  AND?: InputMaybe<Array<PersonEmploymentConnectionWhere>>;
  OR?: InputMaybe<Array<PersonEmploymentConnectionWhere>>;
  NOT?: InputMaybe<PersonEmploymentConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<EmploymentInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<EmploymentInfoWhere>;
};

export type PersonEmploymentConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: PersonEmploymentConnectOrCreateFieldInputOnCreate;
};

export type PersonEmploymentConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
  edge?: InputMaybe<EmploymentInfoCreateInput>;
};

export type PersonEmploymentCreateFieldInput = {
  edge?: InputMaybe<EmploymentInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type PersonEmploymentDeleteFieldInput = {
  where?: InputMaybe<PersonEmploymentConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type PersonEmploymentDisconnectFieldInput = {
  where?: InputMaybe<PersonEmploymentConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type PersonEmploymentFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<PersonEmploymentConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonEmploymentConnectFieldInput>>;
  create?: InputMaybe<Array<PersonEmploymentCreateFieldInput>>;
};

export type PersonEmploymentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonEmploymentNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonEmploymentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonEmploymentNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonEmploymentUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<EmploymentInfoUpdateInput>;
};

export type PersonEmploymentUpdateFieldInput = {
  where?: InputMaybe<PersonEmploymentConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<PersonEmploymentConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonEmploymentConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonEmploymentDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonEmploymentCreateFieldInput>>;
  update?: InputMaybe<PersonEmploymentUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonEmploymentDeleteFieldInput>>;
};

export type PersonInvestmentsConnectInput = {
  Organization?: InputMaybe<
    Array<PersonInvestmentsOrganizationConnectFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<PersonInvestmentsMediaChannelConnectFieldInput>
  >;
};

export type PersonInvestmentsConnectionSort = {
  edge?: InputMaybe<InvestmentInfoSort>;
};

export type PersonInvestmentsConnectionWhere = {
  Organization?: InputMaybe<PersonInvestmentsOrganizationConnectionWhere>;
  MediaChannel?: InputMaybe<PersonInvestmentsMediaChannelConnectionWhere>;
};

export type PersonInvestmentsConnectOrCreateInput = {
  Organization?: InputMaybe<
    Array<PersonInvestmentsOrganizationConnectOrCreateFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<PersonInvestmentsMediaChannelConnectOrCreateFieldInput>
  >;
};

export type PersonInvestmentsCreateFieldInput = {
  Organization?: InputMaybe<
    Array<PersonInvestmentsOrganizationCreateFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<PersonInvestmentsMediaChannelCreateFieldInput>
  >;
};

export type PersonInvestmentsCreateInput = {
  Organization?: InputMaybe<PersonInvestmentsOrganizationFieldInput>;
  MediaChannel?: InputMaybe<PersonInvestmentsMediaChannelFieldInput>;
};

export type PersonInvestmentsDeleteInput = {
  Organization?: InputMaybe<
    Array<PersonInvestmentsOrganizationDeleteFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<PersonInvestmentsMediaChannelDeleteFieldInput>
  >;
};

export type PersonInvestmentsDisconnectInput = {
  Organization?: InputMaybe<
    Array<PersonInvestmentsOrganizationDisconnectFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<PersonInvestmentsMediaChannelDisconnectFieldInput>
  >;
};

export type PersonInvestmentsMediaChannelConnectFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  where?: InputMaybe<MediaChannelConnectWhere>;
  connect?: InputMaybe<Array<MediaChannelConnectInput>>;
};

export type PersonInvestmentsMediaChannelConnectionWhere = {
  AND?: InputMaybe<Array<PersonInvestmentsMediaChannelConnectionWhere>>;
  OR?: InputMaybe<Array<PersonInvestmentsMediaChannelConnectionWhere>>;
  NOT?: InputMaybe<PersonInvestmentsMediaChannelConnectionWhere>;
  node?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MediaChannelWhere>;
  edge?: InputMaybe<InvestmentInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InvestmentInfoWhere>;
};

export type PersonInvestmentsMediaChannelConnectOrCreateFieldInput = {
  where: MediaChannelConnectOrCreateWhere;
  onCreate: PersonInvestmentsMediaChannelConnectOrCreateFieldInputOnCreate;
};

export type PersonInvestmentsMediaChannelConnectOrCreateFieldInputOnCreate = {
  node: MediaChannelOnCreateInput;
  edge?: InputMaybe<InvestmentInfoCreateInput>;
};

export type PersonInvestmentsMediaChannelCreateFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  node: MediaChannelCreateInput;
};

export type PersonInvestmentsMediaChannelDeleteFieldInput = {
  where?: InputMaybe<PersonInvestmentsMediaChannelConnectionWhere>;
  delete?: InputMaybe<MediaChannelDeleteInput>;
};

export type PersonInvestmentsMediaChannelDisconnectFieldInput = {
  where?: InputMaybe<PersonInvestmentsMediaChannelConnectionWhere>;
  disconnect?: InputMaybe<MediaChannelDisconnectInput>;
};

export type PersonInvestmentsMediaChannelFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<PersonInvestmentsMediaChannelConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonInvestmentsMediaChannelConnectFieldInput>>;
  create?: InputMaybe<Array<PersonInvestmentsMediaChannelCreateFieldInput>>;
};

export type PersonInvestmentsMediaChannelUpdateConnectionInput = {
  node?: InputMaybe<MediaChannelUpdateInput>;
  edge?: InputMaybe<InvestmentInfoUpdateInput>;
};

export type PersonInvestmentsMediaChannelUpdateFieldInput = {
  where?: InputMaybe<PersonInvestmentsMediaChannelConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<PersonInvestmentsMediaChannelConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonInvestmentsMediaChannelConnectFieldInput>>;
  disconnect?: InputMaybe<
    Array<PersonInvestmentsMediaChannelDisconnectFieldInput>
  >;
  create?: InputMaybe<Array<PersonInvestmentsMediaChannelCreateFieldInput>>;
  update?: InputMaybe<PersonInvestmentsMediaChannelUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonInvestmentsMediaChannelDeleteFieldInput>>;
};

export type PersonInvestmentsOrganizationConnectFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type PersonInvestmentsOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<PersonInvestmentsOrganizationConnectionWhere>>;
  OR?: InputMaybe<Array<PersonInvestmentsOrganizationConnectionWhere>>;
  NOT?: InputMaybe<PersonInvestmentsOrganizationConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<InvestmentInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InvestmentInfoWhere>;
};

export type PersonInvestmentsOrganizationConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: PersonInvestmentsOrganizationConnectOrCreateFieldInputOnCreate;
};

export type PersonInvestmentsOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
  edge?: InputMaybe<InvestmentInfoCreateInput>;
};

export type PersonInvestmentsOrganizationCreateFieldInput = {
  edge?: InputMaybe<InvestmentInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type PersonInvestmentsOrganizationDeleteFieldInput = {
  where?: InputMaybe<PersonInvestmentsOrganizationConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type PersonInvestmentsOrganizationDisconnectFieldInput = {
  where?: InputMaybe<PersonInvestmentsOrganizationConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type PersonInvestmentsOrganizationFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<PersonInvestmentsOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonInvestmentsOrganizationConnectFieldInput>>;
  create?: InputMaybe<Array<PersonInvestmentsOrganizationCreateFieldInput>>;
};

export type PersonInvestmentsOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<InvestmentInfoUpdateInput>;
};

export type PersonInvestmentsOrganizationUpdateFieldInput = {
  where?: InputMaybe<PersonInvestmentsOrganizationConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<PersonInvestmentsOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonInvestmentsOrganizationConnectFieldInput>>;
  disconnect?: InputMaybe<
    Array<PersonInvestmentsOrganizationDisconnectFieldInput>
  >;
  create?: InputMaybe<Array<PersonInvestmentsOrganizationCreateFieldInput>>;
  update?: InputMaybe<PersonInvestmentsOrganizationUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonInvestmentsOrganizationDeleteFieldInput>>;
};

export type PersonInvestmentsUpdateInput = {
  Organization?: InputMaybe<
    Array<PersonInvestmentsOrganizationUpdateFieldInput>
  >;
  MediaChannel?: InputMaybe<
    Array<PersonInvestmentsMediaChannelUpdateFieldInput>
  >;
};

export type PersonOnCreateInput = {
  name: Scalars["String"]["input"];
  aka?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  byline_tag?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
};

export type PersonRelationInput = {
  affiliations?: InputMaybe<Array<PersonAffiliationsCreateFieldInput>>;
  education?: InputMaybe<Array<PersonEducationCreateFieldInput>>;
  employment?: InputMaybe<Array<PersonEmploymentCreateFieldInput>>;
  investments?: InputMaybe<PersonInvestmentsCreateFieldInput>;
  user_accounts?: InputMaybe<Array<PersonUser_AccountsCreateFieldInput>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  dob?: InputMaybe<SortDirection>;
  bio?: InputMaybe<SortDirection>;
  wiki_tag?: InputMaybe<SortDirection>;
  byline_tag?: InputMaybe<SortDirection>;
};

export type PersonUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  byline_tag?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  aka?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  aka_POP?: InputMaybe<Scalars["Int"]["input"]>;
  aka_PUSH?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  emails_POP?: InputMaybe<Scalars["Int"]["input"]>;
  emails_PUSH?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  byline_tag?: InputMaybe<Scalars["String"]["input"]>;
  affiliations?: InputMaybe<Array<PersonAffiliationsUpdateFieldInput>>;
  education?: InputMaybe<Array<PersonEducationUpdateFieldInput>>;
  employment?: InputMaybe<Array<PersonEmploymentUpdateFieldInput>>;
  investments?: InputMaybe<PersonInvestmentsUpdateInput>;
  user_accounts?: InputMaybe<Array<PersonUser_AccountsUpdateFieldInput>>;
};

export type PersonUser_AccountsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PersonUser_AccountsAggregateInput>>;
  OR?: InputMaybe<Array<PersonUser_AccountsAggregateInput>>;
  NOT?: InputMaybe<PersonUser_AccountsAggregateInput>;
  node?: InputMaybe<PersonUser_AccountsNodeAggregationWhereInput>;
  edge?: InputMaybe<OwnershipInfoAggregationWhereInput>;
};

export type PersonUser_AccountsConnectFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type PersonUser_AccountsConnectionSort = {
  node?: InputMaybe<UserSort>;
  edge?: InputMaybe<OwnershipInfoSort>;
};

export type PersonUser_AccountsConnectionWhere = {
  AND?: InputMaybe<Array<PersonUser_AccountsConnectionWhere>>;
  OR?: InputMaybe<Array<PersonUser_AccountsConnectionWhere>>;
  NOT?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
  edge?: InputMaybe<OwnershipInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<OwnershipInfoWhere>;
};

export type PersonUser_AccountsConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: PersonUser_AccountsConnectOrCreateFieldInputOnCreate;
};

export type PersonUser_AccountsConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
  edge?: InputMaybe<OwnershipInfoCreateInput>;
};

export type PersonUser_AccountsCreateFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  node: UserCreateInput;
};

export type PersonUser_AccountsDeleteFieldInput = {
  where?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type PersonUser_AccountsDisconnectFieldInput = {
  where?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type PersonUser_AccountsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<PersonUser_AccountsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonUser_AccountsConnectFieldInput>>;
  create?: InputMaybe<Array<PersonUser_AccountsCreateFieldInput>>;
};

export type PersonUser_AccountsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonUser_AccountsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonUser_AccountsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonUser_AccountsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  platform_user_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  platform_user_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  platform_user_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  platform_user_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PersonUser_AccountsUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
  edge?: InputMaybe<OwnershipInfoUpdateInput>;
};

export type PersonUser_AccountsUpdateFieldInput = {
  where?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<PersonUser_AccountsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PersonUser_AccountsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PersonUser_AccountsDisconnectFieldInput>>;
  create?: InputMaybe<Array<PersonUser_AccountsCreateFieldInput>>;
  update?: InputMaybe<PersonUser_AccountsUpdateConnectionInput>;
  delete?: InputMaybe<Array<PersonUser_AccountsDeleteFieldInput>>;
};

export type PersonWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  aka?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  aka_NOT?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  aka_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  aka_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  emails?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emails_NOT?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  emails_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emails_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dob_NOT?: InputMaybe<Scalars["Date"]["input"]>;
  dob_IN?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dob_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  dob_LT?: InputMaybe<Scalars["Date"]["input"]>;
  dob_LTE?: InputMaybe<Scalars["Date"]["input"]>;
  dob_GT?: InputMaybe<Scalars["Date"]["input"]>;
  dob_GTE?: InputMaybe<Scalars["Date"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bio_NOT?: InputMaybe<Scalars["String"]["input"]>;
  bio_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bio_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bio_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  bio_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  bio_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bio_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bio_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bio_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  wiki_tag_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  byline_tag?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  byline_tag_NOT?: InputMaybe<Scalars["String"]["input"]>;
  byline_tag_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  byline_tag_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  byline_tag_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  byline_tag_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  byline_tag_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  byline_tag_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  byline_tag_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  byline_tag_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<PersonWhere>>;
  AND?: InputMaybe<Array<PersonWhere>>;
  NOT?: InputMaybe<PersonWhere>;
  /** @deprecated Use `affiliations_SOME` instead. */
  affiliations?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `affiliations_NONE` instead. */
  affiliations_NOT?: InputMaybe<OrganizationWhere>;
  /** Return People where all of the related Organizations match this filter */
  affiliations_ALL?: InputMaybe<OrganizationWhere>;
  /** Return People where none of the related Organizations match this filter */
  affiliations_NONE?: InputMaybe<OrganizationWhere>;
  /** Return People where one of the related Organizations match this filter */
  affiliations_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return People where some of the related Organizations match this filter */
  affiliations_SOME?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `affiliationsConnection_SOME` instead. */
  affiliationsConnection?: InputMaybe<PersonAffiliationsConnectionWhere>;
  /** @deprecated Use `affiliationsConnection_NONE` instead. */
  affiliationsConnection_NOT?: InputMaybe<PersonAffiliationsConnectionWhere>;
  /** Return People where all of the related PersonAffiliationsConnections match this filter */
  affiliationsConnection_ALL?: InputMaybe<PersonAffiliationsConnectionWhere>;
  /** Return People where none of the related PersonAffiliationsConnections match this filter */
  affiliationsConnection_NONE?: InputMaybe<PersonAffiliationsConnectionWhere>;
  /** Return People where one of the related PersonAffiliationsConnections match this filter */
  affiliationsConnection_SINGLE?: InputMaybe<PersonAffiliationsConnectionWhere>;
  /** Return People where some of the related PersonAffiliationsConnections match this filter */
  affiliationsConnection_SOME?: InputMaybe<PersonAffiliationsConnectionWhere>;
  affiliationsAggregate?: InputMaybe<PersonAffiliationsAggregateInput>;
  /** @deprecated Use `education_SOME` instead. */
  education?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `education_NONE` instead. */
  education_NOT?: InputMaybe<OrganizationWhere>;
  /** Return People where all of the related Organizations match this filter */
  education_ALL?: InputMaybe<OrganizationWhere>;
  /** Return People where none of the related Organizations match this filter */
  education_NONE?: InputMaybe<OrganizationWhere>;
  /** Return People where one of the related Organizations match this filter */
  education_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return People where some of the related Organizations match this filter */
  education_SOME?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `educationConnection_SOME` instead. */
  educationConnection?: InputMaybe<PersonEducationConnectionWhere>;
  /** @deprecated Use `educationConnection_NONE` instead. */
  educationConnection_NOT?: InputMaybe<PersonEducationConnectionWhere>;
  /** Return People where all of the related PersonEducationConnections match this filter */
  educationConnection_ALL?: InputMaybe<PersonEducationConnectionWhere>;
  /** Return People where none of the related PersonEducationConnections match this filter */
  educationConnection_NONE?: InputMaybe<PersonEducationConnectionWhere>;
  /** Return People where one of the related PersonEducationConnections match this filter */
  educationConnection_SINGLE?: InputMaybe<PersonEducationConnectionWhere>;
  /** Return People where some of the related PersonEducationConnections match this filter */
  educationConnection_SOME?: InputMaybe<PersonEducationConnectionWhere>;
  educationAggregate?: InputMaybe<PersonEducationAggregateInput>;
  /** @deprecated Use `employment_SOME` instead. */
  employment?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `employment_NONE` instead. */
  employment_NOT?: InputMaybe<OrganizationWhere>;
  /** Return People where all of the related Organizations match this filter */
  employment_ALL?: InputMaybe<OrganizationWhere>;
  /** Return People where none of the related Organizations match this filter */
  employment_NONE?: InputMaybe<OrganizationWhere>;
  /** Return People where one of the related Organizations match this filter */
  employment_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return People where some of the related Organizations match this filter */
  employment_SOME?: InputMaybe<OrganizationWhere>;
  /** @deprecated Use `employmentConnection_SOME` instead. */
  employmentConnection?: InputMaybe<PersonEmploymentConnectionWhere>;
  /** @deprecated Use `employmentConnection_NONE` instead. */
  employmentConnection_NOT?: InputMaybe<PersonEmploymentConnectionWhere>;
  /** Return People where all of the related PersonEmploymentConnections match this filter */
  employmentConnection_ALL?: InputMaybe<PersonEmploymentConnectionWhere>;
  /** Return People where none of the related PersonEmploymentConnections match this filter */
  employmentConnection_NONE?: InputMaybe<PersonEmploymentConnectionWhere>;
  /** Return People where one of the related PersonEmploymentConnections match this filter */
  employmentConnection_SINGLE?: InputMaybe<PersonEmploymentConnectionWhere>;
  /** Return People where some of the related PersonEmploymentConnections match this filter */
  employmentConnection_SOME?: InputMaybe<PersonEmploymentConnectionWhere>;
  employmentAggregate?: InputMaybe<PersonEmploymentAggregateInput>;
  /** @deprecated Use `investments_SOME` instead. */
  investments?: InputMaybe<AssetWhere>;
  /** @deprecated Use `investments_NONE` instead. */
  investments_NOT?: InputMaybe<AssetWhere>;
  /** Return People where all of the related Assets match this filter */
  investments_ALL?: InputMaybe<AssetWhere>;
  /** Return People where none of the related Assets match this filter */
  investments_NONE?: InputMaybe<AssetWhere>;
  /** Return People where one of the related Assets match this filter */
  investments_SINGLE?: InputMaybe<AssetWhere>;
  /** Return People where some of the related Assets match this filter */
  investments_SOME?: InputMaybe<AssetWhere>;
  /** @deprecated Use `investmentsConnection_SOME` instead. */
  investmentsConnection?: InputMaybe<PersonInvestmentsConnectionWhere>;
  /** @deprecated Use `investmentsConnection_NONE` instead. */
  investmentsConnection_NOT?: InputMaybe<PersonInvestmentsConnectionWhere>;
  /** Return People where all of the related PersonInvestmentsConnections match this filter */
  investmentsConnection_ALL?: InputMaybe<PersonInvestmentsConnectionWhere>;
  /** Return People where none of the related PersonInvestmentsConnections match this filter */
  investmentsConnection_NONE?: InputMaybe<PersonInvestmentsConnectionWhere>;
  /** Return People where one of the related PersonInvestmentsConnections match this filter */
  investmentsConnection_SINGLE?: InputMaybe<PersonInvestmentsConnectionWhere>;
  /** Return People where some of the related PersonInvestmentsConnections match this filter */
  investmentsConnection_SOME?: InputMaybe<PersonInvestmentsConnectionWhere>;
  /** @deprecated Use `user_accounts_SOME` instead. */
  user_accounts?: InputMaybe<UserWhere>;
  /** @deprecated Use `user_accounts_NONE` instead. */
  user_accounts_NOT?: InputMaybe<UserWhere>;
  /** Return People where all of the related Users match this filter */
  user_accounts_ALL?: InputMaybe<UserWhere>;
  /** Return People where none of the related Users match this filter */
  user_accounts_NONE?: InputMaybe<UserWhere>;
  /** Return People where one of the related Users match this filter */
  user_accounts_SINGLE?: InputMaybe<UserWhere>;
  /** Return People where some of the related Users match this filter */
  user_accounts_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `user_accountsConnection_SOME` instead. */
  user_accountsConnection?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  /** @deprecated Use `user_accountsConnection_NONE` instead. */
  user_accountsConnection_NOT?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  /** Return People where all of the related PersonUser_accountsConnections match this filter */
  user_accountsConnection_ALL?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  /** Return People where none of the related PersonUser_accountsConnections match this filter */
  user_accountsConnection_NONE?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  /** Return People where one of the related PersonUser_accountsConnections match this filter */
  user_accountsConnection_SINGLE?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  /** Return People where some of the related PersonUser_accountsConnections match this filter */
  user_accountsConnection_SOME?: InputMaybe<PersonUser_AccountsConnectionWhere>;
  user_accountsAggregate?: InputMaybe<PersonUser_AccountsAggregateInput>;
};

export type PoliticalPositionAssociated_BeliefsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PoliticalPositionAssociated_BeliefsAggregateInput>>;
  OR?: InputMaybe<Array<PoliticalPositionAssociated_BeliefsAggregateInput>>;
  NOT?: InputMaybe<PoliticalPositionAssociated_BeliefsAggregateInput>;
  node?: InputMaybe<PoliticalPositionAssociated_BeliefsNodeAggregationWhereInput>;
};

export type PoliticalPositionAssociated_BeliefsConnectFieldInput = {
  where?: InputMaybe<BeliefConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<BeliefConnectInput>>;
};

export type PoliticalPositionAssociated_BeliefsConnectionSort = {
  node?: InputMaybe<BeliefSort>;
};

export type PoliticalPositionAssociated_BeliefsConnectionWhere = {
  AND?: InputMaybe<Array<PoliticalPositionAssociated_BeliefsConnectionWhere>>;
  OR?: InputMaybe<Array<PoliticalPositionAssociated_BeliefsConnectionWhere>>;
  NOT?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  node?: InputMaybe<BeliefWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<BeliefWhere>;
};

export type PoliticalPositionAssociated_BeliefsConnectOrCreateFieldInput = {
  where: BeliefConnectOrCreateWhere;
  onCreate: PoliticalPositionAssociated_BeliefsConnectOrCreateFieldInputOnCreate;
};

export type PoliticalPositionAssociated_BeliefsConnectOrCreateFieldInputOnCreate =
  {
    node: BeliefOnCreateInput;
  };

export type PoliticalPositionAssociated_BeliefsCreateFieldInput = {
  node: BeliefCreateInput;
};

export type PoliticalPositionAssociated_BeliefsDeleteFieldInput = {
  where?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  delete?: InputMaybe<BeliefDeleteInput>;
};

export type PoliticalPositionAssociated_BeliefsDisconnectFieldInput = {
  where?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  disconnect?: InputMaybe<BeliefDisconnectInput>;
};

export type PoliticalPositionAssociated_BeliefsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsCreateFieldInput>
  >;
};

export type PoliticalPositionAssociated_BeliefsNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<PoliticalPositionAssociated_BeliefsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PoliticalPositionAssociated_BeliefsUpdateConnectionInput = {
  node?: InputMaybe<BeliefUpdateInput>;
};

export type PoliticalPositionAssociated_BeliefsUpdateFieldInput = {
  where?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsConnectFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsDisconnectFieldInput>
  >;
  create?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsCreateFieldInput>
  >;
  update?: InputMaybe<PoliticalPositionAssociated_BeliefsUpdateConnectionInput>;
  delete?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsDeleteFieldInput>
  >;
};

export type PoliticalPositionConnectInput = {
  associated_beliefs?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsConnectFieldInput>
  >;
  similar_positions?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsConnectFieldInput>
  >;
};

export type PoliticalPositionConnectOrCreateInput = {
  associated_beliefs?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsConnectOrCreateFieldInput>
  >;
  similar_positions?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsConnectOrCreateFieldInput>
  >;
};

export type PoliticalPositionConnectOrCreateWhere = {
  node: PoliticalPositionUniqueWhere;
};

export type PoliticalPositionConnectWhere = {
  node: PoliticalPositionWhere;
};

export type PoliticalPositionCreateInput = {
  name: Scalars["String"]["input"];
  summary: Scalars["String"]["input"];
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  associated_beliefs?: InputMaybe<PoliticalPositionAssociated_BeliefsFieldInput>;
  similar_positions?: InputMaybe<PoliticalPositionSimilar_PositionsFieldInput>;
};

export type PoliticalPositionDeleteInput = {
  associated_beliefs?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsDeleteFieldInput>
  >;
  similar_positions?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsDeleteFieldInput>
  >;
};

export type PoliticalPositionDisconnectInput = {
  associated_beliefs?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsDisconnectFieldInput>
  >;
  similar_positions?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsDisconnectFieldInput>
  >;
};

export type PoliticalPositionOnCreateInput = {
  name: Scalars["String"]["input"];
  summary: Scalars["String"]["input"];
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
};

export type PoliticalPositionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PoliticalPositionSort objects to sort PoliticalPositions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PoliticalPositionSort>>;
};

export type PoliticalPositionRelationInput = {
  associated_beliefs?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsCreateFieldInput>
  >;
  similar_positions?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsCreateFieldInput>
  >;
};

export type PoliticalPositionSimilar_PositionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PoliticalPositionSimilar_PositionsAggregateInput>>;
  OR?: InputMaybe<Array<PoliticalPositionSimilar_PositionsAggregateInput>>;
  NOT?: InputMaybe<PoliticalPositionSimilar_PositionsAggregateInput>;
  node?: InputMaybe<PoliticalPositionSimilar_PositionsNodeAggregationWhereInput>;
};

export type PoliticalPositionSimilar_PositionsConnectFieldInput = {
  where?: InputMaybe<PoliticalPositionConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PoliticalPositionConnectInput>>;
};

export type PoliticalPositionSimilar_PositionsConnectionSort = {
  node?: InputMaybe<PoliticalPositionSort>;
};

export type PoliticalPositionSimilar_PositionsConnectionWhere = {
  AND?: InputMaybe<Array<PoliticalPositionSimilar_PositionsConnectionWhere>>;
  OR?: InputMaybe<Array<PoliticalPositionSimilar_PositionsConnectionWhere>>;
  NOT?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  node?: InputMaybe<PoliticalPositionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PoliticalPositionWhere>;
};

export type PoliticalPositionSimilar_PositionsConnectOrCreateFieldInput = {
  where: PoliticalPositionConnectOrCreateWhere;
  onCreate: PoliticalPositionSimilar_PositionsConnectOrCreateFieldInputOnCreate;
};

export type PoliticalPositionSimilar_PositionsConnectOrCreateFieldInputOnCreate =
  {
    node: PoliticalPositionOnCreateInput;
  };

export type PoliticalPositionSimilar_PositionsCreateFieldInput = {
  node: PoliticalPositionCreateInput;
};

export type PoliticalPositionSimilar_PositionsDeleteFieldInput = {
  where?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  delete?: InputMaybe<PoliticalPositionDeleteInput>;
};

export type PoliticalPositionSimilar_PositionsDisconnectFieldInput = {
  where?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  disconnect?: InputMaybe<PoliticalPositionDisconnectInput>;
};

export type PoliticalPositionSimilar_PositionsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsCreateFieldInput>
  >;
};

export type PoliticalPositionSimilar_PositionsNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<PoliticalPositionSimilar_PositionsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  summary_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  summary_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  summary_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  summary_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PoliticalPositionSimilar_PositionsUpdateConnectionInput = {
  node?: InputMaybe<PoliticalPositionUpdateInput>;
};

export type PoliticalPositionSimilar_PositionsUpdateFieldInput = {
  where?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsConnectFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsDisconnectFieldInput>
  >;
  create?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsCreateFieldInput>
  >;
  update?: InputMaybe<PoliticalPositionSimilar_PositionsUpdateConnectionInput>;
  delete?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsDeleteFieldInput>
  >;
};

/** Fields to sort PoliticalPositions by. The order in which sorts are applied is not guaranteed when specifying many fields in one PoliticalPositionSort object. */
export type PoliticalPositionSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  summary?: InputMaybe<SortDirection>;
  wiki_tag?: InputMaybe<SortDirection>;
};

export type PoliticalPositionUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type PoliticalPositionUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  associated_beliefs?: InputMaybe<
    Array<PoliticalPositionAssociated_BeliefsUpdateFieldInput>
  >;
  similar_positions?: InputMaybe<
    Array<PoliticalPositionSimilar_PositionsUpdateFieldInput>
  >;
};

export type PoliticalPositionWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT?: InputMaybe<Scalars["String"]["input"]>;
  summary_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  summary_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  summary_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  summary_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  summary_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  wiki_tag_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  wiki_tag_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wiki_tag_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<PoliticalPositionWhere>>;
  AND?: InputMaybe<Array<PoliticalPositionWhere>>;
  NOT?: InputMaybe<PoliticalPositionWhere>;
  /** @deprecated Use `associated_beliefs_SOME` instead. */
  associated_beliefs?: InputMaybe<BeliefWhere>;
  /** @deprecated Use `associated_beliefs_NONE` instead. */
  associated_beliefs_NOT?: InputMaybe<BeliefWhere>;
  /** Return PoliticalPositions where all of the related Beliefs match this filter */
  associated_beliefs_ALL?: InputMaybe<BeliefWhere>;
  /** Return PoliticalPositions where none of the related Beliefs match this filter */
  associated_beliefs_NONE?: InputMaybe<BeliefWhere>;
  /** Return PoliticalPositions where one of the related Beliefs match this filter */
  associated_beliefs_SINGLE?: InputMaybe<BeliefWhere>;
  /** Return PoliticalPositions where some of the related Beliefs match this filter */
  associated_beliefs_SOME?: InputMaybe<BeliefWhere>;
  /** @deprecated Use `associated_beliefsConnection_SOME` instead. */
  associated_beliefsConnection?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  /** @deprecated Use `associated_beliefsConnection_NONE` instead. */
  associated_beliefsConnection_NOT?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  /** Return PoliticalPositions where all of the related PoliticalPositionAssociated_beliefsConnections match this filter */
  associated_beliefsConnection_ALL?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  /** Return PoliticalPositions where none of the related PoliticalPositionAssociated_beliefsConnections match this filter */
  associated_beliefsConnection_NONE?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  /** Return PoliticalPositions where one of the related PoliticalPositionAssociated_beliefsConnections match this filter */
  associated_beliefsConnection_SINGLE?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  /** Return PoliticalPositions where some of the related PoliticalPositionAssociated_beliefsConnections match this filter */
  associated_beliefsConnection_SOME?: InputMaybe<PoliticalPositionAssociated_BeliefsConnectionWhere>;
  associated_beliefsAggregate?: InputMaybe<PoliticalPositionAssociated_BeliefsAggregateInput>;
  /** @deprecated Use `similar_positions_SOME` instead. */
  similar_positions?: InputMaybe<PoliticalPositionWhere>;
  /** @deprecated Use `similar_positions_NONE` instead. */
  similar_positions_NOT?: InputMaybe<PoliticalPositionWhere>;
  /** Return PoliticalPositions where all of the related PoliticalPositions match this filter */
  similar_positions_ALL?: InputMaybe<PoliticalPositionWhere>;
  /** Return PoliticalPositions where none of the related PoliticalPositions match this filter */
  similar_positions_NONE?: InputMaybe<PoliticalPositionWhere>;
  /** Return PoliticalPositions where one of the related PoliticalPositions match this filter */
  similar_positions_SINGLE?: InputMaybe<PoliticalPositionWhere>;
  /** Return PoliticalPositions where some of the related PoliticalPositions match this filter */
  similar_positions_SOME?: InputMaybe<PoliticalPositionWhere>;
  /** @deprecated Use `similar_positionsConnection_SOME` instead. */
  similar_positionsConnection?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  /** @deprecated Use `similar_positionsConnection_NONE` instead. */
  similar_positionsConnection_NOT?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  /** Return PoliticalPositions where all of the related PoliticalPositionSimilar_positionsConnections match this filter */
  similar_positionsConnection_ALL?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  /** Return PoliticalPositions where none of the related PoliticalPositionSimilar_positionsConnections match this filter */
  similar_positionsConnection_NONE?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  /** Return PoliticalPositions where one of the related PoliticalPositionSimilar_positionsConnections match this filter */
  similar_positionsConnection_SINGLE?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  /** Return PoliticalPositions where some of the related PoliticalPositionSimilar_positionsConnections match this filter */
  similar_positionsConnection_SOME?: InputMaybe<PoliticalPositionSimilar_PositionsConnectionWhere>;
  similar_positionsAggregate?: InputMaybe<PoliticalPositionSimilar_PositionsAggregateInput>;
};

/** Input type for options that can be specified on a query operation. */
export type QueryOptions = {
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SimilarityInfoAggregationWhereInput = {
  AND?: InputMaybe<Array<SimilarityInfoAggregationWhereInput>>;
  OR?: InputMaybe<Array<SimilarityInfoAggregationWhereInput>>;
  NOT?: InputMaybe<SimilarityInfoAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  weight_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SimilarityInfoCreateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SimilarityInfoSort = {
  details?: InputMaybe<SortDirection>;
  weight?: InputMaybe<SortDirection>;
};

export type SimilarityInfoUpdateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
  weight_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  weight_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  weight_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SimilarityInfoWhere = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT?: InputMaybe<Scalars["String"]["input"]>;
  details_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  details_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  details_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  details_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weight_NOT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weight_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  weight_LT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  weight_GT?: InputMaybe<Scalars["Float"]["input"]>;
  weight_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  OR?: InputMaybe<Array<SimilarityInfoWhere>>;
  AND?: InputMaybe<Array<SimilarityInfoWhere>>;
  NOT?: InputMaybe<SimilarityInfoWhere>;
};

export type UserConnectInput = {
  platform?: InputMaybe<Array<UserPlatformConnectFieldInput>>;
  owner?: InputMaybe<UserOwnerConnectInput>;
};

export type UserConnectOrCreateInput = {
  platform?: InputMaybe<Array<UserPlatformConnectOrCreateFieldInput>>;
  owner?: InputMaybe<UserOwnerConnectOrCreateInput>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  platform_user: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
  platform?: InputMaybe<UserPlatformFieldInput>;
  owner?: InputMaybe<UserOwnerCreateInput>;
};

export type UserDeleteInput = {
  platform?: InputMaybe<Array<UserPlatformDeleteFieldInput>>;
  owner?: InputMaybe<UserOwnerDeleteInput>;
};

export type UserDisconnectInput = {
  platform?: InputMaybe<Array<UserPlatformDisconnectFieldInput>>;
  owner?: InputMaybe<UserOwnerDisconnectInput>;
};

export type UserInfoAggregationWhereInput = {
  AND?: InputMaybe<Array<UserInfoAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserInfoAggregationWhereInput>>;
  NOT?: InputMaybe<UserInfoAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  details_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  details_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  user_since_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  user_since_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  user_since_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  user_since_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  user_since_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserInfoCreateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  user_since?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserInfoSort = {
  details?: InputMaybe<SortDirection>;
  user_since?: InputMaybe<SortDirection>;
};

export type UserInfoUpdateInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  user_since?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserInfoWhere = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT?: InputMaybe<Scalars["String"]["input"]>;
  details_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  details_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  details_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  details_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  details_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  user_since?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  user_since_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  user_since_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  user_since_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_since_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<UserInfoWhere>>;
  AND?: InputMaybe<Array<UserInfoWhere>>;
  NOT?: InputMaybe<UserInfoWhere>;
};

export type UserOnCreateInput = {
  platform_user: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserOwnerConnectInput = {
  Organization?: InputMaybe<Array<UserOwnerOrganizationConnectFieldInput>>;
  Person?: InputMaybe<Array<UserOwnerPersonConnectFieldInput>>;
};

export type UserOwnerConnectionSort = {
  edge?: InputMaybe<OwnershipInfoSort>;
};

export type UserOwnerConnectionWhere = {
  Organization?: InputMaybe<UserOwnerOrganizationConnectionWhere>;
  Person?: InputMaybe<UserOwnerPersonConnectionWhere>;
};

export type UserOwnerConnectOrCreateInput = {
  Organization?: InputMaybe<
    Array<UserOwnerOrganizationConnectOrCreateFieldInput>
  >;
  Person?: InputMaybe<Array<UserOwnerPersonConnectOrCreateFieldInput>>;
};

export type UserOwnerCreateFieldInput = {
  Organization?: InputMaybe<Array<UserOwnerOrganizationCreateFieldInput>>;
  Person?: InputMaybe<Array<UserOwnerPersonCreateFieldInput>>;
};

export type UserOwnerCreateInput = {
  Organization?: InputMaybe<UserOwnerOrganizationFieldInput>;
  Person?: InputMaybe<UserOwnerPersonFieldInput>;
};

export type UserOwnerDeleteInput = {
  Organization?: InputMaybe<Array<UserOwnerOrganizationDeleteFieldInput>>;
  Person?: InputMaybe<Array<UserOwnerPersonDeleteFieldInput>>;
};

export type UserOwnerDisconnectInput = {
  Organization?: InputMaybe<Array<UserOwnerOrganizationDisconnectFieldInput>>;
  Person?: InputMaybe<Array<UserOwnerPersonDisconnectFieldInput>>;
};

export type UserOwnerOrganizationConnectFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
};

export type UserOwnerOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<UserOwnerOrganizationConnectionWhere>>;
  OR?: InputMaybe<Array<UserOwnerOrganizationConnectionWhere>>;
  NOT?: InputMaybe<UserOwnerOrganizationConnectionWhere>;
  node?: InputMaybe<OrganizationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<OrganizationWhere>;
  edge?: InputMaybe<OwnershipInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<OwnershipInfoWhere>;
};

export type UserOwnerOrganizationConnectOrCreateFieldInput = {
  where: OrganizationConnectOrCreateWhere;
  onCreate: UserOwnerOrganizationConnectOrCreateFieldInputOnCreate;
};

export type UserOwnerOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
  edge?: InputMaybe<OwnershipInfoCreateInput>;
};

export type UserOwnerOrganizationCreateFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  node: OrganizationCreateInput;
};

export type UserOwnerOrganizationDeleteFieldInput = {
  where?: InputMaybe<UserOwnerOrganizationConnectionWhere>;
  delete?: InputMaybe<OrganizationDeleteInput>;
};

export type UserOwnerOrganizationDisconnectFieldInput = {
  where?: InputMaybe<UserOwnerOrganizationConnectionWhere>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
};

export type UserOwnerOrganizationFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<UserOwnerOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserOwnerOrganizationConnectFieldInput>>;
  create?: InputMaybe<Array<UserOwnerOrganizationCreateFieldInput>>;
};

export type UserOwnerOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
  edge?: InputMaybe<OwnershipInfoUpdateInput>;
};

export type UserOwnerOrganizationUpdateFieldInput = {
  where?: InputMaybe<UserOwnerOrganizationConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<UserOwnerOrganizationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserOwnerOrganizationConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserOwnerOrganizationDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserOwnerOrganizationCreateFieldInput>>;
  update?: InputMaybe<UserOwnerOrganizationUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserOwnerOrganizationDeleteFieldInput>>;
};

export type UserOwnerPersonConnectFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  where?: InputMaybe<PersonConnectWhere>;
  connect?: InputMaybe<Array<PersonConnectInput>>;
};

export type UserOwnerPersonConnectionWhere = {
  AND?: InputMaybe<Array<UserOwnerPersonConnectionWhere>>;
  OR?: InputMaybe<Array<UserOwnerPersonConnectionWhere>>;
  NOT?: InputMaybe<UserOwnerPersonConnectionWhere>;
  node?: InputMaybe<PersonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PersonWhere>;
  edge?: InputMaybe<OwnershipInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<OwnershipInfoWhere>;
};

export type UserOwnerPersonConnectOrCreateFieldInput = {
  where: PersonConnectOrCreateWhere;
  onCreate: UserOwnerPersonConnectOrCreateFieldInputOnCreate;
};

export type UserOwnerPersonConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
  edge?: InputMaybe<OwnershipInfoCreateInput>;
};

export type UserOwnerPersonCreateFieldInput = {
  edge?: InputMaybe<OwnershipInfoCreateInput>;
  node: PersonCreateInput;
};

export type UserOwnerPersonDeleteFieldInput = {
  where?: InputMaybe<UserOwnerPersonConnectionWhere>;
  delete?: InputMaybe<PersonDeleteInput>;
};

export type UserOwnerPersonDisconnectFieldInput = {
  where?: InputMaybe<UserOwnerPersonConnectionWhere>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
};

export type UserOwnerPersonFieldInput = {
  connectOrCreate?: InputMaybe<Array<UserOwnerPersonConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserOwnerPersonConnectFieldInput>>;
  create?: InputMaybe<Array<UserOwnerPersonCreateFieldInput>>;
};

export type UserOwnerPersonUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
  edge?: InputMaybe<OwnershipInfoUpdateInput>;
};

export type UserOwnerPersonUpdateFieldInput = {
  where?: InputMaybe<UserOwnerPersonConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<UserOwnerPersonConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserOwnerPersonConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserOwnerPersonDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserOwnerPersonCreateFieldInput>>;
  update?: InputMaybe<UserOwnerPersonUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserOwnerPersonDeleteFieldInput>>;
};

export type UserOwnerUpdateInput = {
  Organization?: InputMaybe<Array<UserOwnerOrganizationUpdateFieldInput>>;
  Person?: InputMaybe<Array<UserOwnerPersonUpdateFieldInput>>;
};

export type UserPlatformAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserPlatformAggregateInput>>;
  OR?: InputMaybe<Array<UserPlatformAggregateInput>>;
  NOT?: InputMaybe<UserPlatformAggregateInput>;
  node?: InputMaybe<UserPlatformNodeAggregationWhereInput>;
  edge?: InputMaybe<UserInfoAggregationWhereInput>;
};

export type UserPlatformConnectFieldInput = {
  edge?: InputMaybe<UserInfoCreateInput>;
  where?: InputMaybe<MediaChannelConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<MediaChannelConnectInput>>;
};

export type UserPlatformConnectionSort = {
  node?: InputMaybe<MediaChannelSort>;
  edge?: InputMaybe<UserInfoSort>;
};

export type UserPlatformConnectionWhere = {
  AND?: InputMaybe<Array<UserPlatformConnectionWhere>>;
  OR?: InputMaybe<Array<UserPlatformConnectionWhere>>;
  NOT?: InputMaybe<UserPlatformConnectionWhere>;
  node?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MediaChannelWhere>;
  edge?: InputMaybe<UserInfoWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<UserInfoWhere>;
};

export type UserPlatformConnectOrCreateFieldInput = {
  where: MediaChannelConnectOrCreateWhere;
  onCreate: UserPlatformConnectOrCreateFieldInputOnCreate;
};

export type UserPlatformConnectOrCreateFieldInputOnCreate = {
  node: MediaChannelOnCreateInput;
  edge?: InputMaybe<UserInfoCreateInput>;
};

export type UserPlatformCreateFieldInput = {
  edge?: InputMaybe<UserInfoCreateInput>;
  node: MediaChannelCreateInput;
};

export type UserPlatformDeleteFieldInput = {
  where?: InputMaybe<UserPlatformConnectionWhere>;
  delete?: InputMaybe<MediaChannelDeleteInput>;
};

export type UserPlatformDisconnectFieldInput = {
  where?: InputMaybe<UserPlatformConnectionWhere>;
  disconnect?: InputMaybe<MediaChannelDisconnectInput>;
};

export type UserPlatformFieldInput = {
  connectOrCreate?: InputMaybe<Array<UserPlatformConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserPlatformConnectFieldInput>>;
  create?: InputMaybe<Array<UserPlatformCreateFieldInput>>;
};

export type UserPlatformNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserPlatformNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserPlatformNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserPlatformNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  category_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  category_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  category_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  category_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  wiki_tag_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  wiki_tag_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  wiki_tag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wiki_tag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  ticker_symbol_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  ticker_symbol_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  ticker_symbol_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  ticker_symbol_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  exchange_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  exchange_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  exchange_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  exchange_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserPlatformUpdateConnectionInput = {
  node?: InputMaybe<MediaChannelUpdateInput>;
  edge?: InputMaybe<UserInfoUpdateInput>;
};

export type UserPlatformUpdateFieldInput = {
  where?: InputMaybe<UserPlatformConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<UserPlatformConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserPlatformConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserPlatformDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserPlatformCreateFieldInput>>;
  update?: InputMaybe<UserPlatformUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserPlatformDeleteFieldInput>>;
};

export type UserRelationInput = {
  platform?: InputMaybe<Array<UserPlatformCreateFieldInput>>;
  owner?: InputMaybe<UserOwnerCreateFieldInput>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  platform_user?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  platform_user?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  platform_user?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  platform?: InputMaybe<Array<UserPlatformUpdateFieldInput>>;
  owner?: InputMaybe<UserOwnerUpdateInput>;
};

export type UserWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  platform_user?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  platform_user_NOT?: InputMaybe<Scalars["String"]["input"]>;
  platform_user_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  platform_user_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  platform_user_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  platform_user_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  platform_user_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  platform_user_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  platform_user_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  platform_user_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT?: InputMaybe<Scalars["String"]["input"]>;
  username_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  username_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  username_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  username_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  /** @deprecated Use `platform_SOME` instead. */
  platform?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Use `platform_NONE` instead. */
  platform_NOT?: InputMaybe<MediaChannelWhere>;
  /** Return Users where all of the related MediaChannels match this filter */
  platform_ALL?: InputMaybe<MediaChannelWhere>;
  /** Return Users where none of the related MediaChannels match this filter */
  platform_NONE?: InputMaybe<MediaChannelWhere>;
  /** Return Users where one of the related MediaChannels match this filter */
  platform_SINGLE?: InputMaybe<MediaChannelWhere>;
  /** Return Users where some of the related MediaChannels match this filter */
  platform_SOME?: InputMaybe<MediaChannelWhere>;
  /** @deprecated Use `platformConnection_SOME` instead. */
  platformConnection?: InputMaybe<UserPlatformConnectionWhere>;
  /** @deprecated Use `platformConnection_NONE` instead. */
  platformConnection_NOT?: InputMaybe<UserPlatformConnectionWhere>;
  /** Return Users where all of the related UserPlatformConnections match this filter */
  platformConnection_ALL?: InputMaybe<UserPlatformConnectionWhere>;
  /** Return Users where none of the related UserPlatformConnections match this filter */
  platformConnection_NONE?: InputMaybe<UserPlatformConnectionWhere>;
  /** Return Users where one of the related UserPlatformConnections match this filter */
  platformConnection_SINGLE?: InputMaybe<UserPlatformConnectionWhere>;
  /** Return Users where some of the related UserPlatformConnections match this filter */
  platformConnection_SOME?: InputMaybe<UserPlatformConnectionWhere>;
  platformAggregate?: InputMaybe<UserPlatformAggregateInput>;
  /** @deprecated Use `owner_SOME` instead. */
  owner?: InputMaybe<EntityWhere>;
  /** @deprecated Use `owner_NONE` instead. */
  owner_NOT?: InputMaybe<EntityWhere>;
  /** Return Users where all of the related Entities match this filter */
  owner_ALL?: InputMaybe<EntityWhere>;
  /** Return Users where none of the related Entities match this filter */
  owner_NONE?: InputMaybe<EntityWhere>;
  /** Return Users where one of the related Entities match this filter */
  owner_SINGLE?: InputMaybe<EntityWhere>;
  /** Return Users where some of the related Entities match this filter */
  owner_SOME?: InputMaybe<EntityWhere>;
  /** @deprecated Use `ownerConnection_SOME` instead. */
  ownerConnection?: InputMaybe<UserOwnerConnectionWhere>;
  /** @deprecated Use `ownerConnection_NONE` instead. */
  ownerConnection_NOT?: InputMaybe<UserOwnerConnectionWhere>;
  /** Return Users where all of the related UserOwnerConnections match this filter */
  ownerConnection_ALL?: InputMaybe<UserOwnerConnectionWhere>;
  /** Return Users where none of the related UserOwnerConnections match this filter */
  ownerConnection_NONE?: InputMaybe<UserOwnerConnectionWhere>;
  /** Return Users where one of the related UserOwnerConnections match this filter */
  ownerConnection_SINGLE?: InputMaybe<UserOwnerConnectionWhere>;
  /** Return Users where some of the related UserOwnerConnections match this filter */
  ownerConnection_SOME?: InputMaybe<UserOwnerConnectionWhere>;
};

export interface ArticleAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  title?: boolean;
  abstract?: boolean;
  summary?: boolean;
  retrieved_url?: boolean;
}

export declare class ArticleModel {
  public find(args?: {
    where?: ArticleWhere;

    options?: ArticleOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Article[]>;
  public create(args: {
    input: ArticleCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateArticlesMutationResponse>;
  public update(args: {
    where?: ArticleWhere;
    update?: ArticleUpdateInput;
    connect?: ArticleConnectInput;
    disconnect?: ArticleDisconnectInput;
    create?: ArticleCreateInput;
    connectOrCreate?: ArticleConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateArticlesMutationResponse>;
  public delete(args: {
    where?: ArticleWhere;
    delete?: ArticleDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ArticleWhere;

    aggregate: ArticleAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ArticleAggregateSelection>;
}

export interface BeliefAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  summary?: boolean;
  wiki_tag?: boolean;
}

export declare class BeliefModel {
  public find(args?: {
    where?: BeliefWhere;

    options?: BeliefOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Belief[]>;
  public create(args: {
    input: BeliefCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateBeliefsMutationResponse>;
  public update(args: {
    where?: BeliefWhere;
    update?: BeliefUpdateInput;
    connect?: BeliefConnectInput;
    disconnect?: BeliefDisconnectInput;
    create?: BeliefCreateInput;
    connectOrCreate?: BeliefConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateBeliefsMutationResponse>;
  public delete(args: {
    where?: BeliefWhere;
    delete?: BeliefDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: BeliefWhere;

    aggregate: BeliefAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<BeliefAggregateSelection>;
}

export interface CommentAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  title?: boolean;
  text?: boolean;
}

export declare class CommentModel {
  public find(args?: {
    where?: CommentWhere;

    options?: CommentOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Comment[]>;
  public create(args: {
    input: CommentCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCommentsMutationResponse>;
  public update(args: {
    where?: CommentWhere;
    update?: CommentUpdateInput;
    connect?: CommentConnectInput;
    disconnect?: CommentDisconnectInput;
    create?: CommentCreateInput;
    connectOrCreate?: CommentConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCommentsMutationResponse>;
  public delete(args: {
    where?: CommentWhere;
    delete?: CommentDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CommentWhere;

    aggregate: CommentAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CommentAggregateSelection>;
}

export interface MediaChannelAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  category?: boolean;
  wiki_tag?: boolean;
  ticker_symbol?: boolean;
  exchange?: boolean;
}

export declare class MediaChannelModel {
  public find(args?: {
    where?: MediaChannelWhere;

    options?: MediaChannelOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<MediaChannel[]>;
  public create(args: {
    input: MediaChannelCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMediaChannelsMutationResponse>;
  public update(args: {
    where?: MediaChannelWhere;
    update?: MediaChannelUpdateInput;
    connect?: MediaChannelConnectInput;
    disconnect?: MediaChannelDisconnectInput;
    create?: MediaChannelCreateInput;
    connectOrCreate?: MediaChannelConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMediaChannelsMutationResponse>;
  public delete(args: {
    where?: MediaChannelWhere;
    delete?: MediaChannelDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MediaChannelWhere;

    aggregate: MediaChannelAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MediaChannelAggregateSelection>;
}

export interface OrganizationAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  category?: boolean;
  wiki_tag?: boolean;
  ticker_symbol?: boolean;
  exchange?: boolean;
}

export declare class OrganizationModel {
  public find(args?: {
    where?: OrganizationWhere;

    options?: OrganizationOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Organization[]>;
  public create(args: {
    input: OrganizationCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateOrganizationsMutationResponse>;
  public update(args: {
    where?: OrganizationWhere;
    update?: OrganizationUpdateInput;
    connect?: OrganizationConnectInput;
    disconnect?: OrganizationDisconnectInput;
    create?: OrganizationCreateInput;
    connectOrCreate?: OrganizationConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateOrganizationsMutationResponse>;
  public delete(args: {
    where?: OrganizationWhere;
    delete?: OrganizationDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: OrganizationWhere;

    aggregate: OrganizationAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<OrganizationAggregateSelection>;
}

export interface PersonAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  bio?: boolean;
  wiki_tag?: boolean;
  byline_tag?: boolean;
}

export declare class PersonModel {
  public find(args?: {
    where?: PersonWhere;

    options?: PersonOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Person[]>;
  public create(args: {
    input: PersonCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePeopleMutationResponse>;
  public update(args: {
    where?: PersonWhere;
    update?: PersonUpdateInput;
    connect?: PersonConnectInput;
    disconnect?: PersonDisconnectInput;
    create?: PersonCreateInput;
    connectOrCreate?: PersonConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePeopleMutationResponse>;
  public delete(args: {
    where?: PersonWhere;
    delete?: PersonDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PersonWhere;

    aggregate: PersonAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PersonAggregateSelection>;
}

export interface PoliticalPositionAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  summary?: boolean;
  wiki_tag?: boolean;
}

export declare class PoliticalPositionModel {
  public find(args?: {
    where?: PoliticalPositionWhere;

    options?: PoliticalPositionOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<PoliticalPosition[]>;
  public create(args: {
    input: PoliticalPositionCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePoliticalPositionsMutationResponse>;
  public update(args: {
    where?: PoliticalPositionWhere;
    update?: PoliticalPositionUpdateInput;
    connect?: PoliticalPositionConnectInput;
    disconnect?: PoliticalPositionDisconnectInput;
    create?: PoliticalPositionCreateInput;
    connectOrCreate?: PoliticalPositionConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePoliticalPositionsMutationResponse>;
  public delete(args: {
    where?: PoliticalPositionWhere;
    delete?: PoliticalPositionDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PoliticalPositionWhere;

    aggregate: PoliticalPositionAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PoliticalPositionAggregateSelection>;
}

export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  platform_user?: boolean;
  username?: boolean;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;
    connectOrCreate?: UserConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface ModelMap {
  Article: ArticleModel;
  Belief: BeliefModel;
  Comment: CommentModel;
  MediaChannel: MediaChannelModel;
  Organization: OrganizationModel;
  Person: PersonModel;
  PoliticalPosition: PoliticalPositionModel;
  User: UserModel;
}
