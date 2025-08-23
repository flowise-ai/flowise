import { useState, useRef, useEffect, memo } from 'react'
import PropTypes from 'prop-types'

import { IconDatabaseImport, IconX } from '@tabler/icons-react'

// project import
import { StyledFab } from '@/ui-component/button/StyledFab'
import VectorStoreDialog from './VectorStoreDialog'
import UpsertResultDialog from './UpsertResultDialog'

 => {
    
    
    
    
    

    
    

     => {
         => 
        const props = {
            open: true,
            title: 'Upsert Vector Store',
            chatflowid
        }
        
        
    }

    u => {
         {
            an
        }
        prevOpen.current = open

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    return (
        <>
            <StyledFab
                sx={{ position: 'absolute', right: 80, top: 20 }}
                ref={anchorRef}
                size='small'
                color='teal'
                aria-label='upsert'
                title='Upsert Vector Database'
                onClick={handleToggle}
            >
                {open ? <IconX /> : <IconDatabaseImport />}
            </StyledFab>
            <VectorStoreDialog
                show={showExpandDialog}
                dialogProps={expandDialogProps}
                 => {
                    
                     => 
                }}
                 => {
                    
                    
                    
                }}
            ></VectorStoreDialog>
            <UpsertResultDialog
                show={showUpsertResultDialog}
                dialogProps={upsertResultDialogProps}
                 => {
                    
                    
                }}
            ></UpsertResultDialog>
        </>
    )
}

VectorStorePopUp.propTypes = { chatflowid: PropTypes.string }

exp
