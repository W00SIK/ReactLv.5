import React from 'react'
import { useQuery } from 'react-query'
import { getTodos } from '../apis/todos'

function TodoBox({
    BoxMainWarkingArea,
    user,
    BoxTodo,
    FontBoxTodoH1,
    FontBoxTodoH2,
    HendlerTodoButtonStyle,
    FontH3,
    hendlerRemoveButton,
    hendlerIsdoneState,
    navigate,
    FontH2,
    BoxMainWarkingNameArea,
    BoxMainWarkingName,
    


}) {


    const {isLoading, isError, data } = useQuery("todos", getTodos)

    if (isLoading) {
        return <div>로딩중..</div>
    } 
    else if (isError) {
        return <div>오류!</div>
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
                                            hendlerRemoveButton(item.id)
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
                                            hendlerRemoveButton(item.id)
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
        </>
    )
}

export default TodoBox