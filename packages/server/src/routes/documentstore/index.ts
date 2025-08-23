import express from 'express'
import { checkPermission, checkAnyPermission } from '../../enterprise/rbac/PermissionCheck'
import documentStoreController from '../../controllers/documentstore'
import { getMulterStorage } from '../../utils'



.a, 



/** Document Store Routes */
// Create document store
, 
// List all stores
, 
// Get specific store
router.get(
    '/store/:id',
    ,
    documentStoreController.getDocumentStoreById
)
// Update documentStore
, 
// Delete documentStore
, 
// Get document store configs
, 

/** Component Nodes = Document Store - Loaders */
// Get all loaders
, 

// delete loader from document store
router.delete(
    '/loader/:id/:loaderId',
    ,
    documentStoreController.deleteLoaderFromDocumentStore
)
// chunking preview
, 
// saving process
, 
// chunking process
, 

/** Document Store - Loaders - Chunks */
// delete specific file chunk from the store
router.delete(
    '/chunks/:storeId/:loaderId/:chunkId',
    ,
    documentStoreController.deleteDocumentStoreFileChunk
)
// edit specific file chunk from the store
router.put(
    '/chunks/:storeId/:loaderId/:chunkId',
    ,
    documentStoreController.editDocumentStoreFileChunk
)
// Get all file chunks from the store
, 

// add chunks to the selected vector store
, 
// save the selected vector store
, 
// delete data from the selected vector store
, 
// query the vector store
, 
// Get all embedding providers
, 
// Get all vector store providers
, 
// Get all Record Manager providers
, 

// update the selected vector store from the playground
, 

// generate docstore tool description


export default router
