import axios from 'axios'

 => {
    try {
        const tags = requestBody.tags ? `tags=${requestBody.tags}` : ''
        // Default to 100, TODO: add pagination and use offset & limit
        const url = `https://api.hub.langchain.com/repos/?limit=100&${tags}has_commits=true&sort_field=num_likes&sort_direction=desc&is_archived=false`
        
         {
            return {
                status: 'OK',
                repos: resp.data.repos
            }
        }
    }  {
        return { status: 'ERROR', repos: [] }
    }
}

export default {
    createPromptsList
}
