import React from 'react'
import { useQuery } from 'react-query'
import { changeTodos, getTodos } from '../apis/todos'
import {useMutation, useQueryClient } from 'react-query'
import { deletTodos } from '../apis/todos'

function TodoBox({
    BoxMainWarkingArea,
    BoxTodo,
    FontBoxTodoH1,
    FontBoxTodoH2,
    HendlerTodoButtonStyle,
    FontH3,
    // hendlerRemoveButton,
    hendlerIsdoneState,
    navigate,
    FontH2,
    BoxMainWarkingNameArea,
    BoxMainWarkingName,
    


}) {
    
    const {isLoading, isError, data } = useQuery("todos", getTodos)
    
    const queryClient = useQueryClient()

    const mutationDelet = useMutation(deletTodos,{
        onSuccess: () => {
            queryClient.invalidateQueries("todos")
            console.log("삭제!")
        }
    });

    const mutationChange = useMutation(changeTodos,{
        onSuccess: () => {
            queryClient.invalidateQueries("todos")
        }
    });

    if (isLoading) {
        return <div>로딩중..</div>
    } 
    else if (isError) {
        return <div>오류!</div>
    }
    const HandlerDeletTodo = (id) => {
        mutationDelet.mutate(id)
    }
    const HandlerChangeTodo = async(id, isDone) => {
        console.log(id, isDone)
        const result = await mutationChange.mutate({id, isDone})

        if (result) {
            console.log("바꿔")
        }
    }


    return (
        <>
        <BoxMainWarkingNameArea>
                <BoxMainWarkingName>
                    <FontH2>WORKING</FontH2>
                </BoxMainWarkingName>
            </BoxMainWarkingNameArea>

        <BoxMainWarkingArea>
                {
                    data
                        .filter((item) => item.isDone === false)
                        .map((item) => {
                            return (
                                <BoxTodo key={item.id}>
                                    <FontBoxTodoH1>{item.title}</FontBoxTodoH1>
                                    <FontBoxTodoH2>{item.contents}</FontBoxTodoH2>

                                    <HendlerTodoButtonStyle
                                        onClick={() => {
                                            HandlerDeletTodo(item.id)
                                        }}
                                    >
                                        <FontH3>삭제</FontH3>
                                    </HendlerTodoButtonStyle>
                                    {
                                        item.isDone === false ?
                                            (<HendlerTodoButtonStyle>
                                                <FontH3
                                                    onClick={() => {
                                                        // hendlerIsdoneState(item.id)
                                                        HandlerChangeTodo(item.id, item.isDone)
                                                    }}
                                                >완료</FontH3>
                                            </HendlerTodoButtonStyle>
                                            ) : (
                                                <HendlerTodoButtonStyle>
                                                    <FontH3
                                                        onClick={() => {
                                                            hendlerIsdoneState(item.id)
                                                        }}
                                                    >취소</FontH3>
                                                </HendlerTodoButtonStyle>)
                                    }

                                    <HendlerTodoButtonStyle
                                        onClick={() => {
                                            navigate(`/${item.id}`)
                                        }}
                                    >
                                        <FontH3>상세보기</FontH3>
                                    </HendlerTodoButtonStyle>

                                </BoxTodo>
                            )
                        })
                }
            </BoxMainWarkingArea>

            <BoxMainWarkingNameArea>
                <BoxMainWarkingName>
                    <FontH2>DONE</FontH2>
                </BoxMainWarkingName>
            </BoxMainWarkingNameArea>

            <BoxMainWarkingArea>
                {
                    data
                        .filter((item) => item.isDone === true)
                        .map((item) => {
                            return (
                                <BoxTodo key={item.id}>
                                    <FontBoxTodoH1>{item.title}</FontBoxTodoH1>
                                    <FontBoxTodoH2>{item.contents}</FontBoxTodoH2>

                                    <HendlerTodoButtonStyle
                                        onClick={() => {
                                            HandlerDeletTodo(item.id)
                                        }}
                                    >
                                        <FontH3>삭제</FontH3>
                                    </HendlerTodoButtonStyle>
                                    {
                                        item.isDone === false ?
                                            (<HendlerTodoButtonStyle>
                                                <FontH3
                                                    onClick={() => {
                                                        hendlerIsdoneState(item.id)
                                                    }}
                                                >완료</FontH3>
                                            </HendlerTodoButtonStyle>
                                            ) : (
                                                <HendlerTodoButtonStyle>
                                                    <FontH3
                                                    onClick={() => {
                                                        HandlerChangeTodo(item.id, item.isDone)
                                                    }}
                                                    >취소</FontH3>
                                                </HendlerTodoButtonStyle>)
                                    }

                                    <HendlerTodoButtonStyle
                                        onClick={() => {
                                            navigate(`/${item.id}`)
                                        }}
                                    >
                                        <FontH3>상세보기</FontH3>
                                    </HendlerTodoButtonStyle>

                                </BoxTodo>
                            )
                        })
                }
            </BoxMainWarkingArea>
        </>
    )
}

export default TodoBox