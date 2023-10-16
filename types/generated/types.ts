export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

/** Asset */
export type Asset = {
  __typename?: 'Asset';
  blurhash: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  mimeType: Scalars['String'];
  owner: User;
  size: Scalars['Float'];
  slug: Scalars['String'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Float']>;
};

export type AssetsResponse = {
  __typename?: 'AssetsResponse';
  assets?: Maybe<Array<Asset>>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum AuthRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  User = 'USER'
}

/** Create Sites Response */
export type DeploySiteResponse = {
  __typename?: 'DeploySiteResponse';
  message?: Maybe<Scalars['String']>;
  siteId?: Maybe<Scalars['String']>;
  status?: Maybe<SiteStatus>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Domain = {
  __typename?: 'Domain';
  boughtAt?: Maybe<Scalars['Float']>;
  createdAt: Scalars['Float'];
  creator: DomainCreator;
  customNameservers?: Maybe<Array<Scalars['String']>>;
  expiresAt?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  intendedNameservers: Array<Scalars['String']>;
  name: Scalars['String'];
  nameservers: Array<Scalars['String']>;
  orderedAt?: Maybe<Scalars['Float']>;
  renew: Scalars['Boolean'];
  serviceType: Scalars['String'];
  suffix: Scalars['Boolean'];
  transferStartedAt?: Maybe<Scalars['Float']>;
  transferredAt?: Maybe<Scalars['Float']>;
  verified: Scalars['Boolean'];
};

export type DomainConfigurationInterface = {
  __typename?: 'DomainConfigurationInterface';
  acceptedChallenges?: Maybe<Array<Scalars['String']>>;
  configuredBy?: Maybe<Scalars['String']>;
  misconfigured: Scalars['Boolean'];
};

/** Domain Configuration Response */
export type DomainConfigurationResponse = {
  __typename?: 'DomainConfigurationResponse';
  data?: Maybe<DomainConfigurationInterface>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DomainCreator = {
  __typename?: 'DomainCreator';
  customerId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  isDomainReseller?: Maybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type DomainInformationResponse = {
  __typename?: 'DomainInformationResponse';
  data: DomainResponse;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DomainPriceResponse = {
  __typename?: 'DomainPriceResponse';
  data: Response;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Domain Information */
export type DomainRegisterResponse = {
  __typename?: 'DomainRegisterResponse';
  data: ResponseInterface;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Domain Information */
export type DomainResponse = {
  __typename?: 'DomainResponse';
  domain: Domain;
};

export type DomainVerification = {
  __typename?: 'DomainVerification';
  domain: Scalars['String'];
  reason: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export enum FrameworkEnum {
  Gatsbyjs = 'GATSBYJS',
  Nextjs = 'NEXTJS'
}

export enum GitProvider {
  Bitbucket = 'Bitbucket',
  Github = 'Github'
}

/** Git Repository / Source */
export type GitRepository = {
  __typename?: 'GitRepository';
  ref?: Maybe<Scalars['String']>;
  repoId: Scalars['Float'];
  target?: Maybe<Scalars['String']>;
  type?: Maybe<GitProvider>;
  url?: Maybe<Scalars['String']>;
};

/** Git Repository Input */
export type GitRepositoryInput = {
  ref?: InputMaybe<Scalars['String']>;
  repoId: Scalars['String'];
  target?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<GitProvider>;
  url?: InputMaybe<Scalars['String']>;
};

export type Hosting = {
  __typename?: 'Hosting';
  privateKey?: Maybe<Scalars['String']>;
  provider?: Maybe<HostingProvider>;
  publicKey?: Maybe<Scalars['String']>;
};

export enum HostingProvider {
  Netlify = 'NETLIFY',
  Vercel = 'VERCEL',
  Podium = 'podium'
}

export type Mutation = {
  __typename?: 'Mutation';
  addCustomDomain: SiteResponse;
  assignParent: PageResponse;
  createPage: PageResponse;
  createSite: SiteResponse;
  createTemplate: TemplateResponse;
  createUser: UserResponse;
  deleteAllUserAssets: AssetsResponse;
  deleteAsset: AssetsResponse;
  deleteAssetsByIds: AssetsResponse;
  deleteCustomDomain: SiteResponse;
  deletePage: PageResponse;
  deleteSite: ResponseSchema;
  deleteTemplate: ResponseSchema;
  deploySite: DeploySiteResponse;
  publishPage: PageResponse;
  removeSiteLogo: SiteResponse;
  updatePage: PageResponse;
  updateSite: SiteResponse;
  updateSiteLogo: SiteResponse;
  updateSitePagesPriority: ResponseSchema;
  updateTemplateBannerImage: TemplateResponse;
  updateUser: UserResponse;
};


export type MutationAddCustomDomainArgs = {
  domainName: Scalars['String'];
  siteId: Scalars['String'];
};


export type MutationAssignParentArgs = {
  pageId: Scalars['String'];
  parentId: Scalars['String'];
};


export type MutationCreatePageArgs = {
  name: Scalars['String'];
  parent?: InputMaybe<Scalars['String']>;
  siteId: Scalars['String'];
};


export type MutationCreateSiteArgs = {
  data: SiteInput;
};


export type MutationCreateTemplateArgs = {
  inputData: TemplateInput;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationDeleteAssetArgs = {
  id: Scalars['String'];
};


export type MutationDeleteAssetsByIdsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationDeleteCustomDomainArgs = {
  domainName: Scalars['String'];
  siteId: Scalars['String'];
};


export type MutationDeletePageArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSiteArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTemplateArgs = {
  id: Scalars['String'];
};


export type MutationDeploySiteArgs = {
  subscriptionId: Scalars['String'];
};


export type MutationPublishPageArgs = {
  id: Scalars['String'];
};


export type MutationRemoveSiteLogoArgs = {
  logoType?: InputMaybe<Scalars['String']>;
  siteId: Scalars['String'];
};


export type MutationUpdatePageArgs = {
  draftBody: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateSiteArgs = {
  data: UpdateSiteInput;
  id: Scalars['String'];
};


export type MutationUpdateSiteLogoArgs = {
  desktopLogo?: InputMaybe<Scalars['String']>;
  mobileLogo?: InputMaybe<Scalars['String']>;
  siteId: Scalars['String'];
};


export type MutationUpdateSitePagesPriorityArgs = {
  data: UpdatePagesPriorityInput;
};


export type MutationUpdateTemplateBannerImageArgs = {
  bannerImage: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type NewDomain = {
  __typename?: 'NewDomain';
  boughtAt?: Maybe<Scalars['Float']>;
  createdAt: Scalars['Float'];
  creator: DomainCreator;
  customNameservers?: Maybe<Array<Scalars['String']>>;
  expiresAt?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  intendedNameservers: Array<Scalars['String']>;
  name: Scalars['String'];
  nameservers: Array<Scalars['String']>;
  orderedAt?: Maybe<Scalars['Float']>;
  renew: Scalars['Boolean'];
  serviceType: Scalars['String'];
  transferStartedAt?: Maybe<Scalars['Float']>;
  transferredAt?: Maybe<Scalars['Float']>;
  verified: Scalars['Boolean'];
};

/** Page: An isolated page */
export type Page = {
  __typename?: 'Page';
  body?: Maybe<Scalars['String']>;
  children: Array<Page>;
  createdAt: Scalars['DateTime'];
  draftBody?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPublic?: Maybe<Scalars['Boolean']>;
  lastPublishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  owner: Scalars['ID'];
  parent?: Maybe<Page>;
  priority: Scalars['Int'];
  seo?: Maybe<Seo>;
  showInHeader?: Maybe<Scalars['Boolean']>;
  site: Scalars['ID'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export enum PageFilterEnum {
  Any = 'ANY',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type PageResponse = {
  __typename?: 'PageResponse';
  data?: Maybe<Page>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PagesResponse = {
  __typename?: 'PagesResponse';
  data?: Maybe<Array<Page>>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  count: Scalars['Float'];
  next?: Maybe<Scalars['Float']>;
  prev?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  allMyAssets: AssetsResponse;
  checkDomainStatus: ResponseSchema;
  checkSiteNameAvailability: ResponseSchema;
  checkUser?: Maybe<Scalars['String']>;
  getAllMySite: SitesResponse;
  getAllOrphanPagesBySite: PagesResponse;
  getAllPagesBySite: PagesResponse;
  getAllSiteDomainsLinked: SiteDomainsResponse;
  getDomainConfiguration: DomainConfigurationResponse;
  getDomainInformation: DomainInformationResponse;
  getDomainPrice: DomainPriceResponse;
  getMySiteById: SiteResponse;
  getPage: PageResponse;
  getPageBySlug: PageResponse;
  getSiteById: SiteResponse;
  getSiteStatus: SiteStatusResponse;
  getTemplateById: TemplateResponse;
  getTemplates: TemplatesResponse;
  me: UserResponse;
  myLibraryUsage: Scalars['Int'];
  purchaseDomain: ResponseSchema;
  registerOrTransferInDomain: DomainRegisterResponse;
  verfiyProjectDomain: VercelProjectDomain;
};


export type QueryAllMyAssetsArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryCheckDomainStatusArgs = {
  name: Scalars['String'];
};


export type QueryCheckSiteNameAvailabilityArgs = {
  name: Scalars['String'];
};


export type QueryCheckUserArgs = {
  email: Scalars['String'];
};


export type QueryGetAllOrphanPagesBySiteArgs = {
  filter?: InputMaybe<PageFilterEnum>;
  siteId: Scalars['String'];
};


export type QueryGetAllPagesBySiteArgs = {
  filter?: InputMaybe<PageFilterEnum>;
  siteId: Scalars['String'];
};


export type QueryGetAllSiteDomainsLinkedArgs = {
  id: Scalars['String'];
};


export type QueryGetDomainConfigurationArgs = {
  domain: Scalars['String'];
};


export type QueryGetDomainInformationArgs = {
  name: Scalars['String'];
};


export type QueryGetDomainPriceArgs = {
  name: Scalars['String'];
};


export type QueryGetMySiteByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetPageArgs = {
  id: Scalars['String'];
};


export type QueryGetPageBySlugArgs = {
  filter?: InputMaybe<PageFilterEnum>;
  siteId: Scalars['String'];
  slug: Scalars['String'];
};


export type QueryGetSiteByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetSiteStatusArgs = {
  id: Scalars['String'];
};


export type QueryGetTemplateByIdArgs = {
  id: Scalars['String'];
};


export type QueryMyLibraryUsageArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryPurchaseDomainArgs = {
  expectedPrice?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  renew?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRegisterOrTransferInDomainArgs = {
  name: Scalars['String'];
};


export type QueryVerfiyProjectDomainArgs = {
  domainName: Scalars['String'];
  projectName: Scalars['String'];
};

export type Response = {
  __typename?: 'Response';
  /** The number of years the domain could be held before paying again */
  period?: Maybe<Scalars['Float']>;
  /** The domain price in USD */
  price?: Maybe<Scalars['Float']>;
};

export type ResponseInterface = {
  __typename?: 'ResponseInterface';
  domain?: Maybe<NewDomain>;
};

export type ResponseSchema = {
  __typename?: 'ResponseSchema';
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** SEO */
export type Seo = {
  __typename?: 'SEO';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Scalars['String']>>;
  page?: Maybe<Page>;
  site: Site;
  title: Scalars['String'];
};

export type Site = {
  __typename?: 'Site';
  createdAt: Scalars['DateTime'];
  customDomain?: Maybe<Array<VercelProjectDomain>>;
  desktopLogo?: Maybe<Asset>;
  headerPages?: Maybe<Array<Page>>;
  id: Scalars['ID'];
  logoPreference?: Maybe<Scalars['String']>;
  mobileLogo?: Maybe<Asset>;
  name: Scalars['String'];
  owner: Scalars['ID'];
  pages?: Maybe<Array<Page>>;
  productId?: Maybe<Scalars['String']>;
  setup: Scalars['Int'];
  slug: Scalars['String'];
  template: Scalars['ID'];
  textLogo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  vercelProjectId?: Maybe<Scalars['String']>;
};

export type SiteDomainsResponse = {
  __typename?: 'SiteDomainsResponse';
  data?: Maybe<VercelProjectDomainsResponse>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SiteInput = {
  name: Scalars['String'];
  templateId?: InputMaybe<Scalars['String']>;
};

/** Site Response */
export type SiteResponse = {
  __typename?: 'SiteResponse';
  data?: Maybe<Site>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Site Status */
export type SiteStatus = {
  __typename?: 'SiteStatus';
  createdAt?: Maybe<Scalars['Float']>;
  readyState?: Maybe<Scalars['String']>;
};

/** Site status */
export type SiteStatusResponse = {
  __typename?: 'SiteStatusResponse';
  data?: Maybe<SiteStatus>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Sites Response */
export type SitesResponse = {
  __typename?: 'SitesResponse';
  data?: Maybe<Array<Site>>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Template */
export type Template = {
  __typename?: 'Template';
  bannerImage?: Maybe<Asset>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  framework?: Maybe<FrameworkEnum>;
  gitSource: GitRepository;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** Template Input */
export type TemplateInput = {
  bannerImage?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  framework?: InputMaybe<Scalars['String']>;
  gitSource: GitRepositoryInput;
  name: Scalars['String'];
};

/** Template Response */
export type TemplateResponse = {
  __typename?: 'TemplateResponse';
  data?: Maybe<Template>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Template Response */
export type TemplatesResponse = {
  __typename?: 'TemplatesResponse';
  data?: Maybe<Array<Template>>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdatePagesPriority = {
  id: Scalars['ID'];
  priority: Scalars['Float'];
};

export type UpdatePagesPriorityInput = {
  pagesList: Array<UpdatePagesPriority>;
};

export type UpdateSiteInput = {
  desktopLogo?: InputMaybe<Scalars['ID']>;
  mobileLogo?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  textLogo?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  name?: InputMaybe<Scalars['String']>;
  onboardingState?: InputMaybe<Scalars['Int']>;
};

/** User model */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  hosting?: Maybe<Hosting>;
  id: Scalars['ID'];
  name: Scalars['String'];
  onboardingState?: Maybe<Scalars['Int']>;
  role: AuthRole;
  sites?: Maybe<Array<Site>>;
  subscription?: Maybe<Scalars['String']>;
  trialExpires?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type UserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  onboardingState?: InputMaybe<Scalars['Int']>;
  trialExpires: Scalars['String'];
};

/** User Response */
export type UserResponse = {
  __typename?: 'UserResponse';
  data?: Maybe<User>;
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Domain Response from vercel */
export type VercelProjectDomain = {
  __typename?: 'VercelProjectDomain';
  apexName: Scalars['String'];
  createdAt?: Maybe<Scalars['Float']>;
  gitBranch?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['String'];
  redirect?: Maybe<Scalars['String']>;
  redirectStatusCode?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Float']>;
  verification?: Maybe<Array<DomainVerification>>;
  verified: Scalars['Boolean'];
};

export type VercelProjectDomainsResponse = {
  __typename?: 'VercelProjectDomainsResponse';
  domains?: Maybe<Array<VercelProjectDomain>>;
  pagination: Pagination;
};
