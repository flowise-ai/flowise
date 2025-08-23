import { StatusCodes } from 'http-status-codes'
import { DataSource, QueryRunner } from 'typeorm'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { generateId } from '../../utils'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { Telemetry } from '../../utils/telemetry'
import { Organization, OrganizationName } from '../database/entities/organization.entity'
import { isInvalidName, isInvalidUUID } from '../utils/validation.util'
import { UserErrorMessage, UserService } from './user.service'

export const enum OrganizationErrorMessage {
    INVALID_ORGANIZATION_ID = 'Invalid Organization Id',
    INVALID_ORGANIZATION_NAME = 'Invalid Organization Name',
    ORGANIZATION_NOT_FOUND = 'Organization Not Found',
    ORGANIZATION_FOUND_MULTIPLE = 'Organization Found Multiple',
    ORGANIZATION_RESERVERD_NAME = 'Organization name cannot be Default Organization - this is a reserved name'
}

export class OrganizationService {
    private telemetry: Telemetry
    private dataSource: DataSource
    private userService: UserService

     {
        
        this.dataSource = appServer.AppDataSource
        this.telemetry = appServer.telemetry
        th
    }

    publ {
        ) th
    }

    publ {
        th
        
    }

    publ {
        ) th
         {
            th
        }
    }

    publ {
        th
        
    }

    publ {
        
    }

    publ {
        
    }

    publ {
        th
        data.updatedBy = data.createdBy
        

        
    }

    publ {
        
    }

    publ {
        
        awa

        
         th

        let newO
        try {
            awa
            newO
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return newOrganization
    }

    publ {
        
        awa

        
         th
        
         th
         {
            th
        }
        newOrganizationData.createdBy = oldOrganizationData.createdBy

        let up
        try {
            awa
            awa
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return updateOrganization
    }
}
