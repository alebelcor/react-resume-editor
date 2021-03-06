module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePosition {
  count: Int!
}

type AggregateResume {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createPosition(data: PositionCreateInput!): Position!
  updatePosition(data: PositionUpdateInput!, where: PositionWhereUniqueInput!): Position
  updateManyPositions(data: PositionUpdateManyMutationInput!, where: PositionWhereInput): BatchPayload!
  upsertPosition(where: PositionWhereUniqueInput!, create: PositionCreateInput!, update: PositionUpdateInput!): Position!
  deletePosition(where: PositionWhereUniqueInput!): Position
  deleteManyPositions(where: PositionWhereInput): BatchPayload!
  createResume(data: ResumeCreateInput!): Resume!
  updateResume(data: ResumeUpdateInput!, where: ResumeWhereUniqueInput!): Resume
  updateManyResumes(data: ResumeUpdateManyMutationInput!, where: ResumeWhereInput): BatchPayload!
  upsertResume(where: ResumeWhereUniqueInput!, create: ResumeCreateInput!, update: ResumeUpdateInput!): Resume!
  deleteResume(where: ResumeWhereUniqueInput!): Resume
  deleteManyResumes(where: ResumeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Position {
  id: ID!
  title: String
  company: String
  description: String
  year: Int
  owner: Resume!
}

type PositionConnection {
  pageInfo: PageInfo!
  edges: [PositionEdge]!
  aggregate: AggregatePosition!
}

input PositionCreateInput {
  id: ID
  title: String
  company: String
  description: String
  year: Int
  owner: ResumeCreateOneWithoutPositionInput!
}

input PositionCreateManyWithoutOwnerInput {
  create: [PositionCreateWithoutOwnerInput!]
  connect: [PositionWhereUniqueInput!]
}

input PositionCreateWithoutOwnerInput {
  id: ID
  title: String
  company: String
  description: String
  year: Int
}

type PositionEdge {
  node: Position!
  cursor: String!
}

enum PositionOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  company_ASC
  company_DESC
  description_ASC
  description_DESC
  year_ASC
  year_DESC
}

type PositionPreviousValues {
  id: ID!
  title: String
  company: String
  description: String
  year: Int
}

input PositionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  AND: [PositionScalarWhereInput!]
  OR: [PositionScalarWhereInput!]
  NOT: [PositionScalarWhereInput!]
}

type PositionSubscriptionPayload {
  mutation: MutationType!
  node: Position
  updatedFields: [String!]
  previousValues: PositionPreviousValues
}

input PositionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PositionWhereInput
  AND: [PositionSubscriptionWhereInput!]
  OR: [PositionSubscriptionWhereInput!]
  NOT: [PositionSubscriptionWhereInput!]
}

input PositionUpdateInput {
  title: String
  company: String
  description: String
  year: Int
  owner: ResumeUpdateOneRequiredWithoutPositionInput
}

input PositionUpdateManyDataInput {
  title: String
  company: String
  description: String
  year: Int
}

input PositionUpdateManyMutationInput {
  title: String
  company: String
  description: String
  year: Int
}

