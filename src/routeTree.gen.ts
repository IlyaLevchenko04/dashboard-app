/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as UsersRouteImport } from './routes/users'
import { Route as SettingsRouteImport } from './routes/settings'
import { Route as OverviewRouteImport } from './routes/overview'
import { Route as IndexRouteImport } from './routes/index'

const UsersRoute = UsersRouteImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => rootRouteImport,
} as any)
const SettingsRoute = SettingsRouteImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRouteImport,
} as any)
const OverviewRoute = OverviewRouteImport.update({
  id: '/overview',
  path: '/overview',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/overview': typeof OverviewRoute
  '/settings': typeof SettingsRoute
  '/users': typeof UsersRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/overview': typeof OverviewRoute
  '/settings': typeof SettingsRoute
  '/users': typeof UsersRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/overview': typeof OverviewRoute
  '/settings': typeof SettingsRoute
  '/users': typeof UsersRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/overview' | '/settings' | '/users'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/overview' | '/settings' | '/users'
  id: '__root__' | '/' | '/overview' | '/settings' | '/users'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  OverviewRoute: typeof OverviewRoute
  SettingsRoute: typeof SettingsRoute
  UsersRoute: typeof UsersRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/overview': {
      id: '/overview'
      path: '/overview'
      fullPath: '/overview'
      preLoaderRoute: typeof OverviewRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  OverviewRoute: OverviewRoute,
  SettingsRoute: SettingsRoute,
  UsersRoute: UsersRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
