import { useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import { FormControl, Button } from '@mui/material'
import { IconUpload } from '@tabler/icons-react'
import { getFileName } from '@/utils/genericHelper'

exp => {
    

    

     => {
         return

         {
            const file = e.target.files[0]
            const { name } = file

            
             => {
                 {
                    return
                }
                const { result } = evt.target

                const value = result + `,filename:${name}`

                
                
            }
            
        } el {
            let f.map((f => {
                
                const { name } = file

                 => {
                     => {
                         {
                            return
                        }
                        const { result } = evt.target
                        const value = result + `,filename:${name}`
                        
                    }
                    
                })
            })

            
            )
            )
        }
    }

     => {
         return

         {
            const file = e.target.files[0]
            const { name } = file
            
            f
            
            
            
        } el {
            
            const values = []
            f {
                f
                value
            }
            )
            )
            
        }
    }

    return (
        <FormControl sx={{ mt: 1, width: '100%' }} size='small'>
            {!formDataUpload && (
                <span
                    style={{
                        fontStyle: 'italic',
                        color: theme.palette.grey['800'],
                        marginBottom: '1rem'
                    }}
                >
                    {myValue ? getF : 'Choose a file to upload'}
                </span>
            )}
            <Button
                disabled={disabled}
                variant='outlined'
                component='label'
                fullWidth
                startIcon={<IconUpload />}
                sx={{ marginRight: '1rem' }}
            >
                {'Upload File'}
                <input
                    type='file'
                    multiple
                    accept={fileType}
                    hidden
                     => (f : han)}
                />
            </Button>
        </FormControl>
    )
}

File.propTypes = {
    value: PropTypes.string,
    fileType: PropTypes.string,
    formDataUpload: PropTypes.bool,
    onChange: PropTypes.func,
    onFormDataChange: PropTypes.func,
    disabled: PropTypes.bool
}
