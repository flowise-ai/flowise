import { MigrationInterface, QueryRunner } from 'typeorm'
import { decrypt, encrypt } from '../../../utils/encryption.util'
import { LoginMethodStatus } from '../../entities/login-method.entity'
import { OrganizationUserStatus } from '../../entities/organization-user.entity'
import { OrganizationName } from '../../entities/organization.entity'
import { GeneralRole } from '../../entities/role.entity'
import { UserStatus } from '../../entities/user.entity'
import { WorkspaceUserStatus } from '../../entities/workspace-user.entity'
import { WorkspaceName } from '../../entities/workspace.entity'

export class RefactorEnterpriseDatabase1737076223692 implements MigrationInterface {
    name = 'RefactorEnterpriseDatabase1737076223692'
    p: Promise<void> {
        /*-------------------------------------
        --------------- user -----------------
        --------------------------------------*/
        // rename user table to temp_user
        awa

        // create user table
        await queryRunner.query(`
            create table "user" (
                " primary key,
                "name" va not null,
                "ema not null unique,
                "credential" text null,
                "tempToken" text null,
                "tokenExpiry" timestamp null,
                " default '${UserStatus.UNVERIFIED}' not null,
                " not null,
                "up not null,
                "createdBy" uuid not null,
                "updatedBy" uuid not null,
                 ,
                 
            );
        `)

        /*-------------------------------------
        ----------- organization --------------
        --------------------------------------*/
        // rename organization table to temp_organization
        awa

        // create organization table
        await queryRunner.query(`
            create table "organization" (
                " primary key,
                "name" va default '${OrganizationName.DEFAULT_ORGANIZATION}' not null,
                " null,
                " null,
                " not null,
                "up not null,
                "createdBy" uuid not null,
                "updatedBy" uuid not null,
                 ,
                 
            );
        `)

        /*-------------------------------------
        ----------- login method --------------
        --------------------------------------*/
        // create login_method table
        await queryRunner.query(`
            create table "login_method" (
                " primary key,
                "organizationId" uuid null,
                "name" va not null,
                "config" text not null,
                " default '${LoginMethodStatus.ENABLE}'  not null,
                " not null,
                "up not null,
                "createdBy" uuid null,
                "updatedBy" uuid null,
                 ,
                 ,
                 
            );
        `)

        /*-------------------------------------
        --------------- role ------------------
        --------------------------------------*/
        // rename roles table to temp_role
        awa

        // create organization_login_method table
        await queryRunner.query(`
            create table "role" (
                " primary key,
                "organizationId" uuid null,
                "name" va not null,
                "description" text null,
                "permissions" text not null,
                " not null,
                "up not null,
                "createdBy" uuid null,
                "updatedBy" uuid null,
                 ,
                 ,
                 
            );
        `)

        /*-------------------------------------
        ---------- organization_user ----------
        --------------------------------------*/
        // create organization_user table
        await queryRunner.query(`
            create table "organization_user" (
                "organizationId" uuid not null,
                "userId" uuid not null,
                "roleId" uuid not null,
                " default '${OrganizationUserStatus.ACTIVE}' not null,
                " not null,
                "up not null,
                "createdBy" uuid not null,
                "updatedBy" uuid not null,
                ,
                 ,
                 ,
                 ,
                 ,
                 
            );
        `)

        /*-------------------------------------
        ------------- workspace ---------------
        --------------------------------------*/
        // modify workspace table
        await queryRunner.query(`
            alter table "workspace"
            drop constraint "fk_workspace_organizationId",
            alter column "organizationId" set not null,
            alte,
            alter column "description" type text,
            add column "createdBy" uuid null,
            add column "updatedBy" uuid null,
            a ,
            a ;
        `)

        // remove first if needed will be add back, will cause insert to slow
        await queryRunner.query(`
            drop index "idx_workspace_organizationId";
        `)

        /*-------------------------------------
        ----------- workspace_user ------------
        --------------------------------------*/
        // rename workspace_users table to temp_workspace_user
        awa

        // create workspace_user table
        await queryRunner.query(`
            create table "workspace_user" (
                "workspaceId" uuid not null,
                "userId" uuid not null,
                "roleId" uuid not null,
                " default '${WorkspaceUserStatus.INVITED}' not null,
                "lastLogin" timestamp null,
                " not null,
                "up not null,
                "createdBy" uuid not null,
                "updatedBy" uuid not null,
                ,
                 ,
                 ,
                 ,
                 ,
                 
            );
        `)
    }

