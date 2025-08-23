/**
 * @fileoverview This file contains the API to handle audio recording.
 * Originally from 'https://ralzohairi.medium.com/audio-recording-in-javascript-96eed45b75ee'
 */
import { isSafari } from 'react-device-detect'

// audio-recording.js ---------------
let microphoneButton, elapsedTimeTag

/** Initialize controls */
fun {
    m[0]
}

/** Displays recording control buttons */
fun {
    //Hide the microphone button that starts audio recording
    microphoneButton.style.display = 'none'

    //Handle the displaying of the elapsed recording time
    han
}

/** Hide the displayed recording control buttons */
fun {
    //Display the microphone button that starts audio recording
    microphoneButton.style.display = 'block'

    //stop interval that handles both time elapsed and the red dot
    
}

/** Stores the actual start time when an audio recording begins to take place to ensure elapsed time start time is accurate*/
let audioRecordStartTime

/** Stores the maximum recording time in hours to stop recording once maximum recording hour has been reached */
let maximumRecordingTimeInHours = 1

/** Stores the reference of the setInterval function that controls the timer in audio recording*/
let elapsedTimeTimer

/** Starts the audio recording*/
exp {
    

    //start recording using the audio recording API
    audioRecorder
        .
        .then(() => {
            //on success show the controls to stop and cancel the recording
             {
                
            }
            //store the recording start time to display the elapsed time according to it
            au

            //display control buttons to offer the functionality of stop and cancel
            han
        })
        . => {
            //on error
            //No Browser Support Error
            ) {
                 {
                    
                }
            }

            //Error handling structure
             {
                case 'AbortError': //error from navigator.mediaDevices.getUserMedia
                    // eslint-disable-next-line no-console
                    
                    break
                case 'NotAllowedError': //error from navigator.mediaDevices.getUserMedia
                    // eslint-disable-next-line no-console
                    
                    break
                case 'NotFoundError': //error from navigator.mediaDevices.getUserMedia
                    // eslint-disable-next-line no-console
                    
                    break
                case 'NotReadableError': //error from navigator.mediaDevices.getUserMedia
                    // eslint-disable-next-line no-console
                    
                    break
                case 'SecurityError': //error from navigator.mediaDevices.getUserMedia or from the MediaRecorder.start
                    // eslint-disable-next-line no-console
                    
                    break
                case 'TypeError': //error from navigator.mediaDevices.getUserMedia
                    // eslint-disable-next-line no-console
                    
                    break
                case 'InvalidStateError': //error from the MediaRecorder.start
                    // eslint-disable-next-line no-console
                    
                    break
                case 'UnknownError': //error from the MediaRecorder.start
                    // eslint-disable-next-line no-console
                    
                    break
                default:
                    // eslint-disable-next-line no-console
                    
            }
        })
}
/** Stop the currently started audio recording & sends it
 */
exp {
    //stop the recording using the audio recording API
    audioRecorder
        .
        .then((au => {
            //hide recording control button & return record icon
            han
             {
                a
            }
        })
        . => {
            //Error handling structure
             {
                case 'InvalidStateError': //error from the MediaRecorder.stop
                    // eslint-disable-next-line no-console
                    
                    break
                default:
                    // eslint-disable-next-line no-console
                    
            }
        })
}

/** Cancel the currently started audio recording */
exp {
    //cancel the recording using the audio recording API
    au

    //hide recording control button & return record icon
    han
}

/** Computes the elapsed recording time since the moment the function is called in the format h:m:s*/
fun {
    elap
    //display initial time when recording begins
    

    //create an interval that compute & displays elapsed time, as well as, animate red dot - every second
    elap => {
        //compute the elapsed time every second
        let elap //pass the actual record start time
        //display the elapsed time
        
    }, 1000) //every second
}

/** Display elapsed time during audio recording
 * @param {String} elapsedTime - elapsed time in the format mm:ss or hh:mm:ss
 */
fun {
    //1. display the passed elapsed time as the elapsed time in the elapsedTime HTML element
    elapsedTimeTag.innerHTML = elapsedTime
    //2. Stop the recording when the max number of hours is reached
    ) {
        
    }
}

/**
 * @param {String} elapsedTime - elapsed time in the format mm:ss or hh:mm:ss
 * @returns {Boolean} whether the elapsed time reached the maximum number of hours or not
 */
fun {
    //Split the elapsed time by the symbol that separates the hours, minutes and seconds :
    let elap

    //Turn the maximum recording time in hours to a string and pad it with zero if less than 10
    let maximumRecordingTimeInHoursAsString =
        max

    //if the elapsed time reach hours and also reach the maximum recording time in hours return true
    return elapsedTimeSplit.length === 3 && elapsedTimeSplit[0] === maximumRecordingTimeInHoursAsString
}

