import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { VectorStore } from '@langchain/core/vectorstores'
import { Document } from '@langchain/core/documents'
import { PromptTemplate } from '@langchain/core/prompts'
import { LLMChain } from 'langchain/chains'

class TaskCreationChain extends LLMChain {
     {
        
    }

    : LLMChain {
        const taskCreationTemplate: string =
            'You are a task creation AI that uses the result of an execution agent' +
            ' to create new tasks with the following objective: {objective},' +
            ' The last completed task has the result: {result}.' +
            ' This result was based on this task description: {task_description}.' +
            ' These are incomplete tasks list: {incomplete_tasks}.' +
            ' Based on the result, create new tasks to be completed' +
            ' by the AI system that do not overlap with incomplete tasks.' +
            ' Return the tasks as an array.'

        const prompt = new PromptTemplate({
            template: taskCreationTemplate,
            inputVariables: ['result', 'task_description', 'incomplete_tasks', 'objective']
        })

        
    }
}

class TaskPrioritizationChain extends LLMChain {
     {
        
    }

    : TaskPrioritizationChain {
        const taskPrioritizationTemplate: string =
            'You are a task prioritization AI tasked with cleaning the formatting of and reprioritizing' +
            ' the following task list: {task_names}.' +
            ' Consider the ultimate objective of your team: {objective}.' +
            ' Do not remove any tasks. Return the result as a numbered list, like:' +
            ' #. First task' +
            ' #. Second task' +
            ' Start the task list with number {next_task_id}.'
        const prompt = new PromptTemplate({
            template: taskPrioritizationTemplate,
            inputVariables: ['task_names', 'next_task_id', 'objective']
        })
        
    }
}

class ExecutionChain extends LLMChain {
     {
        
    }

    : LLMChain {
        const executionTemplate: string =
            'You are an AI who performs one task based on the following objective: {objective}.' +
            ' Take into account these previously completed tasks: {context}.' +
            ' Your task: {task}.' +
            ' Response:'

        const prompt = new PromptTemplate({
            template: executionTemplate,
            inputVariables: ['objective', 'context', 'task']
        })

        
    }
}

async function getNextTask(
    taskCreationChain: LLMChain,
    result: string,
    taskDescription: string,
    taskList: string[],
    objective: string
): Promise<any[]> {
    
    const response: string = await taskCreationChain.predict({
        result,
        task_description: taskDescription,
        incomplete_tasks: incompleteTasks,
        objective
    })

    

     => ta).map((ta => ({ ta)
}

interface Task {
    task_id: number
    task_name: string
}

async function prioritizeTasks(
    taskPrioritizationChain: LLMChain,
    thisTaskId: number,
    taskList: Task[],
    objective: string
): Promise<Task[]> {
    const next_task_id = thisTaskId + 1
     => t.ta.j
    
    
    const prioritizedTaskList: Task[] = []

    f {
        ) {
            // eslint-disable-next-line no-continue
            continue
        }
        .
         {
            , 10)
            
            p
        }
    }

    return prioritizedTaskList
}

exp: Promise<string[]> {
    
    let returnDocs: string[] = []
    f {
        
    }
    return returnDocs
}

a: Promise<string> {
    
    
}

export class BabyAGI {
    taskList: Array<Task> = []

    taskCreationChain: TaskCreationChain

    taskPrioritizationChain: TaskPrioritizationChain

    executionChain: ExecutionChain

    taskIdCounter = 1

    vectorStore: VectorStore

    maxIterations = 3

    topK = 4

    constructor(
        taskCreationChain: TaskCreationChain,
        taskPrioritizationChain: TaskPrioritizationChain,
        executionChain: ExecutionChain,
        vectorStore: VectorStore,
        maxIterations: number,
        topK: number
    ) {
        this.taskCreationChain = taskCreationChain
        this.taskPrioritizationChain = taskPrioritizationChain
        this.executionChain = executionChain
        this.vectorStore = vectorStore
        this.maxIterations = maxIterations
        this.topK = topK
    }

    a {
        th
    }

    p {
        // eslint-disable-next-line no-console
        
        // eslint-disable-next-line no-console
        th => )
    }

    p {
        // eslint-disable-next-line no-console
        
        // eslint-disable-next-line no-console
        
    }

    p {
        // eslint-disable-next-line no-console
        
        // eslint-disable-next-line no-console
        
    }

    getInputKey: string[] {
        return ['objective']
    }

    getOutputKey: string[] {
        return []
    }

    a: Promise<string> {
        const { objective } = inputs
        const firstTask = inputs.first_task || 'Make a todo list'
        th
        let numIters = 0
        let loop = true
        let finalResult = ''

        wh {
             {
                th

                // Step 1: Pull the first task
                
                 break
                th

                // Step 2: Execute the task
                
                const thisTaskId = task.task_id
                finalResult = result
                th

                // Step 3: Store the result in Pinecone
                
                th

                // Step 4: Create new tasks and reprioritize task list
                const newTasks = await getNextTask(
                    this.taskCreationChain,
                    result,
                    task.task_name,
                    th => t.ta,
                    objective
                )
                newTa => {
                    this.taskIdCounter += 1
                    // eslint-disable-next-line no-param-reassign
                    newTask.task_id = this.taskIdCounter
                    th
                })
                th
            }

            numIters += 1
             {
                // eslint-disable-next-line no-console
                
                loop = false
                this.taskList = []
            }
        }

        return finalResult
    }

    : BabyAGI {
        
        
        
        
    }
}