input PositionUpdateManyWithoutOwnerInput {
  create: [PositionCreateWithoutOwnerInput!]
  delete: [PositionWhereUniqueInput!]
  connect: [PositionWhereUniqueInput!]
  set: [PositionWhereUniqueInput!]
  disconnect: [PositionWhereUniqueInput!]
  update: [PositionUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [PositionUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [PositionScalarWhereInput!]
  updateMany: [PositionUpdateManyWithWhereNestedInput!]
}

input PositionUpdateManyWithWhereNestedInput {
  where: PositionScalarWhereInput!
  data: PositionUpdateManyDataInput!
}

input PositionUpdateWithoutOwnerDataInput {
  title: String
  company: String
  description: String
  year: Int
}

input PositionUpdateWithWhereUniqueWithoutOwnerInput {
  where: PositionWhereUniqueInput!
  data: PositionUpdateWithoutOwnerDataInput!
}

input PositionUpsertWithWhereUniqueWithoutOwnerInput {
  where: PositionWhereUniqueInput!
  update: PositionUpdateWithoutOwnerDataInput!
  create: PositionCreateWithoutOwnerInput!
}

input PositionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  owner: ResumeWhereInput
  AND: [PositionWhereInput!]
  OR: [PositionWhereInput!]
  NOT: [PositionWhereInput!]
}

input PositionWhereUniqueInput {
  id: ID
}

type Query {
  position(where: PositionWhereUniqueInput!): Position
  positions(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Position]!
  positionsConnection(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PositionConnection!
  resume(where: ResumeWhereUniqueInput!): Resume
  resumes(where: ResumeWhereInput, orderBy: ResumeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resume]!
  resumesConnection(where: ResumeWhereInput, orderBy: ResumeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResumeConnection!
  node(id: ID!): Node
}

type Resume {
  id: ID!
  name: String!
  email: String!
  linkedInUrl: String
  githubUrl: String
  position(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Position!]
}

type ResumeConnection {
  pageInfo: PageInfo!
  edges: [ResumeEdge]!
  aggregate: AggregateResume!
}

input ResumeCreateInput {
  id: ID
  name: String!
  email: String!
  linkedInUrl: String
  githubUrl: String
  position: PositionCreateManyWithoutOwnerInput
}

input ResumeCreateOneWithoutPositionInput {
  create: ResumeCreateWithoutPositionInput
  connect: ResumeWhereUniqueInput
}

input ResumeCreateWithoutPositionInput {
  id: ID
  name: String!
  email: String!
  linkedInUrl: String
  githubUrl: String
}

type ResumeEdge {
  node: Resume!
  cursor: String!
}

enum ResumeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  linkedInUrl_ASC
  linkedInUrl_DESC
  githubUrl_ASC
  githubUrl_DESC
}

type ResumePreviousValues {
  id: ID!
  name: String!
  email: String!
  linkedInUrl: String
  githubUrl: String
}

type ResumeSubscriptionPayload {
  mutation: MutationType!
  node: Resume
  updatedFields: [String!]
  previousValues: ResumePreviousValues
}

input ResumeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ResumeWhereInput
  AND: [ResumeSubscriptionWhereInput!]
  OR: [ResumeSubscriptionWhereInput!]
  NOT: [ResumeSubscriptionWhereInput!]
}

input ResumeUpdateInput {
  name: String
  email: String
  linkedInUrl: String
  githubUrl: String
  position: PositionUpdateManyWithoutOwnerInput
}

input ResumeUpdateManyMutationInput {
  name: String
  email: String
  linkedInUrl: String
  githubUrl: String
}

input ResumeUpdateOneRequiredWithoutPositionInput {
  create: ResumeCreateWithoutPositionInput
  update: ResumeUpdateWithoutPositionDataInput
  upsert: ResumeUpsertWithoutPositionInput
  connect: ResumeWhereUniqueInput
}

input ResumeUpdateWithoutPositionDataInput {
  name: String
  email: String
  linkedInUrl: String
  githubUrl: String
}

input ResumeUpsertWithoutPositionInput {
  update: ResumeUpdateWithoutPositionDataInput!
  create: ResumeCreateWithoutPositionInput!
}

input ResumeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  linkedInUrl: String
  linkedInUrl_not: String
  linkedInUrl_in: [String!]
  linkedInUrl_not_in: [String!]
  linkedInUrl_lt: String
  linkedInUrl_lte: String
  linkedInUrl_gt: String
  linkedInUrl_gte: String
  linkedInUrl_contains: String
  linkedInUrl_not_contains: String
  linkedInUrl_starts_with: String
  linkedInUrl_not_starts_with: String
  linkedInUrl_ends_with: String
  linkedInUrl_not_ends_with: String
  githubUrl: String
  githubUrl_not: String
  githubUrl_in: [String!]
  githubUrl_not_in: [String!]
  githubUrl_lt: String
  githubUrl_lte: String
  githubUrl_gt: String
  githubUrl_gte: String
  githubUrl_contains: String
  githubUrl_not_contains: String
  githubUrl_starts_with: String
  githubUrl_not_starts_with: String
  githubUrl_ends_with: String
  githubUrl_not_ends_with: String
  position_every: PositionWhereInput
  position_some: PositionWhereInput
  position_none: PositionWhereInput
  AND: [ResumeWhereInput!]
  OR: [ResumeWhereInput!]
  NOT: [ResumeWhereInput!]
}

input ResumeWhereUniqueInput {
  id: ID
}

type Subscription {
  position(where: PositionSubscriptionWhereInput): PositionSubscriptionPayload
  resume(where: ResumeSubscriptionWhereInput): ResumeSubscriptionPayload
}
`
      }
    