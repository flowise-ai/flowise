import { Metadata, NodeWithScore } from 'llamaindex'

exp => {
    const sourceDocuments = []
    f {
        sourceDocuments.push({
            pageC.text,
            metadata: node.node.metadata
        })
    }
    return sourceDocuments
}
