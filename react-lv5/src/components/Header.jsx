import React from 'react'
import { QueryClient, useMutation, useQueryClient } from 'react-query'
import { addTodos } from '../apis/todos'
function Header({
    BoxHeader,
    FontH1,
    FontH2,
    FontH3,
    BoxInputButton,
    InputStyle,
    HendlerAddButtonStyle,
    title,
    contents,
    hendlerAddButton,
    handlerTitleInput,
    handlerContentsInput,

}) {

    const queryClient = useQueryClient()

    const mutation = useMutation(addTodos,{
        onSuccess: () => {
            queryClient.invalidateQueries("todos")
            console.log("추가!")
        }
    });

    const newUser = {
        title,
        contents,
        isDone: false,
    }
    
    const HandlerAddTodo = ()=> {
        mutation.mutate(newUser)
    }

    return (
        <>
            <BoxHeader>
                <FontH1>Todo List</FontH1>
                <FontH2>React</FontH2>
            </BoxHeader>

            <BoxInputButton>
                <FontH2>TITLE</FontH2>
                <InputStyle
                    type='text'
                    value={title}
                    onChange={handlerTitleInput}
                />

                <FontH2>CONTENTS</FontH2>
                <InputStyle type='text'
                    value={contents}
                    onChange={handlerContentsInput}
                />
                <HendlerAddButtonStyle
                    onClick={HandlerAddTodo}
                >
                    <FontH3>추가</FontH3>
                </HendlerAddButtonStyle>
            </BoxInputButton>
        </>
    )
}

export default Header