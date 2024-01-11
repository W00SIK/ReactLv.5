import GlobalStyle from '../style/GlobalStyle'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { getTodos } from '../apis/todos'
import {
    FontH1,
    FontH3,
    BoxHeader,
    BoxInputButtonH,
    HendlerTodoButtonStyle,
} from '../style/StyledSheet'

function DetailPage() {
    // useQuery 합치기
    const {isLoading, isError, data } = useQuery("todos", getTodos)
    const params = useParams()
    const navigate = useNavigate(null);

    // const user = useSelector((state) => {
    //     return state.hendlerReducer
    // })


    const foundData = data.find((item) => {
        return item.id === parseInt(params.id)
    })

    return (
        <>
            <GlobalStyle />

            <BoxHeader>
                <FontH1>Todo List</FontH1>
                <HendlerTodoButtonStyle
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    <FontH3>이전으로</FontH3>
                </HendlerTodoButtonStyle>
            </BoxHeader>
            <BoxInputButtonH>
                <FontH1>
                    ID: {foundData.id}<br />
                    TITLE: {foundData.title}<br />
                    CONTENTS: {foundData.contents}
                </FontH1>
            </BoxInputButtonH>
        </>
    )
}

export default DetailPage