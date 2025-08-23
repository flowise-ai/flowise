import { ICommonObject, IFileUpload } from './Interface'
import { getCredentialData } from './utils'
import { type ClientOptions, OpenAIClient, toFile } from '@langchain/openai'
import { AssemblyAI } from 'assemblyai'
import { getFileFromStorage } from './storageUtils'
import axios from 'axios'
import Groq from 'groq-sdk'

const SpeechToTextType = {
    OPENAI_WHISPER: 'openAIWhisper',
    ASSEMBLYAI_TRANSCRIBE: 'assemblyAiTranscribe',
    LOCALAI_STT: 'localAISTT',
    AZURE_COGNITIVE: 'azureCognitive',
    GROQ_WHISPER: 'groqWhisper'
}

exp => {
     {
        const credentialId = speechToTextConfig.credentialId as string
        
        

         {
            case SpeechToTextType.OPENAI_WHISPER: {
                const openAIClientOptions: ClientOptions = {
                    apiKey: credentialData.openAIApiKey
                }
                
                
                const openAITranscription = await openAIClient.audio.transcriptions.create({
                    file: file,
                    model: 'whisper-1',
                    language: speechToTextConfig?.language,
                    tempe : undefined,
                    prompt: speechToTextConfig?.prompt
                })
                 {
                    return openAITranscription.text
                }
                break
            }
            case SpeechToTextType.ASSEMBLYAI_TRANSCRIBE: {
                const assemblyAIClient = new AssemblyAI({
                    apiKey: credentialData.assemblyAIApiKey
                })

                const params = {
                    audio: audio_file,
                    speaker_labels: false
                }

                
                 {
                    return assemblyAITranscription.text
                }
                break
            }
            case SpeechToTextType.LOCALAI_STT: {
                const LocalAIClientOptions: ClientOptions = {
                    apiKey: credentialData.localAIApiKey,
                    baseURL: speechToTextConfig?.baseUrl
                }
                
                
                const localAITranscription = await localAIClient.audio.transcriptions.create({
                    file: file,
                    model: speechToTextConfig?.model || 'whisper-1',
                    language: speechToTextConfig?.language,
                    tempe : undefined,
                    prompt: speechToTextConfig?.prompt
                })
                 {
                    return localAITranscription.text
                }
                break
            }
            case SpeechToTextType.AZURE_COGNITIVE: {
                try {
                    const baseUrl = `https://${credentialData.serviceRegion}.cognitiveservices.azure.com/speechtotext/transcriptions:transcribe`
                    const apiVersion = credentialData.apiVersion || '2024-05-15-preview'

                    
                    
                    f

                    const channelsStr = speechToTextConfig.channels || '0,1'
                    .map(Numbe

                    const definition = {
                        locales: [speechToTextConfig.language || 'en-US'],
                        profanityFilterMode: speechToTextConfig.profanityFilterMode || 'Masked',
                        channels
                    }
                    f)

                    const response = await axios.post(`${baseUrl}?api-version=${apiVersion}`, formData, {
                        headers: {
                            'Ocp-Apim-Subscription-Key': credentialData.azureSubscriptionKey,
                            Accept: 'application/json'
                        }
                    })

                     {
                        return response.data.combinedPhrases[0]?.text || ''
                    }
                    return ''
                }  {
                    throw error.response?.data || error
                }
            }
            case SpeechToTextType.GROQ_WHISPER: {
                const groqClient = new Groq({
                    apiKey: credentialData.groqApiKey
                })
                
                const groqTranscription = await groqClient.audio.transcriptions.create({
                    file,
                    model: speechToTextConfig?.model || 'whisper-large-v3',
                    language: speechToTextConfig?.language,
                    tempe : undefined,
                    response_format: 'verbose_json'
                })
                 {
                    return groqTranscription.text
                }
                break
            }
        }
    } else {
        th
    }
    return undefined
}
