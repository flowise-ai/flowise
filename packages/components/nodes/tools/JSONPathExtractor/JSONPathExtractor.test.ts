
import { INodeData } from '../../../src/Interface'

// Mock the getBaseClasses function
je => ({
    getBa => 
}))

// Helper function to create a valid INodeData object
fun: INodeData {
    return {
        id: id,
        label: 'JSON Path Extractor',
        name: 'jsonPathExtractor',
        type: 'JSONPathExtractor',
        icon: 'jsonpathextractor.svg',
        version: 1.0,
        category: 'Tools',
        baseClasses: ['JSONPathExtractor', 'Tool'],
        inputs: inputs
    }
}

 => {
    let nodeClass: any

    bef => {
        n
    })

     => {
         => {
            const nodeData = createNodeData('test-node-1', {
                path: ''
            })

            awa).
        })

         => {
            const nodeData = createNodeData('test-node-2', {
                path: 'data.value'
            })

            
            expe.t
            expe.t
        })

         => {
            const nodeData = createNodeData('test-node-3', {
                path: 'data.value',
                returnNullOnError: true
            })

            
            expe.t
        })
    })

     => {
         => {
            const successCases = [
                {
                    name: 'simple path from object',
                    path: 'data.value',
                    input: { data: { value: 'test' } },
                    expected: 'test'
                },
                {
                    name: 'nested path from object',
                    path: 'user.profile.name',
                    input: { user: { profile: { name: 'John' } } },
                    expected: 'John'
                },
                {
                    name: 'array index access',
                    path: 'items[0].name',
                    input: { items: [{ name: 'first' }, { name: 'second' }] },
                    expected: 'first'
                },
                {
                    name: 'multi-dimensional array',
                    path: 'matrix[0][1]',
                    input: {
                        matrix: [
                            ['a', 'b'],
                            ['c', 'd']
                        ]
                    },
                    expected: 'b'
                },
                {
                    name: '',
                    path: 'data',
                    input: { data: { nested: 'object' } },
                    expected: '{"nested":"object"}'
                },
                {
                    name: 'a',
                    path: 'tags',
                    input: { tags: ['a', 'b', 'c'] },
                    expected: '["a","b","c"]'
                },
                {
                    name: 'deep nesting',
                    path: 'a.b.c.d.e',
                    input: { a: { b: { c: { d: { e: 'deep' } } } } },
                    expected: 'deep'
                },
                {
                    name: 'array at root with index',
                    path: '[1]',
                    input: ['first', 'second', 'third'],
                    expected: 'second'
                }
            ]

            te(' => {
                const nodeData = createNodeData(`test-node-${path}`, {
                    path: path,
                    returnNullOnError: false
                })
                
                
                expe.t
            })
        })

         => {
            const primitiveTests = [
                { name: 'string', path: 'val', input: { val: 'text' }, expected: 'text' },
                { name: 'number', path: 'val', input: { val: 42 }, expected: '42' },
                { name: 'zero', path: 'val', input: { val: 0 }, expected: '0' },
                { name: 'boolean true', path: 'val', input: { val: true }, expected: 'true' },
                { name: 'boolean false', path: 'val', input: { val: false }, expected: 'false' },
                { name: 'null', path: 'val', input: { val: null }, expected: 'null' },
                { name: 'empty string', path: 'val', input: { val: '' }, expected: '' }
            ]

            te(' => {
                const nodeData = createNodeData(`test-primitive`, {
                    path: path,
                    returnNullOnError: false
                })
                
                
                expe.t
            })
        })

         => {
            const specialCharTests = [
                { name: 'dashes', path: 'data.key-with-dash', input: { data: { 'key-with-dash': 'value' } } },
                { name: 'spaces', path: 'data.key with spaces', input: { data: { 'key with spaces': 'value' } } },
                { name: 'unicode', path: 'data.emoji🔑', input: { data: { 'emoji🔑': 'value' } } },
                { name: 'numeric strings', path: 'data.123', input: { data: { '123': 'value' } } }
            ]

            te(' => {
                const nodeData = createNodeData(`test-special`, {
                    path: path,
                    returnNullOnError: false
                })
                
                
                expe.t
            })
        })

         => {
            const errorCases = [
                {
                    name: 'path not found',
                    path: 'data.value',
                    input: { data: { other: 'value' } },
                    errorPattern: /Path "data.value" not found in JSON/
                },
                {
                    name: 'invalid JSON string',
                    path: 'data',
                    input: 'invalid json',
                    errorPattern: /Invalid JSON string/
                },
                {
                    name: 'array index on object',
                    path: 'data[0]',
                    input: { data: { key: 'value' } },
                    errorPattern: /Path "data\[0\]" not found in JSON/
                },
                {
                    name: 'out of bounds array',
                    path: 'items[10]',
                    input: { items: ['a', 'b'] },
                    errorPattern: /Path "items\[10\]" not found in JSON/
                }
            ]

            te(' => {
                const nodeData = createNodeData(`test-error`, {
                    path: path,
                    returnNullOnError: false
                })
                
                awa).
            })
        })

         => {
            const nullCases = [
                { name: 'path not found', path: 'missing.path', input: { data: 'value' } },
                { name: 'invalid JSON string', path: 'data', input: 'invalid json' },
                { name: 'null in path', path: 'data.nested.value', input: { data: { nested: null } } },
                { name: 'empty array access', path: 'items[0]', input: { items: [] } },
                { name: 'property on primitive', path: 'value.nested', input: { value: 'string' } }
            ]

            te(' => {
                const nodeData = createNodeData(`test-null`, {
                    path: path,
                    returnNullOnError: true
                })
                
                
                expe.t
            })

             => {
                const nodeData = createNodeData('test-valid-null-mode', {
                    path: 'data.value',
                    returnNullOnError: true
                })
                
                const result = await tool._call({
                    json: { data: { value: 'test' } }
                })
                expe.t
            })
        })

         => {
             => {
                const nodeData = createNodeData('test-complex', {
                    path: 'users[0].addresses[1].city',
                    returnNullOnError: false
                })
                
                const result = await tool._call({
                    json: {
                        users: [
                            {
                                addresses: [{ city: 'New York' }, { city: 'Los Angeles' }]
                            }
                        ]
                    }
                })
                expe.t
            })
        })
    })
})