    p {
        const workspaceWithoutUser = await queryRunner.query(`
            select w."id" as "id" from "workspace_user" as "wu"
            right join "workspace" as "w" on "wu"."workspaceId" = "w"."id"
            where "wu"."userId" is null;
        `)
         => `'${w.j

        // Delete related records from other tables that reference the deleted workspaces
         {
            await queryRunner.query(`
                ;
            `)
            await queryRunner.query(`
                ;
            `)
            await queryRunner.query(`
                ;
            `)
            const chatflows = await queryRunner.query(`
                ;
            `)
             => `'${.j
             {
                await queryRunner.query(`
                    ;
                `)
                await queryRunner.query(`
                    ;
                `)
                await queryRunner.query(`
                    ;
                `)
                await queryRunner.query(`
                    ;
                `)
            }
            await queryRunner.query(`
                ;
            `)
            await queryRunner.query(`
                ;
            `)
            const datasets = await queryRunner.query(`
                ;
            `)
             => `'${.j
             {
                await queryRunner.query(`
                    ;
                `)
                await queryRunner.query(`
                    ;
                `)
            }
            const documentStores = await queryRunner.query(`    
                ;
            `)
             => `'${.j
             {
                await queryRunner.query(`
                    ;
                `)
                await queryRunner.query(`
                    ;
                `)
            }
            const evaluations = await queryRunner.query(`
                ;
            `)
             => `'${evaluat.j
             {
                await queryRunner.query(`
                    ;
                `)
                await queryRunner.query(`
                    ;
                `)
            }
            await queryRunner.query(`
                ;
            `)
            await queryRunner.query(`
                ;
            `)
            await queryRunner.query(`
                ;
            `)
            await queryRunner.query(`
                ;
            `)
            await queryRunner.query(`
                ;
            `)
        }
    }

    p: Promise<void> {
        // insert generalRole
        const generalRole = [
            {
                name: 'owner',
                description: 'Has full control over the organization.',
                permissions: '["organization","workspace"]'
            },
            {
                name: 'member',
                description: 'Has limited control over the organization.',
                permissions: '[]'
            },
            {
                name: 'personal workspace',
                description: 'Has full control over the personal workspace',
                permissions:
                    '[ "chatflows:view", "chatflows:create", "chatflows:update", "chatflows:duplicate", "chatflows:delete", "chatflows:export", "chatflows:import", "chatflows:config", "chatflows:domains", "agentflows:view", "agentflows:create", "agentflows:update", "agentflows:duplicate", "agentflows:delete", "agentflows:export", "agentflows:import", "agentflows:config", "agentflows:domains", "tools:view", "tools:create", "tools:update", "tools:delete", "tools:export", "assistants:view", "assistants:create", "assistants:update", "assistants:delete", "credentials:view", "credentials:create", "credentials:update", "credentials:delete", "credentials:share", "variables:view", "variables:create", "variables:update", "variables:delete", "apikeys:view", "apikeys:create", "apikeys:update", "apikeys:delete", "apikeys:import", "documentStores:view", "documentStores:create", "documentStores:update", "documentStores:delete", "documentStores:add-loader", "documentStores:delete-loader", "documentStores:preview-process", "documentStores:upsert-config", "datasets:view", "datasets:create", "datasets:update", "datasets:delete", "evaluators:view", "evaluators:create", "evaluators:update", "evaluators:delete", "evaluations:view", "evaluations:create", "evaluations:update", "evaluations:delete", "evaluations:run", "templates:marketplace", "templates:custom", "templates:custom-delete", "templates:toolexport", "templates:flowexport", "templates:custom-share", "workspace:export", "workspace:import", "executions:view", "executions:delete" ]'
            }
        ]
        f {
            await queryRunner.query(`
                
                value;
            `)
        }

        
        const noExistingData = users.length > 0 === false
         return

        
        const organizationId = organizations[0].id
        const adminUserId = organizations[0].adminUserId
        ).providers : []

        /*-------------------------------------
        --------------- user -----------------
        --------------------------------------*/
        // insert user with temp_user data
        await queryRunner.query(`
            
            , tu."email", tu."credential", tu."tempToken", tu."tokenExpiry", tu."status", 
            '${adminUserId}', '${adminUserId}'
            from "temp_user" as "tu";
        `)

        /*-------------------------------------
        ----------- organization --------------
        --------------------------------------*/
        // insert organization with temp_organization data
        await queryRunner.query(`
            
            select "id", "name", "adminUserId"::uuid, "adminUserId"::uuid from "temp_organization";
        `)

        /*-------------------------------------
        ----------- login method --------------
        --------------------------------------*/
        // insert login_method with temp_organization data
        f {
            const newConfigFormat = {
                domain: config.domain === '' || config.domain === undefined ? undefined : config.domain,
                tenantID: config.tenantID === '' || config.tenantID === undefined ? undefined : config.tenantID,
                clientID: config.clientID === '' || config.clientID === undefined ? undefined : config.clientID,
                clientSecret: config.clientSecret === '' || config.clientSecret === undefined ? undefined : config.clientSecret
            }
            const status = config.configEnabled === true ? LoginMethodStatus.ENABLE : LoginMethodStatus.DISABLE

            .eve => value === un
             continue
            )

            await queryRunner.query(`
                
                value;
            `)
        }

        /*-------------------------------------
        --------------- role ------------------
        --------------------------------------*/
        // insert workspace role  into role
        
        f {
            .f => pe )
            
            value;`
            
            value;`
            const insertRoleQuery = role.description ? haveDescriptionQuery : noHaveDescriptionQuery
            awa
        }

        /*-------------------------------------
        ---------- organization_user ----------
        --------------------------------------*/
        
        // insert organization_user with user, role and temp_organization data
        f {
            const roleId =
                user.id === adminUserId
                    ?  => .id
                    :  => .id
            await queryRunner.query(`
                
                value;
            `)
        }

        /*-------------------------------------
        ------------- workspace ---------------
        --------------------------------------*/
        
        f {
            await queryRunner.query(
                `update "workspace" set "createdBy" = '${adminUserId}', "updatedBy" = '${adminUserId}' where "id" = '${workspace.id}';`
            )
        }

        /*-------------------------------------
        ----------- workspace_user ------------
        --------------------------------------*/
        
        f {
             {
                case 'org_admin':
                    w => .id
                    break
                case 'pw':
                    w => .id
                    break
                default:
                    w => .id
                    break
            }
             => u
             => w
             {
                .t
                await queryRunner.query(`
                    
                    value;
                `)
            } el {
                // Skip personal workspaces for users who haven't signed up yet to avoid duplicates when they sign up.
                // account.service.ts creates personal workspace during sign-up.
                await queryRunner.query(`
                    delete from "temp_workspace_user" where "workspaceId" = '${workspaceUser.workspaceId}' and "userId" = '${workspaceUser.userId}';
                `)
                await queryRunner.query(`
                    delete from "workspace" where "id" = '${workspaceUser.workspaceId}';
                `)
            } else {
                await queryRunner.query(`
                    
                    value;
                `)
            }
        }

        awa
    }

    p: Promise<void> {
        await queryRunner.query(`
            drop table "temp_workspace_user";
        `)
        await queryRunner.query(`
            drop table "temp_role";
        `)
        await queryRunner.query(`
            drop table "temp_organization";
        `)
        await queryRunner.query(`
            drop table "temp_user";
        `)
    }

    publ: Promise<void> {
        awa
        awa
        awa

        // This query cannot be part of the modifyTable function because:
        // 1. The "organizationId" in the "workspace" table might be referencing data in the "temp_organization" table, so it must be altered last.
        // 2. Setting "createdBy" and "updatedBy" to NOT NULL needs to happen after ensuring there’s no existing data that would violate the constraint,
        //    because altering these columns while there is data could prevent new records from being inserted into the "workspace" table.
        await queryRunner.query(`
            alter table "workspace"
            alter column "createdBy" set not null,
            alter column "updatedBy" set not null,
            a ;
        `)
    }

    publ: Promise<void> {}
}
