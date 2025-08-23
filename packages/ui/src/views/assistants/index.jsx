import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// material-ui
import { Card, CardContent, Stack } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ViewHeader from '@/layout/MainLayout/ViewHeader'

// icons
import { IconRobotFace, IconBrandOpenai, IconBrandAzure } from '@tabler/icons-react'

const cards = [
    {
        title: 'Custom Assistant',
        description: 'Create custom assistant using your choice of LLMs',
        icon: <IconRobotFace />,
        iconText: 'Custom',
        g'
    },
    {
        title: 'OpenAI Assistant',
        description: 'Create assistant using OpenAI Assistant API',
        icon: <IconBrandOpenai />,
        iconText: 'OpenAI',
        g'
    },
    {
        t',
        description: 'Create assistant using Azure Assistant API',
        icon: <IconBrandAzure />,
        iconText: 'Azure',
        g'
    }
]

(({ g => ({
    height: '300px',
    background: gradient,
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer'
}))

(() => ({
    display: 'inline-flex',
    padding: '4px 8px',
    ba',
    borderRadius: '4px',
    marginBottom: '16px',
    '& svg': {
        width: '1.2rem',
        height: '1.2rem',
        marginRight: '8px'
    }
}))

 => {
    
    
     => 

     => {
         nav
         nav
         ale
    }

    return (
        <Stack
            spacing={3}
            direction='row'
            sx={{
                width: '100%',
                justifyContent: 'space-between'
            }}
        >
            { => (
                <StyledCard
                    key={index}
                    gradient={card.gradient}
                    sx={{
                        flex: 1,
                        maxW / 3)',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: 1,
                        borderColor: theme.palette.grey[900] + 25,
                        borderRadius: 2,
                        color: customization.isDarkMode ? theme.palette.common.white : '#333333',
                        cursor: index === 2 ? 'not-allowed' : 'pointer',
                        opacity: index === 2 ? 0.6 : 1,
                        '&:hover': {
                            b'
                        }
                    }}
                     => }
                >
                    <CardContent className='h-full relative z-10'>
                        <FeatureIcon>
                            {card.icon}
                            <span className='text-xs uppercase'>{card.iconText}</span>
                        </FeatureIcon>
                        <h2 className='text-2xl font-bold mb-2'>{card.title}</h2>
                        <p className='text-gray-600'>{card.description}</p>
                    </CardContent>
                </StyledCard>
            ))}
        </Stack>
    )
}

// ==============================|| ASSISTANTS ||============================== //

 => {
    return (
        <>
            <MainCard>
                <Stack flexDirection='column' sx={{ gap: 3 }}>
                    <ViewHeader
                        title='Assistants'
                        description='Chat assistants with instructions, tools, and files to respond to user queries'
                    />
                    <FeatureCards />
                </Stack>
            </MainCard>
        </>
    )
}

export default Assistants
