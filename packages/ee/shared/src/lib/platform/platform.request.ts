import { ApId } from '@activepieces/shared'
import { Type, Static } from '@sinclair/typebox'
import { FilteredPieceBehavior } from './platform.model'

export const UpdatePlatformRequestBody = Type.Object({
    name: Type.Optional(Type.String()),
    primaryColor: Type.Optional(Type.String()),
    logoIconUrl: Type.Optional(Type.String()),
    fullLogoUrl: Type.Optional(Type.String()),
    favIconUrl: Type.Optional(Type.String()),
    filteredPieceNames: Type.Optional(Type.Array(Type.String())),
    filteredPieceBehavior: Type.Optional(Type.Enum(FilteredPieceBehavior)),
})

export type UpdatePlatformRequestBody = Static<typeof UpdatePlatformRequestBody>

export const AdminAddPlatformRequestBody = Type.Object({
    userId: ApId,
    projectId: ApId,
    name: Type.String(),
    primaryColor: Type.Optional(Type.String()),
    logoIconUrl: Type.Optional(Type.String()),
    fullLogoUrl: Type.Optional(Type.String()),
    favIconUrl: Type.Optional(Type.String()),
})

export type AdminAddPlatformRequestBody = Static<typeof AdminAddPlatformRequestBody>