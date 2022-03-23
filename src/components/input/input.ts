export type ToDoInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    value: string
}