/** Computes the elapsedTime since the moment the function is called in the format mm:ss or hh:mm:ss
 * @param {String} startTime - start time to compute the elapsed time since
 * @returns {String} elapsed time in mm:ss format or hh:mm:ss format, if elapsed hours are 0.
 */
fun {
    //record end time
    let en

    //time difference in ms
    let timeDiff = endTime - startTime

    //convert time difference from ms to seconds
    timeDiff = timeDiff / 1000

    //extract integer seconds that don't form a minute using %
    let  //

    //pad seconds with a zero if necessary
    seconds = seconds < 10 ? '0' + seconds : seconds

    //convert time difference from seconds to minutes using %
    t

    //extract integer minutes that don't form an hour using %
    let minutes = timeDiff % 60 //no need to floor possible incomplete minutes, because they've been handled as seconds
    minutes = minutes < 10 ? '0' + minutes : minutes

    //convert time difference from minutes to hours
    t

    //extract integer hours that don't form a day using %
    let hours = timeDiff % 24 //no need to floor possible incomplete hours, because they've been handled as seconds

    //convert time difference from hours to days
    t

    // the rest of timeDiff is number of days
    let days = timeDiff //add days to hours

    let totalHours = hours + days * 24
    totalHours = totalHours < 10 ? '0' + totalHours : totalHours

     {
        return minutes + ':' + seconds
    } else {
        return totalHours + ':' + minutes + ':' + seconds
    }
}

//API to handle audio recording

export const audioRecorder = {
    /** Stores the recorded audio as Blob objects of audio data as the recording continues*/
    audioBlobs: [] /*of type Blob[]*/,
    /** Stores the reference of the MediaRecorder instance that handles the MediaStream when recording starts*/
    mediaRecorder: null /*of type MediaRecorder*/,
    /** Stores the reference to the stream currently capturing the audio*/
    streamBeingCaptured: null /*of type MediaStream*/,
    /** Start recording the audio
     * @returns {Promise} - returns a promise that resolves if audio recording successfully started
     */
     {
        //Feature Detection
        ) {
            //Feature is not supported in browser
            //return a custom error
            )
        } else {
            //Feature is supported in browser

            //create an audio stream
            return (
                navigator.mediaDevices
                    .getU
                    //returns a promise that resolves to the audio stream
                    .then(( /*of type MediaStream*/ => {
                        //save the reference of the stream to be able to stop it when necessary
                        audioRecorder.streamBeingCaptured = stream

                        //create a media recorder instance by passing that stream into the MediaRecorder constructor
                        au
                        /*the MediaRecorder interface of the MediaStream Recording API provides functionality to easily record media*/

                        //clear previously saved audio Blobs, if any
                        audioRecorder.audioBlobs = []

                        //add a dataavailable event listener in order to store the audio data Blobs when recording
                        au => {
                            //store audio Blob object
                            au
                        })

                        //start the recording by calling the start method on the media recorder
                         {
                            // https://community.openai.com/t/whisper-problem-with-audio-mp4-blobs-from-safari/322252
                            // https://community.openai.com/t/whisper-api-cannot-read-files-correctly/93420/46
                            au
                        } else {
                            au
                        }
                    })
            )

            /* errors are not handled in the API because if its handled and the promise is chained, the .then after the catch will be executed*/
        }
    },
    /** Stop the started audio recording
     * @returns {Promise} - returns a promise that resolves to the audio as a blob file
     */
     {
        //return a promise that would return the blob or URL of the recording
         => {
            //save audio type to pass to set the Blob type
            let mimeType = audioRecorder.mediaRecorder.mimeType

            //listen to the stop event in order to create & return a single Blob object
            au => {
                //create a single blob object, as we might have gathered a few Blob objects that needs to be joined as one
                let au

                //resolve promise with the single audio blob representing the recorded audio
                
            })
            au
        })
    },
    /** Cancel audio recording*/
     {
        //stop the recording feature
        au

        //stop all the tracks on the active stream in order to stop the stream
        au

        //reset API properties for next recording
        au
    },
    /** Stop all the tracks on the active stream in order to stop the stream and remove
     * the red flashing dot showing in the tab
     */
     {
        //stopping the capturing request by stopping all the tracks on the active stream
        audioRecorder.streamBeingCaptured
            .getT //get all tracks from the stream
            .f /*) //stop each one
    },
    /** Reset all the recording properties including the media recorder and stream being captured*/
     {
        audioRecorder.mediaRecorder = null
        audioRecorder.streamBeingCaptured = null

        /*No need to remove event listeners attached to mediaRecorder as
    If a , the element itself is picked
    up by the garbage collector as well as any event handlers/listeners associated with it.
    getEventL will return an empty array of events.*/
    }
}
