import client from './client'

// users
 => 
 => 

// organization users
 => 
 =>
    
 => 
 => 
 =>
    

 =>
    
 => 
 =>
    
 =>
    
 =>
    
 =>
    
 => 

// workspace users
 => 
 => 
 => 
 => 
 =>
    
 => 

export default {
    getUserById,
    updateUser,
    getAllUsersByOrganizationId,
    getUserByUserIdOrganizationId,
    getOrganizationsByUserId,
    getAllUsersByWorkspaceId,
    getUserByRoleId,
    getUserByUserIdWorkspaceId,
    getWorkspacesByUserId,
    getWorkspacesByOrganizationIdUserId,
    updateOrganizationUser,
    deleteWorkspaceUser,
    getAdditionalSeatsQuantity,
    getCustomerDefaultSource,
    getAdditionalSeatsProration,
    updateAdditionalSeats,
    getPlanProration,
    updateSubscriptionPlan,
    getCurrentUsage,
    deleteOrganizationUser
}
