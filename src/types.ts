export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
    props?: Record<string, any>
}
